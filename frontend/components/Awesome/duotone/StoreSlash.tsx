import * as React from "react";

const SvgStoreSlash = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path
      d="M127.9 384v-99.8a131.82 131.82 0 01-29.5 3.8 136.73 136.73 0 01-18-1.2 126.49 126.49 0 01-16.4-3.6V480a32 32 0 0032 32h436.37L366.76 384zM98.4 255.91c26.42 0 49.78-10.72 67.37-27.24L25.23 120.05C-6.89 173.44 22.65 246.57 84.7 255a105.78 105.78 0 0013.7.91zm515.5-137.32L549 15a32 32 0 00-27.1-15h-404a32 32 0 00-27.1 15l-9.89 15.78 285.94 221a97.23 97.23 0 0026.75 4.14 98.72 98.72 0 0073.8-33.11 99 99 0 0073.8 33.11 104.5 104.5 0 0013.7-.91c62.8-8.42 92.6-82.81 59-136.42zM541.4 288a126.81 126.81 0 01-29.5-3.8v79.68l64.1 49.53V283.2a103.19 103.19 0 01-16.4 3.6 141.06 141.06 0 01-18.2 1.2z"
      opacity={0.4}
    />
    <path
      d="M6.18 53.91a16 16 0 01-2.81-22.45L23 6.19a16 16 0 0122.46-2.81L633.82 458.1a16 16 0 012.81 22.45L617 505.81a16 16 0 01-22.45 2.82z"
      className="store-slash_svg__fa-primary"
    />
  </svg>
);

SvgStoreSlash.displayName = "SvgStoreSlash";
SvgStoreSlash.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgStoreSlash;
