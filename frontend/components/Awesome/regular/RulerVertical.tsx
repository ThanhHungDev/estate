import * as React from "react";

const SvgRulerVertical = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 256 512" {...props}>
    <path d="M224 0H32C14.33 0 0 14.33 0 32v448c0 17.67 14.33 32 32 32h192c17.67 0 32-14.33 32-32V32c0-17.67-14.33-32-32-32zM48 464V48h160v48h-56c-4.42 0-8 3.58-8 8v16c0 4.42 3.58 8 8 8h56v64h-56c-4.42 0-8 3.58-8 8v16c0 4.42 3.58 8 8 8h56v64h-56c-4.42 0-8 3.58-8 8v16c0 4.42 3.58 8 8 8h56v64h-56c-4.42 0-8 3.58-8 8v16c0 4.42 3.58 8 8 8h56v48H48z" />
  </svg>
);

SvgRulerVertical.displayName = "SvgRulerVertical";
SvgRulerVertical.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgRulerVertical;
