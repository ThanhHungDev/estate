import * as React from "react";

const SvgVacuum = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path
      d="M576 320v128a64 64 0 01-64 64h-65.78A110.73 110.73 0 00352 321.61V160a32 32 0 0132-32c106 0 192 86 192 192z"
      opacity={0.4}
    />
    <path
      d="M368 352a80 80 0 1080 80 80 80 0 00-80-80zm0 96a16 16 0 1116-16 16 16 0 01-16 16zm272-320A128.14 128.14 0 00512 0H301.61C241.64 0 189 42.56 176.44 101.19L102.12 448H48a48 48 0 00-48 48 16 16 0 0016 16h160a16 16 0 0016-16v-32a16 16 0 00-16-16h-8.41L239 114.59A64.33 64.33 0 01301.61 64H512a64 64 0 0113.47 126.51 191.73 191.73 0 0135.9 56c-.15-.37-.26-.77-.41-1.14C607.16 226.11 640 181.13 640 128z"
      className="vacuum_svg__fa-primary"
    />
  </svg>
);

SvgVacuum.displayName = "SvgVacuum";
SvgVacuum.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgVacuum;
