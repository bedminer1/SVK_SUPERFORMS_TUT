import { z } from 'zod';
import { zod } from 'sveltekit-superforms/adapters'
import { superValidate } from 'sveltekit-superforms';

// The schema should be defined outside the load function
// for caching
const schema = z.object({
  name: z.string().default('Michael Smith'),
  email: z.string().email()
});


// INIT FORM
export const load = async () => {
    const form = await superValidate(zod(schema))

    return {
        form
    }
}