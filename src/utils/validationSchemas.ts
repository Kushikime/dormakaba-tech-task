import { object, string, TypeOf } from 'zod';

export const loginSchema = object({
  email: string().nonempty('Email is required').email('Email is invalid'),
  password: string()
    .nonempty('Password is required')
    .min(4, 'Password must be more than 4 characters')
    .max(16, 'Password must be less than 16 characters'),
});

export type LoginInput = TypeOf<typeof loginSchema>;