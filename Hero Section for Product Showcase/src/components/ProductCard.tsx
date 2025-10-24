import imgPowerPotionMockUp222 from "../assets/afcb1ae8368b5155cf92cb93462da098e9d69620.png";
import imgSnackbar2 from "../assets/9e8c9dc75f917fd85be83dcc148ef6c9919b1dba.png";
import imgScreenshot20250604At40128Pm1 from "../assets/7d3af95862a93e76dd6971c0d720622da3051329.png";
import imgScreenshot20250604At123730Pm from "../assets/bfdb3dda6e8036b9db5b51fd24f680affd0a619b.png";
import imgScreenshot20250604At32233Pm1 from "../assets/c1e3be74d807abc9993c0af7e14044a10c998292.png";
import imgScreenshot20250604At123817Pm from "../assets/1f4f878a8939c45be63b6d72545ef0a9f67a864e.png";
import imgScreenshot20250604At22641Pm1 from "../assets/c576374d9850019f874b9d85d0f7c1f855739efb.png";
import imgScreenshot20250604At34008Pm1 from "../assets/f6ab21e52f03fd5997b50614beec55433df9fffb.png";
import imgScreenshot20250604At63041Pm1 from "../assets/7d1bc72ae56b0addb3215c58f57a2f605abc3154.png";

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
  const isPowerPotion = title === "POWER POTION";
  const isSpicedAlmond = title === "SPICED ALMOND BAR";
  const isMacaLemon = title === "MACA-LEMON BITES";
  const isLavenderHoney = title === "LAVENDER HONEY LIP BALM";
  const isCucumberMist = title === "CUCUMBER MIST";
  const isVanillaOat = title === "VANILLA OAT BODYMILK";
  const isPeppermintGinger = title === "PEPPERMINT GINGER ELIXIR";
  const isDoNotDisturb = title === "DO-NOT-DISTURB SOY CANDLE";
  const isChamomile = title === "CHAMOMILE PILLOW MIST";
  const hasBackgroundImage = isPowerPotion || isSpicedAlmond || isMacaLemon || isLavenderHoney || isCucumberMist || isVanillaOat || isPeppermintGinger || isDoNotDisturb || isChamomile;
  
  return (
    <div
      onClick={onClick}
      className="group flex flex-col items-center justify-center p-2 h-full w-full min-h-0 transition-all duration-300 cursor-pointer hover:scale-[1.02] relative overflow-hidden"
      style={{ backgroundColor, color: textColor }}
    >
      {/* Background Images */}
      {isPowerPotion && (
        <div className="absolute inset-0 flex items-center justify-center opacity-90">
          <img
            src={imgPowerPotionMockUp222}
            alt="Power Potion"
            className="w-auto h-[85%] object-contain pointer-events-none"
            style={{
              filter: "brightness(0.95)",
            }}
          />
        </div>
      )}
      
      {isSpicedAlmond && (
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
          <img
            src={imgSnackbar2}
            alt="Spiced Almond Bar"
            className="w-auto h-[110%] object-contain pointer-events-none"
            style={{
              filter: "brightness(0.95)",
            }}
          />
        </div>
      )}
      
      {isMacaLemon && (
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
          <img
            src={imgScreenshot20250604At40128Pm1}
            alt="Maca-Lemon Bites"
            className="w-auto h-[90%] object-contain pointer-events-none"
            style={{
              filter: "brightness(0.95)",
            }}
          />
        </div>
      )}
      
      {isLavenderHoney && (
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
          <img
            src={imgScreenshot20250604At123730Pm}
            alt="Lavender Honey Lip Balm"
            className="w-auto h-[105%] object-contain pointer-events-none"
            style={{
              filter: "brightness(0.95)",
            }}
          />
        </div>
      )}
      
      {isCucumberMist && (
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
          <img
            src={imgScreenshot20250604At32233Pm1}
            alt="Cucumber Mist"
            className="w-auto h-[95%] object-contain pointer-events-none"
            style={{
              filter: "brightness(0.95)",
            }}
          />
        </div>
      )}
      
      {isVanillaOat && (
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
          <img
            src={imgScreenshot20250604At123817Pm}
            alt="Vanilla Oat Bodymilk"
            className="w-auto h-[85%] object-contain pointer-events-none"
            style={{
              filter: "brightness(0.95)",
            }}
          />
        </div>
      )}
      
      {isPeppermintGinger && (
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
          <img
            src={imgScreenshot20250604At22641Pm1}
            alt="Peppermint Ginger Elixir"
            className="w-auto h-[95%] object-contain pointer-events-none"
            style={{
              filter: "brightness(0.95)",
            }}
          />
        </div>
      )}
      
      {isDoNotDisturb && (
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
          <img
            src={imgScreenshot20250604At34008Pm1}
            alt="Do-Not-Disturb Soy Candle"
            className="w-auto h-[80%] object-contain pointer-events-none"
            style={{
              filter: "brightness(0.95)",
            }}
          />
        </div>
      )}
      
      {isChamomile && (
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
          <img
            src={imgScreenshot20250604At63041Pm1}
            alt="Chamomile Pillow Mist"
            className="w-auto h-[70%] object-contain pointer-events-none"
            style={{
              filter: "brightness(0.95)",
            }}
          />
        </div>
      )}
      {/* Product Title */}
      <div className="flex-shrink-0 relative z-10" style={{ marginBottom: "32px" }}>
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

      {/* Product Image Placeholder - Wireframe (hidden for products with background images) */}
      {!hasBackgroundImage && (
        <div className="flex items-center justify-center w-full max-w-[80px] flex-shrink-0 relative z-10" style={{ height: "120px", marginBottom: "32px" }}>
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
      )}
      
      {/* Spacer for products with background images to maintain layout */}
      {hasBackgroundImage && (
        <div className="flex-shrink-0" style={{ height: "120px", marginBottom: "32px" }} />
      )}

      {/* Product Description - Hidden by default, visible on hover */}
      <div className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 relative z-10">
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
