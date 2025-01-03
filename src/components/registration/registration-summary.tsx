import { Button } from '@/components/ui/button';
import { calculateTotalPrice } from '@/lib/utils/pricing';
import type { RegistrationForm } from '@/lib/types/registration';

interface RegistrationSummaryProps {
  data: RegistrationForm;
  onEdit: () => void;
}

export function RegistrationSummary({ data, onEdit }: RegistrationSummaryProps) {
  const accommodationCount = data.participants.filter(p => p.accommodationRequired).length;
  const pricing = calculateTotalPrice(data.teamSize, accommodationCount);

  return (
    <div className="space-y-8">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4">Team Details</h2>
        <dl className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <dt className="text-sm text-gray-600">College/University</dt>
            <dd className="font-medium">{data.collegeName}</dd>
          </div>
          <div>
            <dt className="text-sm text-gray-600">Location</dt>
            <dd className="font-medium">{data.city}, {data.state}</dd>
          </div>
          <div>
            <dt className="text-sm text-gray-600">Team Size</dt>
            <dd className="font-medium">{data.teamSize} participants</dd>
          </div>
        </dl>
      </div>

      {data.participants.map((participant, index) => (
        <div key={index} className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold mb-4">Participant {index + 1}</h3>
          <dl className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <dt className="text-sm text-gray-600">Name</dt>
              <dd className="font-medium">{participant.fullName}</dd>
            </div>
            <div>
              <dt className="text-sm text-gray-600">Year & Department</dt>
              <dd className="font-medium">{participant.currentYear} year, {participant.department}</dd>
            </div>
            <div>
              <dt className="text-sm text-gray-600">T-Shirt Size</dt>
              <dd className="font-medium">{participant.tShirtSize}</dd>
            </div>
            <div>
              <dt className="text-sm text-gray-600">Accommodation</dt>
              <dd className="font-medium">{participant.accommodationRequired ? 'Required' : 'Not Required'}</dd>
            </div>
          </dl>
        </div>
      ))}

      <div className="bg-emerald-50 rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4">Payment Summary</h2>
        <dl className="space-y-2">
          <div className="flex justify-between">
            <dt className="text-gray-600">Ticket Price</dt>
            <dd className="font-medium">₹{pricing.ticketPrice}</dd>
          </div>
          {pricing.accommodationPrice > 0 && (
            <div className="flex justify-between">
              <dt className="text-gray-600">Accommodation ({accommodationCount} participants)</dt>
              <dd className="font-medium">₹{pricing.accommodationPrice}</dd>
            </div>
          )}
          <div className="flex justify-between pt-2 border-t border-emerald-200">
            <dt className="text-lg font-semibold">Total</dt>
            <dd className="text-lg font-semibold">₹{pricing.total}</dd>
          </div>
        </dl>
      </div>

      <div className="flex justify-between">
        <Button variant="outline" onClick={onEdit}>
          Edit Registration
        </Button>
        <Button>
          Proceed to Payment
        </Button>
      </div>
    </div>
  );
}