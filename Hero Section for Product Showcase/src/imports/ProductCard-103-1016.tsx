import imgScreenshot20250604At34008Pm1 from "figma:asset/f6ab21e52f03fd5997b50614beec55433df9fffb.png";

function Heading() {
  return <div className="absolute h-[24px] left-[63.29px] top-[10px] w-[240.422px]" data-name="Heading 2" />;
}

export default function ProductCard() {
  return (
    <div className="bg-[#c5a562] relative size-full" data-name="ProductCard">
      <Heading />
      <div className="absolute h-[196px] left-[53px] top-[27px] w-[261px]" data-name="Screenshot 2025-06-04 at 3.40.08 PM 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgScreenshot20250604At34008Pm1} />
      </div>
    </div>
  );
}