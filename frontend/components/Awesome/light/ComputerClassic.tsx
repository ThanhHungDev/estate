import * as React from "react";

const SvgComputerClassic = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 448 512" {...props}>
    <path d="M376 320H232a8 8 0 00-8 8v16a8 8 0 008 8h144a8 8 0 008-8v-16a8 8 0 00-8-8zM416 0H32A32 32 0 000 32v400a16 16 0 0016 16h16v48a16 16 0 0016 16h352a16 16 0 0016-16v-48h16a16 16 0 0016-16V32a32 32 0 00-32-32zm-32 480H64v-32h320zm32-64H32V32h384zM96 256h256a32 32 0 0032-32V96a32 32 0 00-32-32H96a32 32 0 00-32 32v128a32 32 0 0032 32zm0-160h256v128H96zM80 356a20 20 0 10-20-20 20 20 0 0020 20z" />
  </svg>
);

SvgComputerClassic.displayName = "SvgComputerClassic";
SvgComputerClassic.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgComputerClassic;
