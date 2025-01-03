import { Dialog } from '@headlessui/react';
import { X } from 'lucide-react';
import { PaymentForm } from './payment-form';
import { motion, AnimatePresence } from 'framer-motion';

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  amount: number;
  registrationId: string;
}

export function PaymentModal({ isOpen, onClose, amount, registrationId }: PaymentModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <Dialog
          as={motion.div}
          static
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          open={isOpen}
          onClose={onClose}
          className="fixed inset-0 z-50 overflow-y-auto"
        >
          <div className="min-h-screen px-4 text-center">
            <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />

            <div className="inline-block w-full max-w-md p-6 my-8 text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
              <div className="flex justify-between items-center mb-4">
                <Dialog.Title as="h3" className="text-lg font-medium text-gray-900">
                  Complete Payment
                </Dialog.Title>
                <button
                  onClick={onClose}
                  className="text-gray-400 hover:text-gray-500"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <PaymentForm
                amount={amount}
                registrationId={registrationId}
                onSuccess={onClose}
              />
            </div>
          </div>
        </Dialog>
      )}
    </AnimatePresence>
  );
}