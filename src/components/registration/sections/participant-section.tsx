import { UseFormReturn } from 'react-hook-form';
import { type RegistrationForm } from '@/lib/types/registration';
import { FormField } from '@/components/ui/form-field';

interface ParticipantSectionProps {
  form: UseFormReturn<RegistrationForm>;
  index: number;
  total: number;
}

export function ParticipantSection({ form, index, total }: ParticipantSectionProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold mb-4">
        Participant {index + 1} of {total}
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormField
          label="Full Name"
          error={form.formState.errors.participants?.[index]?.fullName?.message}
          required
        >
          <input
            {...form.register(`participants.${index}.fullName`)}
            className="w-full rounded-lg border-gray-300"
          />
        </FormField>

        <FormField
          label="Current Year"
          error={form.formState.errors.participants?.[index]?.currentYear?.message}
          required
        >
          <select
            {...form.register(`participants.${index}.currentYear`)}
            className="w-full rounded-lg border-gray-300"
          >
            <option value="">Select Year</option>
            {['1st', '2nd', '3rd', '4th', 'other'].map((year) => (
              <option key={year} value={year}>{year}</option>
            ))}
          </select>
        </FormField>

        <FormField
          label="Department"
          error={form.formState.errors.participants?.[index]?.department?.message}
          required
        >
          <input
            {...form.register(`participants.${index}.department`)}
            className="w-full rounded-lg border-gray-300"
          />
        </FormField>

        <FormField
          label="T-Shirt Size"
          error={form.formState.errors.participants?.[index]?.tShirtSize?.message}
          required
        >
          <select
            {...form.register(`participants.${index}.tShirtSize`)}
            className="w-full rounded-lg border-gray-300"
          >
            <option value="">Select Size</option>
            {['S', 'M', 'L', 'XL', '2XL', '3XL'].map((size) => (
              <option key={size} value={size}>{size}</option>
            ))}
          </select>
        </FormField>

        <FormField
          label="WhatsApp Number"
          error={form.formState.errors.participants?.[index]?.whatsappNumber?.message}
          required
        >
          <input
            {...form.register(`participants.${index}.whatsappNumber`)}
            type="tel"
            className="w-full rounded-lg border-gray-300"
          />
        </FormField>

        <FormField
          label="Accommodation Required"
          error={form.formState.errors.participants?.[index]?.accommodationRequired?.message}
        >
          <div className="flex items-center space-x-2">
            <input
              {...form.register(`participants.${index}.accommodationRequired`)}
              type="checkbox"
              className="rounded border-gray-300"
            />
            <span className="text-sm text-gray-600">Yes, I need accommodation (₹1,499)</span>
          </div>
        </FormField>

        <FormField
          label="LinkedIn Profile (Optional)"
          error={form.formState.errors.participants?.[index]?.linkedinProfile?.message}
        >
          <input
            {...form.register(`participants.${index}.linkedinProfile`)}
            type="url"
            className="w-full rounded-lg border-gray-300"
            placeholder="https://linkedin.com/in/username"
          />
        </FormField>

        <FormField
          label="Suggestions (Optional)"
          error={form.formState.errors.participants?.[index]?.suggestions?.message}
        >
          <textarea
            {...form.register(`participants.${index}.suggestions`)}
            className="w-full rounded-lg border-gray-300"
            rows={3}
          />
        </FormField>
      </div>
    </div>
  );
}