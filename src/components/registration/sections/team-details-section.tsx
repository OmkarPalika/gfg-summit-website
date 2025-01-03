import { UseFormReturn } from 'react-hook-form';
import { type RegistrationForm } from '@/lib/types/registration';
import { FormField } from '@/components/ui/form-field';

interface TeamDetailsSectionProps {
  form: UseFormReturn<RegistrationForm>;
  onTeamSizeChange: (size: number) => void;
}

export function TeamDetailsSection({ form, onTeamSizeChange }: TeamDetailsSectionProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold mb-4">Team Details</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormField
          label="College/University Name"
          error={form.formState.errors.collegeName?.message}
          required
        >
          <input
            {...form.register('collegeName')}
            className="w-full rounded-lg border-gray-300"
          />
        </FormField>

        <FormField
          label="City"
          error={form.formState.errors.city?.message}
          required
        >
          <input
            {...form.register('city')}
            className="w-full rounded-lg border-gray-300"
          />
        </FormField>

        <FormField
          label="State"
          error={form.formState.errors.state?.message}
          required
        >
          <input
            {...form.register('state')}
            className="w-full rounded-lg border-gray-300"
          />
        </FormField>

        <FormField
          label="Team Size"
          error={form.formState.errors.teamSize?.message}
          required
        >
          <select
            {...form.register('teamSize', {
              valueAsNumber: true,
              onChange: (e) => onTeamSizeChange(Number(e.target.value))
            })}
            className="w-full rounded-lg border-gray-300"
          >
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((size) => (
              <option key={size} value={size}>
                {size} {size === 1 ? 'Person' : 'People'}
              </option>
            ))}
          </select>
        </FormField>
      </div>
    </div>
  );
}