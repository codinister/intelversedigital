import { z } from 'zod';

export const commForm = z.object({
  id: z.string(),
  first_name: z.string().min(1, 'First name required!'),
  last_name: z.string().min(1, 'First name required!'),
  email: z.email().min(3, 'Email required!'),
  message: z.string().min(2, 'Comment required!'),
});
