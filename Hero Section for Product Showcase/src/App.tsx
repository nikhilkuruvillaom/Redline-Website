import { useState } from "react";
import { Navbar } from "./components/Navbar";
import { ProductGrid } from "./components/ProductGrid";
import { ProductDetail } from "./components/ProductDetail";
import { ProductNavStrip } from "./components/ProductNavStrip";
import { products } from "./data/products";
import { AnimatePresence } from "motion/react";

export default function App() {
  const [selectedProductId, setSelectedProductId] = useState<number | null>(
    null
  );

  const selectedProduct = products.find((p) => p.id === selectedProductId);

  const handleLogoClick = () => {
    setSelectedProductId(null);
  };

  return (
    <div className="h-screen w-full overflow-hidden flex flex-col">
      <Navbar onLogoClick={handleLogoClick} />
      
      {/* Show navigation strip when a product is selected */}
      {selectedProductId && (
        <ProductNavStrip
          selectedProductId={selectedProductId}
          onProductSelect={setSelectedProductId}
        />
      )}

      <AnimatePresence mode="wait">
        {selectedProduct ? (
          <ProductDetail
            key={selectedProduct.id}
            {...selectedProduct}
            onClose={() => setSelectedProductId(null)}
          />
        ) : (
          <ProductGrid
            key="grid"
            onProductClick={setSelectedProductId}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
