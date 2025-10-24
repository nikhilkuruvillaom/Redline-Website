import { X } from "lucide-react";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

interface ProductDetailProps {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  backgroundColor: string;
  textColor: string;
  onClose: () => void;
}

export function ProductDetail({
  id,
  title,
  description,
  longDescription,
  backgroundColor,
  textColor,
  onClose,
}: ProductDetailProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  // Track scroll progress for parallax
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Subtle parallax: image moves slower than content (0.4x speed)
  const imageY = useTransform(scrollYProgress, [0, 1], [0, -200]);
  
  // Very subtle horizontal drift for depth
  const imageX = useTransform(scrollYProgress, [0, 1], [0, 30]);
  
  // Gentle scale change for premium feel
  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.05, 1]);
  
  // Subtle opacity fade
  const imageOpacity = useTransform(scrollYProgress, [0, 0.8, 1], [1, 1, 0.6]);

  const ProductImage = ({ size = "default" }: { size?: "default" | "large" }) => {
    const dimensions =
      size === "large"
        ? { width: "280px", height: "420px" }
        : { width: "220px", height: "330px" };

    return (
      <div
        className="border rounded-xl relative mx-auto"
        style={{
          width: dimensions.width,
          height: dimensions.height,
          borderColor:
            textColor === "#FFFFFF"
              ? "rgba(255,255,255,0.15)"
              : "rgba(0,0,0,0.08)",
          borderWidth: "1px",
        }}
      >
        {/* Bottle neck */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[30%] h-[15%] border border-b-0 rounded-t"
          style={{
            borderColor:
              textColor === "#FFFFFF"
                ? "rgba(255,255,255,0.15)"
                : "rgba(0,0,0,0.08)",
          }}
        />

        {/* Cap */}
        <div
          className="absolute -top-0.5 left-1/2 -translate-x-1/2 w-[25%] h-[6%] border rounded-sm"
          style={{
            borderColor:
              textColor === "#FFFFFF"
                ? "rgba(255,255,255,0.15)"
                : "rgba(0,0,0,0.08)",
            backgroundColor: backgroundColor,
          }}
        />

        {/* Label */}
        <div
          className="absolute top-[40%] left-1/2 -translate-x-1/2 w-[70%] h-[25%] border rounded-lg"
          style={{
            borderColor:
              textColor === "#FFFFFF"
                ? "rgba(255,255,255,0.15)"
                : "rgba(0,0,0,0.08)",
          }}
        />
      </div>
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      ref={containerRef}
      className="flex-1 w-full overflow-y-auto overflow-x-hidden relative"
      style={{ backgroundColor, color: textColor }}
    >
      {/* Scroll Progress Indicator */}
      <div
        className="fixed top-0 left-0 right-0 h-px z-50"
        style={{
          backgroundColor:
            textColor === "#FFFFFF"
              ? "rgba(255,255,255,0.06)"
              : "rgba(0,0,0,0.03)",
        }}
      >
        <motion.div
          className="h-full"
          style={{
            scaleX: scrollYProgress,
            originX: 0,
            backgroundColor: textColor,
            opacity: 0.25,
          }}
        />
      </div>

      {/* Close Button */}
      <div className="fixed top-8 right-8 z-50">
        <motion.button
          onClick={onClose}
          className="w-10 h-10 rounded-full backdrop-blur-md flex items-center justify-center transition-all duration-500"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          whileHover={{ scale: 1.08, backgroundColor: textColor === "#FFFFFF" ? "rgba(255,255,255,0.18)" : "rgba(0,0,0,0.12)" }}
          whileTap={{ scale: 0.96 }}
          style={{
            backgroundColor:
              textColor === "#FFFFFF"
                ? "rgba(255,255,255,0.1)"
                : "rgba(0,0,0,0.05)",
          }}
        >
          <X size={18} style={{ color: textColor, opacity: 0.7 }} strokeWidth={1.5} />
        </motion.button>
      </div>

      {/* Product Image with Subtle Parallax */}
      <div className="fixed left-1/2 top-[45%] -translate-x-1/2 -translate-y-1/2 pointer-events-none z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 1, ease: [0.16, 1, 0.3, 1] }}
          style={{
            x: imageX,
            y: imageY,
            scale: imageScale,
            opacity: imageOpacity,
          }}
        >
          <ProductImage size="large" />
        </motion.div>
      </div>

      {/* Scrollable Content */}
      <div className="relative z-20">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-start px-12 lg:px-20 py-24">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-md"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="tracking-widest mb-5 uppercase"
              style={{
                fontSize: "10px",
                fontWeight: "500",
                letterSpacing: "0.25em",
                opacity: 0.4,
              }}
            >
              Premium Collection
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="tracking-wide mb-6"
              style={{
                fontSize: "48px",
                fontWeight: "300",
                letterSpacing: "0.02em",
                lineHeight: "1.15",
              }}
            >
              {title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.75, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="mb-5"
              style={{
                fontSize: "16px",
                fontWeight: "400",
                letterSpacing: "0.01em",
                lineHeight: "1.6",
                opacity: 0.8,
              }}
            >
              {description}
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.85, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              style={{
                fontSize: "14px",
                fontWeight: "300",
                letterSpacing: "0.01em",
                lineHeight: "1.7",
                opacity: 0.6,
              }}
            >
              {longDescription}
            </motion.p>
          </motion.div>
        </section>

        {/* Features Section */}
        <section className="min-h-screen flex items-center justify-end px-12 lg:px-20 py-24">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-md"
          >
            <h2
              className="tracking-wide mb-8"
              style={{
                fontSize: "28px",
                fontWeight: "300",
                letterSpacing: "0.02em",
              }}
            >
              Key Features
            </h2>
            <div className="space-y-5">
              {[
                "Premium quality ingredients sourced ethically",
                "Sustainable, 100% recyclable packaging",
                "Handcrafted in small batches for quality",
                "Laboratory tested for purity and safety",
                "Natural formulation without harsh chemicals",
              ].map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="flex items-start gap-3"
                >
                  <div
                    className="w-1 h-1 rounded-full mt-2.5 flex-shrink-0"
                    style={{ backgroundColor: textColor, opacity: 0.4 }}
                  />
                  <p
                    style={{
                      fontSize: "15px",
                      fontWeight: "300",
                      lineHeight: "1.7",
                      opacity: 0.75,
                      letterSpacing: "0.01em",
                    }}
                  >
                    {feature}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Ingredients Section */}
        <section className="min-h-screen flex items-center justify-start px-12 lg:px-20 py-24">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-md"
          >
            <h2
              className="tracking-wide mb-6"
              style={{
                fontSize: "28px",
                fontWeight: "300",
                letterSpacing: "0.02em",
              }}
            >
              Ingredients
            </h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="mb-10"
              style={{
                fontSize: "14px",
                fontWeight: "300",
                letterSpacing: "0.01em",
                lineHeight: "1.8",
                opacity: 0.65,
              }}
            >
              Each product is carefully formulated using natural, ethically
              sourced ingredients. We believe in transparency and quality,
              ensuring every component meets our rigorous standards for
              excellence.
            </motion.p>
            <div className="grid grid-cols-2 gap-3">
              {[
                "Natural Extracts",
                "Organic Compounds",
                "Essential Minerals",
                "Pure Water Base",
                "Vitamin Complex",
                "Amino Acids",
              ].map((ingredient, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  className="py-4 px-4 rounded-lg border"
                  style={{
                    borderColor:
                      textColor === "#FFFFFF"
                        ? "rgba(255,255,255,0.1)"
                        : "rgba(0,0,0,0.06)",
                  }}
                >
                  <p
                    style={{
                      fontSize: "13px",
                      fontWeight: "400",
                      letterSpacing: "0.02em",
                      opacity: 0.8,
                    }}
                  >
                    {ingredient}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Usage Section */}
        <section className="min-h-screen flex items-center justify-end px-12 lg:px-20 py-24">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-md"
          >
            <h2
              className="tracking-wide mb-6"
              style={{
                fontSize: "28px",
                fontWeight: "300",
                letterSpacing: "0.02em",
              }}
            >
              How to Use
            </h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="mb-10"
              style={{
                fontSize: "14px",
                fontWeight: "300",
                letterSpacing: "0.01em",
                lineHeight: "1.8",
                opacity: 0.65,
              }}
            >
              Designed for daily use, this product integrates seamlessly into
              your routine. Whether morning or evening, it adapts to your
              lifestyle, providing consistent results with minimal effort.
            </motion.p>
            <div className="space-y-6">
              {[
                { step: "01", text: "Apply a small amount to clean surface" },
                { step: "02", text: "Gently massage in circular motions" },
                { step: "03", text: "Allow to absorb for optimal results" },
                { step: "04", text: "Use daily for best performance" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="flex items-start gap-5"
                >
                  <span
                    style={{
                      fontSize: "12px",
                      fontWeight: "400",
                      opacity: 0.35,
                      letterSpacing: "0.05em",
                      flexShrink: 0,
                    }}
                  >
                    {item.step}
                  </span>
                  <p
                    style={{
                      fontSize: "15px",
                      fontWeight: "300",
                      lineHeight: "1.7",
                      opacity: 0.75,
                      letterSpacing: "0.01em",
                    }}
                  >
                    {item.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Sustainability Section */}
        <section className="min-h-screen flex items-center justify-start px-12 lg:px-20 py-24">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-md"
          >
            <h2
              className="tracking-wide mb-8"
              style={{
                fontSize: "28px",
                fontWeight: "300",
                letterSpacing: "0.02em",
              }}
            >
              Our Commitment
            </h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="mb-6"
              style={{
                fontSize: "14px",
                fontWeight: "300",
                letterSpacing: "0.01em",
                lineHeight: "1.8",
                opacity: 0.65,
              }}
            >
              We're committed to protecting our planet. Our packaging is 100%
              recyclable, and we partner with suppliers who share our values of
              environmental stewardship and social responsibility.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              style={{
                fontSize: "14px",
                fontWeight: "300",
                letterSpacing: "0.01em",
                lineHeight: "1.8",
                opacity: 0.65,
              }}
            >
              Every choice we make considers the impact on future generations.
              From sourcing to production to delivery, sustainability guides our
              decisions.
            </motion.p>
          </motion.div>
        </section>

        {/* CTA Section */}
        <section className="min-h-screen flex items-center justify-center px-12 lg:px-20 py-24">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="text-center max-w-lg"
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="tracking-wide mb-5"
              style={{
                fontSize: "32px",
                fontWeight: "300",
                letterSpacing: "0.02em",
              }}
            >
              Experience {title}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="mb-12"
              style={{
                fontSize: "14px",
                fontWeight: "300",
                letterSpacing: "0.01em",
                lineHeight: "1.8",
                opacity: 0.6,
              }}
            >
              Join thousands who have discovered the difference quality makes.
              Elevate your daily routine with products that care as much about
              excellence as you do.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center justify-center gap-12 mb-12"
            >
              <div className="text-center">
                <p
                  className="mb-1"
                  style={{
                    fontSize: "20px",
                    fontWeight: "300",
                    letterSpacing: "0.01em",
                  }}
                >
                  $49
                </p>
                <p
                  style={{
                    fontSize: "11px",
                    opacity: 0.45,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                  }}
                >
                  Price
                </p>
              </div>
              <div
                className="w-px h-10"
                style={{
                  backgroundColor: textColor,
                  opacity: 0.12,
                }}
              />
              <div className="text-center">
                <p
                  className="mb-1"
                  style={{
                    fontSize: "20px",
                    fontWeight: "300",
                    letterSpacing: "0.01em",
                  }}
                >
                  500ml
                </p>
                <p
                  style={{
                    fontSize: "11px",
                    opacity: 0.45,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                  }}
                >
                  Volume
                </p>
              </div>
            </motion.div>

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-10 py-4 rounded-full transition-all duration-500"
              style={{
                backgroundColor: textColor,
                color: backgroundColor,
              }}
            >
              <span
                style={{
                  fontSize: "12px",
                  fontWeight: "400",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                }}
              >
                Add to Cart
              </span>
            </motion.button>
          </motion.div>
        </section>

        {/* Footer Spacing */}
        <div className="h-40" />
      </div>
    </motion.div>
  );
}
