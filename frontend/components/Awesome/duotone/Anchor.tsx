import * as React from "react";

const SvgAnchor = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 576 512" {...props}>
    <path
      d="M372 192h-52v-5.47A96 96 0 00384 96c0-52.22-42.36-95.25-94.58-96A96 96 0 00256 186.54V192h-52a12 12 0 00-12 12v40a12 12 0 0012 12h168a12 12 0 0012-12v-40a12 12 0 00-12-12zM288 64a32 32 0 11-32 32 32 32 0 0132-32z"
      opacity={0.4}
    />
    <path
      d="M564 352h-32.51C509.63 454.62 394.61 512 288 512c-106.41 0-221.58-57.27-243.46-160H12a12 12 0 01-8.51-20.49l67.26-67a12.07 12.07 0 0117 0l67.26 67a12 12 0 01-8.46 20.49h-35.26c20.37 54.34 85.47 86.62 144.61 94V288h64.22v158c59.36-7.43 124.26-39.7 144.62-94h-35.26a12 12 0 01-8.48-20.49l67.26-67a12.07 12.07 0 0117 0l67.26 67A12 12 0 01564 352z"
      className="anchor_svg__fa-primary"
    />
  </svg>
);

SvgAnchor.displayName = "SvgAnchor";
SvgAnchor.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgAnchor;
