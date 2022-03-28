import * as React from "react";

const SvgExpandAlt = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 448 512" {...props}>
    <path d="M198.829 275.515l5.656 5.656c4.686 4.686 4.686 12.284 0 16.971L54.627 448H116c6.627 0 12 5.373 12 12v8c0 6.627-5.373 12-12 12H12c-6.627 0-12-5.373-12-12V364c0-6.627 5.373-12 12-12h8c6.627 0 12 5.373 12 12v61.373l149.858-149.858c4.687-4.687 12.285-4.687 16.971 0zM436 32H332c-6.627 0-12 5.373-12 12v8c0 6.627 5.373 12 12 12h61.373L243.515 213.858c-4.686 4.686-4.686 12.284 0 16.971l5.656 5.656c4.686 4.686 12.284 4.686 16.971 0L416 86.627V148c0 6.627 5.373 12 12 12h8c6.627 0 12-5.373 12-12V44c0-6.627-5.373-12-12-12z" />
  </svg>
);

SvgExpandAlt.displayName = "SvgExpandAlt";
SvgExpandAlt.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgExpandAlt;
