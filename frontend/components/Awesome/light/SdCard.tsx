import * as React from "react";

const SvgSdCard = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 384 512" {...props}>
    <path d="M320 0H128L0 128v320c0 35.3 28.7 64 64 64h256c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64zm32 448c0 17.6-14.4 32-32 32H64c-17.6 0-32-14.4-32-32V141.3L141.3 32H320c17.6 0 32 14.4 32 32v384zm-64-288h32V64h-32v96zm-64 0h32V64h-32v96zm-64 0h32V64h-32v96z" />
  </svg>
);

SvgSdCard.displayName = "SvgSdCard";
SvgSdCard.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgSdCard;
