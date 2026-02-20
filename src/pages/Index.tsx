import { useState, useMemo } from "react";
import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";

const categories = ["All", ...Array.from(new Set(products.map((p) => p.category)))];

const Index = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = useMemo(
    () =>
      activeCategory === "All"
        ? products
        : products.filter((p) => p.category === activeCategory),
    [activeCategory]
  );

  return (
    <main className="container mx-auto px-4 py-12">
      {/* Hero */}
      <section className="text-center mb-16 animate-fade-in">
        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl mb-4">
          Curated Essentials
        </h1>
        <p className="text-muted-foreground text-lg max-w-xl mx-auto">
          Thoughtfully designed goods for everyday living. Quality materials, timeless style.
        </p>
      </section>

      {/* Filters */}
      <div className="flex gap-2 mb-10 overflow-x-auto pb-2 justify-center">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap ${
              activeCategory === cat
                ? "bg-primary text-primary-foreground"
                : "bg-secondary text-secondary-foreground hover:bg-border"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Product Grid */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filtered.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </section>
    </main>
  );
};

export default Index;
