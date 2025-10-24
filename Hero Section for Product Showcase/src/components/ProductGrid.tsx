import { ProductCard } from "./ProductCard";
import { products } from "../data/products";
import { motion } from "motion/react";

interface ProductGridProps {
  onProductClick: (id: number) => void;
}

export function ProductGrid({ onProductClick }: ProductGridProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="flex-1 w-full grid grid-cols-3 grid-rows-3"
    >
      {products.map((product, index) => (
        <motion.div
          key={product.id}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: index * 0.05 }}
          className="h-full w-full"
        >
          <ProductCard
            title={product.title}
            description={product.description}
            backgroundColor={product.backgroundColor}
            textColor={product.textColor}
            onClick={() => onProductClick(product.id)}
          />
        </motion.div>
      ))}
    </motion.div>
  );
}
