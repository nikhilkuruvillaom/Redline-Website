import imgPowerPotionMockUp222 from "figma:asset/afcb1ae8368b5155cf92cb93462da098e9d69620.png";

function Heading() {
  return <div className="absolute h-[24px] left-[116.68px] top-[10px] w-[133.633px]" data-name="Heading 2" />;
}

export default function ProductCard() {
  return (
    <div className="bg-[#1d1917] relative size-full" data-name="ProductCard">
      <Heading />
      <div className="absolute h-[262px] left-[81px] top-[-6px] w-[204px]" data-name="Power Potion mock up_2 2 2">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgPowerPotionMockUp222} />
      </div>
    </div>
  );
}