<script lang="ts">
	import { superForm } from "sveltekit-superforms";

	export let data

	// superForm api makes data.form into an object with more useful properties
	const { form } = superForm(data.form)
</script>

<form method="POST">
	<label for="name" class="label">Name</label>
	<input type="text" name="name" class="input" bind:value={$form.name} />
  
	<label for="email" class="label">E-mail</label>
	<input type="email" name="email" class="input" bind:value={$form.email} />
  
	<div><button>Submit</button></div>
</form>
