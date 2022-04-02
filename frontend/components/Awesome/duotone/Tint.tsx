import * as React from "react";

const SvgTint = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 352 512" {...props}>
    <path
      d="M205.22 22.09c-7.94-28.78-49.44-30.12-58.44 0C100 179.85 0 222.72 0 333.91 0 432.35 78.72 512 176 512s176-79.65 176-178.09c0-111.75-99.79-153.34-146.78-311.82zM176 448A112.14 112.14 0 0164 336a16 16 0 0132 0 80.09 80.09 0 0080 80 16 16 0 010 32z"
      opacity={0.4}
    />
    <path
      d="M176 448A112.14 112.14 0 0164 336a16 16 0 0132 0 80.09 80.09 0 0080 80 16 16 0 010 32z"
      className="tint_svg__fa-primary"
    />
  </svg>
);

SvgTint.displayName = "SvgTint";
SvgTint.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgTint;
