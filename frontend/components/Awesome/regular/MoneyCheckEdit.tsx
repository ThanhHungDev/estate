import * as React from "react";

const SvgMoneyCheckEdit = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path d="M485.52 384H528a16 16 0 0016-16v-42.46a32 32 0 00-9.37-22.63L303.2 71.47l-71.7 71.7 231.39 231.45a32 32 0 0022.63 9.38zM208.9 120.57l71.7-71.8L238.8 7a24.1 24.1 0 00-33.9 0L167 44.87a24 24 0 000 33.8zM128 368a16 16 0 0016 16h283l-48-48H144a16 16 0 00-16 16zm480-240H405l48 48h139v288H48V176h171.07l-10.2-10.2-22.6-22.6-15.2-15.2H32a32 32 0 00-32 32v320a32 32 0 0032 32h576a32 32 0 0032-32V160a32 32 0 00-32-32zM144 304h203l-48-48H144a16 16 0 00-16 16v16a16 16 0 0016 16z" />
  </svg>
);

SvgMoneyCheckEdit.displayName = "SvgMoneyCheckEdit";
SvgMoneyCheckEdit.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgMoneyCheckEdit;
