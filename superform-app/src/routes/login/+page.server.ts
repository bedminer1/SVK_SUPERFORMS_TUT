import { fail } from '@sveltejs/kit'
import { z } from "zod";
import { zod } from "sveltekit-superforms/adapters";
import { superValidate, message } from "sveltekit-superforms";

// The schema should be defined outside the load function
// for caching
const schema = z.object({
  name: z.string().min(2).max(20),
  email: z.string().email(),
});

// INIT FORM
export const load = async () => {
  const form = await superValidate(zod(schema));

  return {
    form,
  };
};

// POSTING DATA
export const actions = {
  default: async ({ request }) => {
    const form = await superValidate(request, zod(schema));
    console.log(form);
    /*
    Example form: {
    id: '1mnxh8i',
    valid: true,
    posted: true,
    errors: {},
    data: { name: 'Michael Smith', email: 'ok@gmail.com' }
    }
    */

    if (!form.valid) {
      return fail(400, { form });
    }

    return message(form, 'Form posted successfully')
  },
};
