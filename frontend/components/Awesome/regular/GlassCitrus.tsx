import * as React from "react";

const SvgGlassCitrus = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M368 0c-62.61 0-115.35 40.2-135.18 96h52.54C302 67.45 332.63 48 368 48a96.11 96.11 0 0196 96c0 50.07-38.67 90.84-87.63 95.15l-4.84 48.49C449.39 285.73 512 222.32 512 144A144 144 0 00368 0zm-48 128H32A32 32 0 00.16 163.18l32 320A32 32 0 0064 512h224a32 32 0 0031.84-28.82l32-320A32 32 0 00320 128zm-46.48 336h-195l-16-160h227zm20.8-208H57.68l-8-80h252.64z" />
  </svg>
);

SvgGlassCitrus.displayName = "SvgGlassCitrus";
SvgGlassCitrus.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgGlassCitrus;
