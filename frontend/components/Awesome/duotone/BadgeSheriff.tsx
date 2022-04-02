import * as React from "react";

const SvgBadgeSheriff = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path
      d="M440 192a40 40 0 10-40-40 40 40 0 0040 40zM72 320a40 40 0 1040 40 40 40 0 00-40-40zm0-208a40 40 0 1040 40 40 40 0 00-40-40zm368 208a40 40 0 1040 40 40 40 0 00-40-40zM256 0a40 40 0 1040 40 40 40 0 00-40-40zm0 432a40 40 0 1040 40 40 40 0 00-40-40z"
      opacity={0.4}
    />
    <path
      d="M428.79 322.26l-39.46-66.32 39.43-66.21C412.26 184.8 400 170.11 400 152c0-2.84 1.05-5.33 1.62-8h-78.88l-43.15-72.55C272.9 76.47 265 80 256 80s-16.78-3.49-23.44-8.45L189.41 144h-79c.57 2.67 1.62 5.16 1.62 8 0 18.12-12.28 32.82-28.79 37.74l39.46 66.32-39.46 66.21C99.74 327.2 112 341.89 112 360c0 2.84-1 5.33-1.62 8h78.88l43.15 72.55C239.1 435.53 247 432 256 432s16.78 3.49 23.44 8.45L322.59 368h79c-.57-2.67-1.62-5.16-1.62-8 .03-18.12 12.31-32.82 28.82-37.74zM256 320a64 64 0 1164-64 64 64 0 01-64 64z"
      className="badge-sheriff_svg__fa-primary"
    />
  </svg>
);

SvgBadgeSheriff.displayName = "SvgBadgeSheriff";
SvgBadgeSheriff.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgBadgeSheriff;
