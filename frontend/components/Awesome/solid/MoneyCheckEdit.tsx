import * as React from "react";

const SvgMoneyCheckEdit = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path d="M462.88 374.62a32 32 0 0022.63 9.38H528a16 16 0 0016-16v-42.46a32 32 0 00-9.38-22.63L303.19 71.47l-71.7 71.7zm-254-254l71.7-71.8L238.79 7a24.1 24.1 0 00-33.9 0L167 44.87a24 24 0 000 33.8zM608 160H437l120.27 120.28A64 64 0 01576 325.54V400a16 16 0 01-16 16H104a8 8 0 01-8-8v-16a8 8 0 018-8h323l-64-64H104a8 8 0 01-8-8v-16a8 8 0 018-8h227L203 160H32a32 32 0 00-32 32v288a32 32 0 0032 32h576a32 32 0 0032-32V192a32 32 0 00-32-32z" />
  </svg>
);

SvgMoneyCheckEdit.displayName = "SvgMoneyCheckEdit";
SvgMoneyCheckEdit.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgMoneyCheckEdit;
