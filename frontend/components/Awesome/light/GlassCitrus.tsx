import * as React from "react";

const SvgGlassCitrus = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M368 0c-62.61 0-115.35 40.2-135.18 96h34.37c18-37.73 56.21-64 100.81-64a112 112 0 01112 112c0 59.54-46.6 107.76-105.25 111.32l-3.22 32.32C449.39 285.73 512 222.32 512 144A144 144 0 00368 0zm-48 128H32A32 32 0 00.16 163.18l32 320A32 32 0 0064 512h224a32 32 0 0031.84-28.82l32-320A32 32 0 00320 128zm-32 352H64L44.8 288h262.4zm22.4-224H41.6L32 160h288z" />
  </svg>
);

SvgGlassCitrus.displayName = "SvgGlassCitrus";
SvgGlassCitrus.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgGlassCitrus;
