import * as React from "react";

const SvgSdCard = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 384 512" {...props}>
    <path
      d="M112 160h48V64h-48zm80 0h48V64h-48zm80-96v96h48V64z"
      opacity={0.4}
    />
    <path
      d="M320 0H128L0 128v320a64.06 64.06 0 0064 64h256a64.06 64.06 0 0064-64V64a64.06 64.06 0 00-64-64zM160 160h-48V64h48zm80 0h-48V64h48zm80 0h-48V64h48z"
      className="sd-card_svg__fa-primary"
    />
  </svg>
);

SvgSdCard.displayName = "SvgSdCard";
SvgSdCard.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgSdCard;
