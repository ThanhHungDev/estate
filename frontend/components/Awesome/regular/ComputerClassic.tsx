import * as React from "react";

const SvgComputerClassic = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 448 512" {...props}>
    <path d="M360 304H216a8 8 0 00-8 8v16a8 8 0 008 8h144a8 8 0 008-8v-16a8 8 0 00-8-8zM96 340a20 20 0 10-20-20 20 20 0 0020 20zm16-84h224a32 32 0 0032-32V112a32 32 0 00-32-32H112a32 32 0 00-32 32v112a32 32 0 0032 32zM416 0H32A32 32 0 000 32v352a32 32 0 0032 32v64a32 32 0 0032 32h320a32 32 0 0032-32v-64a32 32 0 0032-32V32a32 32 0 00-32-32zm-48 464H80v-48h288zm32-96H48V48h352z" />
  </svg>
);

SvgComputerClassic.displayName = "SvgComputerClassic";
SvgComputerClassic.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgComputerClassic;
