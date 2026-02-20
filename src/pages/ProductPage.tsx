import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { products } from "@/data/products";
import StarRating from "@/components/StarRating";
import QuantitySelector from "@/components/QuantitySelector";
import { useCart } from "@/context/CartContext";
import { ArrowLeft, Check } from "lucide-react";

const ProductPage = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  const { addToCart } = useCart();

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="font-display text-2xl mb-4">Product not found</h1>
        <Link to="/" className="text-accent hover:underline">
          Back to shop
        </Link>
      </div>
    );
  }

  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  const handleAddToCart = () => {
    addToCart(product, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <main className="container mx-auto px-4 py-8 animate-fade-in">
      <Link
        to="/"
        className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to shop
      </Link>

      <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
        {/* Image Gallery */}
        <div className="space-y-3">
          <div className="aspect-square overflow-hidden rounded-xl bg-secondary">
            <img
              src={product.images[0]}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Product Info */}
        <div className="flex flex-col justify-center space-y-6">
          <div>
            <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
              {product.category}
            </p>
            <h1 className="font-display text-3xl lg:text-4xl mb-3">
              {product.name}
            </h1>
            <StarRating rating={product.rating} reviewCount={product.reviewCount} />
          </div>

          <div className="flex items-baseline gap-3">
            <span className="text-2xl font-bold">${product.price}</span>
            {product.originalPrice && (
              <>
                <span className="text-lg text-muted-foreground line-through">
                  ${product.originalPrice}
                </span>
                <span className="text-sm font-semibold text-sale bg-sale/10 px-2 py-0.5 rounded-full">
                  -{discount}%
                </span>
              </>
            )}
          </div>

          <p className="text-muted-foreground leading-relaxed">
            {product.description}
          </p>

          <div className="flex items-center gap-4 pt-2">
            <QuantitySelector quantity={quantity} onChange={setQuantity} />
            <button
              onClick={handleAddToCart}
              disabled={added}
              className={`flex-1 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${
                added
                  ? "bg-green-600 text-accent-foreground"
                  : "bg-primary text-primary-foreground hover:opacity-90"
              }`}
            >
              {added ? (
                <>
                  <Check className="h-4 w-4" />
                  Added!
                </>
              ) : (
                "Add to Cart"
              )}
            </button>
          </div>

          <div className="border-t border-border pt-6 space-y-3 text-sm text-muted-foreground">
            <p>✦ Free shipping on orders over $100</p>
            <p>✦ 30-day hassle-free returns</p>
            <p>✦ Ethically sourced materials</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProductPage;
