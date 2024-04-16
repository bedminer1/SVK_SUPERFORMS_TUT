import { z } from 'zod';

// The schema should be defined outside the load function
// for caching
const schema = z.object({
  name: z.string().default('Michael Smith'),
  email: z.string().email()
});