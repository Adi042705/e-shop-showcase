import { Minus, Plus } from "lucide-react";

interface QuantitySelectorProps {
  quantity: number;
  onChange: (quantity: number) => void;
  min?: number;
  max?: number;
}

const QuantitySelector = ({ quantity, onChange, min = 1, max = 99 }: QuantitySelectorProps) => {
  return (
    <div className="flex items-center border border-border rounded-lg overflow-hidden">
      <button
        onClick={() => onChange(Math.max(min, quantity - 1))}
        className="px-3 py-2 hover:bg-secondary transition-colors disabled:opacity-40"
        disabled={quantity <= min}
        aria-label="Decrease quantity"
      >
        <Minus className="h-4 w-4" />
      </button>
      <span className="px-4 py-2 min-w-[3rem] text-center font-medium text-sm tabular-nums">
        {quantity}
      </span>
      <button
        onClick={() => onChange(Math.min(max, quantity + 1))}
        className="px-3 py-2 hover:bg-secondary transition-colors disabled:opacity-40"
        disabled={quantity >= max}
        aria-label="Increase quantity"
      >
        <Plus className="h-4 w-4" />
      </button>
    </div>
  );
};

export default QuantitySelector;
