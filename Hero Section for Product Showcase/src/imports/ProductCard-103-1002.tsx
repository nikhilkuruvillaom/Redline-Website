import imgScreenshot20250604At22641Pm1 from "figma:asset/c576374d9850019f874b9d85d0f7c1f855739efb.png";

function Heading() {
  return <div className="absolute h-[24px] left-[49.07px] top-[10px] w-[268.859px]" data-name="Heading 2" />;
}

export default function ProductCard() {
  return (
    <div className="bg-[#d5909b] relative size-full" data-name="ProductCard">
      <Heading />
      <div className="absolute h-[236px] left-[14px] top-[7px] w-[338px]" data-name="Screenshot 2025-06-04 at 2.26.41 PM 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgScreenshot20250604At22641Pm1} />
      </div>
    </div>
  );
}