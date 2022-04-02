import * as React from "react";

const SvgShekelSign = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 384 512" {...props}>
    <path d="M224 152v208c0 4.42 3.58 8 8 8h32c4.42 0 8-3.58 8-8V152c0-66.28-53.73-120-120-120H16C7.16 32 0 39.16 0 48v424c0 4.42 3.58 8 8 8h32c4.42 0 8-3.58 8-8V80h104c39.76 0 72 32.23 72 72zM376 32h-32c-4.42 0-8 3.58-8 8v320c0 39.76-32.24 72-72 72H160V152c0-4.42-3.58-8-8-8h-32c-4.42 0-8 3.58-8 8v312c0 8.84 7.16 16 16 16h136c66.27 0 120-53.73 120-120V40c0-4.42-3.58-8-8-8z" />
  </svg>
);

SvgShekelSign.displayName = "SvgShekelSign";
SvgShekelSign.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgShekelSign;
