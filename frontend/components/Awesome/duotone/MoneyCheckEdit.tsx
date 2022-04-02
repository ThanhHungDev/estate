import * as React from "react";

const SvgMoneyCheckEdit = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path
      d="M640 192v288a32 32 0 01-32 32H32a32 32 0 01-32-32V192a32 32 0 0132-32h171.06L331 288H104a8 8 0 00-8 8v16a8 8 0 008 8h259l64 64H104a8 8 0 00-8 8v16a8 8 0 008 8h456a16 16 0 0016-16v-74.46a64 64 0 00-18.74-45.26L437 160h171a32 32 0 0132 32z"
      opacity={0.4}
    />
    <path
      d="M534.64 302.91L303.18 71.47l-71.7 71.7 231.39 231.45a32 32 0 0022.64 9.38H528a16 16 0 0016-16v-42.46a32 32 0 00-9.36-22.63zM238.78 7a24.1 24.1 0 00-33.9 0L167 44.87a24 24 0 000 33.8l41.9 41.9 71.7-71.8z"
      className="money-check-edit_svg__fa-primary"
    />
  </svg>
);

SvgMoneyCheckEdit.displayName = "SvgMoneyCheckEdit";
SvgMoneyCheckEdit.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgMoneyCheckEdit;
