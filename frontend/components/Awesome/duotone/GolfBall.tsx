import * as React from "react";

const SvgGolfBall = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 416 512" {...props}>
    <path
      d="M208 0C93.1 0 0 93.1 0 208c0 74.2 39 139.2 97.5 176h221C377 347.2 416 282.2 416 208 416 93.1 322.9 0 208 0zm-3 229.8c26.3 9.4 51.5-15.1 41.9-41.9a32.91 32.91 0 11-41.9 41.9zm46.9 102.1a32.88 32.88 0 01-30.9-22.1c26.3 9.4 51.5-15.1 41.9-41.9a32.91 32.91 0 01-11 64zm64-64a32.88 32.88 0 01-30.9-22.1c26.3 9.4 51.5-15.1 41.9-41.9a32.91 32.91 0 01-11 64z"
      opacity={0.4}
    />
    <path
      d="M326.9 203.9c9.6 26.8-15.6 51.3-41.9 41.9a32.91 32.91 0 1041.9-41.9zM221 309.8a32.91 32.91 0 1041.9-41.9c9.6 26.8-15.6 51.3-41.9 41.9zm14.9-57.9a32.91 32.91 0 0011-64c9.6 26.8-15.6 51.3-41.9 41.9a32.88 32.88 0 0030.9 22.1zM128 448h16a32 32 0 0132 32v20a12 12 0 0012 12h40a12 12 0 0012-12v-20a32 32 0 0132-32h16a32 32 0 0032-32H96a32 32 0 0032 32z"
      className="golf-ball_svg__fa-primary"
    />
  </svg>
);

SvgGolfBall.displayName = "SvgGolfBall";
SvgGolfBall.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgGolfBall;
