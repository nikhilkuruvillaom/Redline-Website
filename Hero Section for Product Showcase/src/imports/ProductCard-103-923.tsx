import imgScreenshot20250604At123730Pm from "figma:asset/bfdb3dda6e8036b9db5b51fd24f680affd0a619b.png";

function Heading() {
  return <div className="absolute h-[24px] left-[62.96px] top-[10px] w-[241.078px]" data-name="Heading 2" />;
}

export default function ProductCard() {
  return (
    <div className="bg-[#caa87c] relative size-full" data-name="ProductCard">
      <Heading />
      <div className="absolute h-[261px] left-[8px] top-[-6px] w-[352px]" data-name="Screenshot 2025-06-04 at 12.37.30 PM">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgScreenshot20250604At123730Pm} />
      </div>
    </div>
  );
}