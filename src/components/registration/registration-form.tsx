import { useForm, useFieldArray } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { registrationSchema, type RegistrationForm } from '@/lib/types/registration';
import { Button } from '@/components/ui/button';
import { TeamDetailsSection } from './sections/team-details-section';
import { ParticipantSection } from './sections/participant-section';

interface RegistrationFormProps {
  onSubmit: (data: RegistrationForm) => void;
}

export function RegistrationForm({ onSubmit }: RegistrationFormProps) {
  const form = useForm<RegistrationForm>({
    resolver: zodResolver(registrationSchema),
    defaultValues: {
      teamSize: 1,
      participants: [{}]
    }
  });

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: 'participants'
  });

  const handleTeamSizeChange = (size: number) => {
    form.setValue('teamSize', size);
    const currentLength = fields.length;
    
    if (size > currentLength) {
      for (let i = currentLength; i < size; i++) {
        append({});
      }
    } else if (size < currentLength) {
      for (let i = currentLength - 1; i >= size; i--) {
        remove(i);
      }
    }
  };

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
      <TeamDetailsSection
        form={form}
        onTeamSizeChange={handleTeamSizeChange}
      />

      {fields.map((field, index) => (
        <ParticipantSection
          key={field.id}
          form={form}
          index={index}
          total={fields.length}
        />
      ))}

      <div className="flex justify-end">
        <Button type="submit" size="lg">
          Review Registration
        </Button>
      </div>
    </form>
  );
}