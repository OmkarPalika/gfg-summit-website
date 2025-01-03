import { z } from 'zod';

export const participantSchema = z.object({
  fullName: z.string().min(2, 'Name must be at least 2 characters'),
  currentYear: z.enum(['1st', '2nd', '3rd', '4th', 'other']),
  department: z.string().min(2, 'Department is required'),
  tShirtSize: z.enum(['S', 'M', 'L', 'XL', '2XL', '3XL']),
  whatsappNumber: z.string().regex(/^\+?[1-9]\d{9,11}$/, 'Invalid WhatsApp number'),
  accommodationRequired: z.boolean(),
  linkedinProfile: z.string().url().optional().or(z.literal('')),
  suggestions: z.string().optional()
});

export const registrationSchema = z.object({
  collegeName: z.string().min(2, 'College name is required'),
  city: z.string().min(2, 'City is required'),
  state: z.string().min(2, 'State is required'),
  teamSize: z.number().min(1).max(10),
  participants: z.array(participantSchema)
});

export type RegistrationForm = z.infer<typeof registrationSchema>;
export type ParticipantForm = z.infer<typeof participantSchema>;