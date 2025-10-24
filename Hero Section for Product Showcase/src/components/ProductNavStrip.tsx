import { products } from "../data/products";
import { motion } from "motion/react";

interface ProductNavStripProps {
  selectedProductId: number;
  onProductSelect: (id: number) => void;
}

export function ProductNavStrip({
  selectedProductId,
  onProductSelect,
}: ProductNavStripProps) {
  return (
    <motion.div
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="w-full bg-white border-b border-border flex-shrink-0"
    >
      <div className="px-8 py-4 overflow-x-auto">
        <div className="flex items-center gap-8 min-w-max">
          {products.map((product) => {
            const isSelected = product.id === selectedProductId;
            return (
              <button
                key={product.id}
                onClick={() => onProductSelect(product.id)}
                className="flex-shrink-0 transition-all duration-300 hover:scale-105"
                style={{
                  opacity: isSelected ? 1 : 0.4,
                }}
              >
                <span
                  className="tracking-wider whitespace-nowrap"
                  style={{
                    fontSize: "12px",
                    fontWeight: "700",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                  }}
                >
                  {product.title}
                </span>
                {isSelected && (
                  <motion.div
                    layoutId="activeProductIndicator"
                    className="h-0.5 mt-2 bg-primary"
                    transition={{ duration: 0.3 }}
                  />
                )}
              </button>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}
