import imgScreenshot20250604At32233Pm1 from "figma:asset/c1e3be74d807abc9993c0af7e14044a10c998292.png";

function Heading() {
  return <div className="absolute h-[24px] left-[110.4px] top-[10px] w-[146.203px]" data-name="Heading 2" />;
}

export default function ProductCard() {
  return (
    <div className="bg-[#abb87e] relative size-full" data-name="ProductCard">
      <Heading />
      <div className="absolute h-[244px] left-[-39px] top-[3px] w-[446px]" data-name="Screenshot 2025-06-04 at 3.22.33 PM 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgScreenshot20250604At32233Pm1} />
      </div>
    </div>
  );
}