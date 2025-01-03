interface TicketPriceProps {
  price: number;
  available?: number | null;
}

export function TicketPrice({ price, available }: TicketPriceProps) {
  return (
    <div className="space-y-4">
      <p className="text-3xl font-bold text-gray-900">
        ₹{price}
        <span className="text-base font-normal text-gray-500">/person</span>
      </p>
      {available !== null && (
        <p className="text-sm text-center text-gray-500">
          {available} tickets remaining
        </p>
      )}
    </div>
  );
}