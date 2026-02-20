import { X, Trash2, ShoppingBag } from "lucide-react";
import { useCart } from "@/context/CartContext";
import QuantitySelector from "./QuantitySelector";

const CartDrawer = () => {
  const { items, removeFromCart, updateQuantity, totalPrice, isCartOpen, setIsCartOpen } = useCart();

  if (!isCartOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 z-50 bg-foreground/20 backdrop-blur-sm animate-fade-in"
        onClick={() => setIsCartOpen(false)}
      />

      {/* Drawer */}
      <aside className="fixed right-0 top-0 z-50 h-full w-full max-w-md bg-background border-l border-border shadow-2xl animate-slide-in-right flex flex-col">
        <div className="flex items-center justify-between p-6 border-b border-border">
          <h2 className="font-display text-xl">Your Cart</h2>
          <button
            onClick={() => setIsCartOpen(false)}
            className="hover:text-accent transition-colors"
            aria-label="Close cart"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center gap-4 text-muted-foreground">
            <ShoppingBag className="h-12 w-12" />
            <p className="text-lg">Your cart is empty</p>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {items.map((item) => (
                <div
                  key={item.product.id}
                  className="flex gap-4 animate-fade-in"
                >
                  <img
                    src={item.product.images[0]}
                    alt={item.product.name}
                    className="w-20 h-20 object-cover rounded-lg bg-secondary"
                  />
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium text-sm truncate">
                      {item.product.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-0.5">
                      ${item.product.price}
                    </p>
                    <div className="flex items-center justify-between mt-2">
                      <QuantitySelector
                        quantity={item.quantity}
                        onChange={(q) => updateQuantity(item.product.id, q)}
                      />
                      <button
                        onClick={() => removeFromCart(item.product.id)}
                        className="text-muted-foreground hover:text-sale transition-colors ml-2"
                        aria-label="Remove item"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-6 border-t border-border space-y-4">
              <div className="flex justify-between font-medium">
                <span>Subtotal</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
              <button className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">
                Checkout
              </button>
            </div>
          </>
        )}
      </aside>
    </>
  );
};

export default CartDrawer;
