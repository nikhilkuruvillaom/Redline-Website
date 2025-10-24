import imgSnackbar2 from "figma:asset/9e8c9dc75f917fd85be83dcc148ef6c9919b1dba.png";

function Heading() {
  return <div className="absolute h-[24px] left-[91.51px] top-[10px] w-[183.984px]" data-name="Heading 2" />;
}

function Paragraph() {
  return <div className="absolute h-[21px] left-[95.06px] opacity-0 top-[218px] w-[176.867px]" data-name="Paragraph" />;
}

export default function ProductCard() {
  return (
    <div className="bg-[#b5a2c1] relative size-full" data-name="ProductCard">
      <Heading />
      <div className="absolute h-[462px] left-[-2px] top-[-106px] w-[369px]" data-name="snackbar 2">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgSnackbar2} />
      </div>
      <Paragraph />
    </div>
  );
}