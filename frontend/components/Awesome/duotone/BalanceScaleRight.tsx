import * as React from "react";

const SvgBalanceScaleRight = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path
      d="M112 448h176V153.24a79.91 79.91 0 01-43.38-47.47l-132-44.26a16 16 0 01-10.08-20.26l10.16-30.34A16 16 0 01133 .83l117.89 39.54C264.7 16.36 290.31 0 320 0a80 80 0 0180 80 79.06 79.06 0 01-1 10l128.4 43.05a16 16 0 0110.08 20.26l-10.18 30.37a16 16 0 01-20.3 10.08l-142-47.63a80.48 80.48 0 01-13 7.12V496a16 16 0 01-16 16H112a16 16 0 01-16-16v-32a16 16 0 0116-16z"
      opacity={0.4}
    />
    <path
      d="M0 304c0 44.18 57.31 80 128 80s128-35.82 128-80c0-15.67 2.08-7.25-85-181.51-17.68-35.36-68.22-35.29-85.87 0C-1.32 295.27 0 287.82 0 304zm56-16l72-144 72 144zm328 144c0 44.18 57.31 80 128 80s128-35.82 128-80c0-15.67 2.08-7.25-85.05-181.51-17.68-35.36-68.22-35.29-85.87 0C382.68 423.27 384 415.82 384 432zm56-16l72-144 72 144z"
      className="balance-scale-right_svg__fa-primary"
    />
  </svg>
);

SvgBalanceScaleRight.displayName = "SvgBalanceScaleRight";
SvgBalanceScaleRight.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgBalanceScaleRight;
