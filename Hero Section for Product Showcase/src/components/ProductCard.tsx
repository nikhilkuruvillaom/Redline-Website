interface ProductCardProps {
  title: string;
  description: string;
  backgroundColor: string;
  textColor: string;
  onClick?: () => void;
}

export function ProductCard({
  title,
  description,
  backgroundColor,
  textColor,
  onClick,
}: ProductCardProps) {
  return (
    <div
      onClick={onClick}
      className="group flex flex-col items-center justify-center p-2 h-full w-full min-h-0 transition-all duration-300 cursor-pointer hover:scale-[1.02]"
      style={{ backgroundColor, color: textColor }}
    >
      {/* Product Title */}
      <div className="flex-shrink-0" style={{ marginBottom: "32px" }}>
        <h2
          className="tracking-wider text-center"
          style={{
            fontSize: "16px",
            fontWeight: "700",
            letterSpacing: "0.1em",
          }}
        >
          {title}
        </h2>
      </div>

      {/* Product Image Placeholder - Wireframe */}
      <div className="flex items-center justify-center w-full max-w-[80px] flex-shrink-0" style={{ height: "120px", marginBottom: "32px" }}>
        <div
          className="w-full h-full border-2 rounded-lg relative"
          style={{
            borderColor: textColor === "#FFFFFF" ? "rgba(255,255,255,0.3)" : "rgba(0,0,0,0.1)",
          }}
        >
          {/* Bottle neck wireframe */}
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[30%] h-[15%] border-2 border-b-0"
            style={{
              borderColor: textColor === "#FFFFFF" ? "rgba(255,255,255,0.3)" : "rgba(0,0,0,0.1)",
            }}
          />
          
          {/* Cap wireframe */}
          <div
            className="absolute -top-1 left-1/2 -translate-x-1/2 w-[25%] h-[6%] border-2 rounded-sm"
            style={{
              borderColor: textColor === "#FFFFFF" ? "rgba(255,255,255,0.3)" : "rgba(0,0,0,0.1)",
              backgroundColor: backgroundColor,
            }}
          />

          {/* Label placeholder */}
          <div
            className="absolute top-[40%] left-1/2 -translate-x-1/2 w-[70%] h-[25%] border-2 rounded"
            style={{
              borderColor: textColor === "#FFFFFF" ? "rgba(255,255,255,0.3)" : "rgba(0,0,0,0.1)",
            }}
          />
        </div>
      </div>

      {/* Product Description - Hidden by default, visible on hover */}
      <div className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <p
          className="text-center tracking-wide"
          style={{
            fontSize: "14px",
            fontWeight: "400",
            letterSpacing: "0.05em",
          }}
        >
          {description}
        </p>
      </div>
    </div>
  );
}
