import imgScreenshot20250604At40128Pm1 from "figma:asset/7d3af95862a93e76dd6971c0d720622da3051329.png";

function Heading() {
  return <div className="absolute h-[24px] left-[95.83px] top-[10px] w-[175.344px]" data-name="Heading 2" />;
}

function Paragraph() {
  return <div className="absolute h-[21px] left-[106.94px] opacity-0 top-[218px] w-[153.102px]" data-name="Paragraph" />;
}

export default function ProductCard() {
  return (
    <div className="bg-[#b6b493] relative size-full" data-name="ProductCard">
      <Heading />
      <div className="absolute h-[227px] left-[55px] top-[11px] w-[257px]" data-name="Screenshot 2025-06-04 at 4.01.28 PM 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgScreenshot20250604At40128Pm1} />
      </div>
      <Paragraph />
    </div>
  );
}