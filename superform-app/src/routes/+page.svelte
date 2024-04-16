<script lang="ts">
	import { superForm } from "sveltekit-superforms";

	export let data

	// superForm api makes data.form into an object with more useful properties
	const { form, errors, constraints, message, enhance } = superForm(data.form)
</script>
<div class="flex flex-col gap-2 justify-center h-screen items-center">
	<form method="POST" use:enhance class="rounded-lg flex flex-col gap-1 w-1/2 p-3 px-5 border-dashed border-2">
		<label for="name" class="label">Name</label>
		<input
			type="text"
			name="name"
			class="input"
			aria-invalid={$errors.name ? 'true' : undefined}
			bind:value={$form.name}
			{...$constraints.name} 
		/>
		{#if $errors.name}
			<span class="text-red-300">{$errors.name}</span>
		{/if}
		<label for="email" class="label">E-mail</label>
		<input type="email" name="email" aria-invalid={$errors.email ? 'true' : undefined} {...$constraints.email}  class="input" bind:value={$form.email} />
		{#if $errors.email}<span class="text-red-300">{$errors.email}</span>{/if}

		<div><button>Submit</button></div>
	</form>

<!-- SUCCESS MESSAGE -->
	{#if $message}
		<h3>{$message}</h3>
	{/if}
</div>
