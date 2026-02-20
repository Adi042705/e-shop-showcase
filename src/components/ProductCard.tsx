import type { Product } from "@/types/product";
import StarRating from "./StarRating";
import { Link } from "react-router-dom";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block animate-fade-in"
    >
      <div className="relative aspect-square overflow-hidden rounded-lg bg-secondary mb-3">
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        {product.badge && (
          <span
            className={`absolute top-3 left-3 px-2.5 py-1 text-xs font-semibold rounded-full ${
              product.badge === "Sale"
                ? "bg-sale text-accent-foreground"
                : "bg-primary text-primary-foreground"
            }`}
          >
            {product.badge}
          </span>
        )}
      </div>

      <div className="space-y-1.5">
        <p className="text-xs text-muted-foreground uppercase tracking-wider">
          {product.category}
        </p>
        <h3 className="font-display text-lg group-hover:text-accent transition-colors">
          {product.name}
        </h3>
        <StarRating rating={product.rating} reviewCount={product.reviewCount} />
        <div className="flex items-center gap-2">
          <span className="font-semibold">${product.price}</span>
          {product.originalPrice && (
            <>
              <span className="text-sm text-muted-foreground line-through">
                ${product.originalPrice}
              </span>
              <span className="text-xs font-semibold text-sale">
                -{discount}%
              </span>
            </>
          )}
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
