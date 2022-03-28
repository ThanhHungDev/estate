import * as React from "react";

const SvgSubscript = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M336 64h-52.28a16 16 0 00-13.31 7.12L176 212.73 81.59 71.12A16 16 0 0068.28 64H16A16 16 0 000 80v16a16 16 0 0016 16h35.16l96 144-96 144H16a16 16 0 00-16 16v16a16 16 0 0016 16h52.28a16 16 0 0013.31-7.12L176 299.27l94.41 141.61a16 16 0 0013.31 7.12H336a16 16 0 0016-16v-16a16 16 0 00-16-16h-35.16l-96-144 96-144H336a16 16 0 0016-16V80a16 16 0 00-16-16zm160 400h-24V304a16 16 0 00-16-16h-32a16 16 0 00-14.29 8.83l-16 32A16 16 0 00408 352h16v112h-24a16 16 0 00-16 16v16a16 16 0 0016 16h96a16 16 0 0016-16v-16a16 16 0 00-16-16z" />
  </svg>
);

SvgSubscript.displayName = "SvgSubscript";
SvgSubscript.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgSubscript;
