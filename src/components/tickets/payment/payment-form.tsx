import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/lib/auth/auth-context';
import { Button } from '@/components/ui/button';
import { FormField } from '@/components/ui/form-field';
import { LoadingSpinner } from '@/components/ui/loading-spinner';
import { initiatePayment } from '@/lib/payment/payment-service';
import { toast } from 'react-hot-toast';

interface PaymentFormProps {
  amount: number;
  registrationId: string;
  onSuccess: () => void;
}

export function PaymentForm({ amount, registrationId, onSuccess }: PaymentFormProps) {
  const [loading, setLoading] = useState(false);
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) {
      navigate('/login');
      return;
    }

    setLoading(true);
    try {
      await initiatePayment({ registrationId, amount });
      toast.success('Payment successful!');
      onSuccess();
    } catch (error) {
      toast.error('Payment failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="bg-gray-50 p-4 rounded-lg">
        <div className="flex justify-between items-center">
          <span className="text-gray-600">Total Amount:</span>
          <span className="text-2xl font-bold text-gray-900">₹{amount}</span>
        </div>
      </div>

      <FormField label="Card Number" required>
        <input
          type="text"
          placeholder="4242 4242 4242 4242"
          className="w-full rounded-lg border-gray-300"
          disabled={loading}
        />
      </FormField>

      <div className="grid grid-cols-2 gap-4">
        <FormField label="Expiry Date" required>
          <input
            type="text"
            placeholder="MM/YY"
            className="w-full rounded-lg border-gray-300"
            disabled={loading}
          />
        </FormField>

        <FormField label="CVV" required>
          <input
            type="text"
            placeholder="123"
            className="w-full rounded-lg border-gray-300"
            disabled={loading}
          />
        </FormField>
      </div>

      <Button type="submit" className="w-full" disabled={loading}>
        {loading ? (
          <span className="flex items-center justify-center">
            <LoadingSpinner className="mr-2" />
            Processing...
          </span>
        ) : (
          'Pay Now'
        )}
      </Button>
    </form>
  );
}