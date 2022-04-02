import * as React from "react";

const SvgCaravan = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path
      d="M256 192v-64a32 32 0 00-32-32H96a32 32 0 00-32 32v64a32 32 0 0032 32h128a32 32 0 0032-32zm160-96h-64a32 32 0 00-32 32v155.71A171.28 171.28 0 01343.42 320H448V128a32 32 0 00-32-32zm0 144a16 16 0 1116-16 16 16 0 01-16 16zm-224 64a88 88 0 1088 88 88 88 0 00-88-88z"
      opacity={0.4}
    />
    <path
      d="M624 320h-48V160A160 160 0 00416 0H64A64 64 0 000 64v256a64 64 0 0064 64h8.81C77 321.53 128.47 272 192 272s115 49.53 119.19 112H624a16 16 0 0016-16v-32a16 16 0 00-16-16zM256 192a32 32 0 01-32 32H96a32 32 0 01-32-32v-64a32 32 0 0132-32h128a32 32 0 0132 32zm192 128H343.42A171.28 171.28 0 00320 283.71V128a32 32 0 0132-32h64a32 32 0 0132 32z"
      className="caravan_svg__fa-primary"
    />
  </svg>
);

SvgCaravan.displayName = "SvgCaravan";
SvgCaravan.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgCaravan;
