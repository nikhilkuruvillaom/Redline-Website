import imgScreenshot20250604At123817Pm from "figma:asset/1f4f878a8939c45be63b6d72545ef0a9f67a864e.png";

function Heading() {
  return <div className="absolute h-[24px] left-[79.46px] top-[10px] w-[208.078px]" data-name="Heading 2" />;
}

export default function ProductCard() {
  return (
    <div className="bg-[#8dd9e1] relative size-full" data-name="ProductCard">
      <Heading />
      <div className="absolute h-[213px] left-[37px] top-[18px] w-[293px]" data-name="Screenshot 2025-06-04 at 12.38.17 PM">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgScreenshot20250604At123817Pm} />
      </div>
    </div>
  );
}