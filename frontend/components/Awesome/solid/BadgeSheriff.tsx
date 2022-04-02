import * as React from "react";

const SvgBadgeSheriff = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M440 320c-4 0-7.58 1.18-11.21 2.26l-39.46-66.32 39.43-66.21C432.4 190.82 436 192 440 192a40 40 0 000-80c-19.25 0-34.57 13.88-38.38 32h-78.88l-43.15-72.55C289.3 64.16 296 53.09 296 40a40 40 0 00-80 0c0 13.15 6.76 24.26 16.56 31.55L189.41 144h-79c-3.81-18.12-19.13-32-38.38-32a40 40 0 000 80c4 0 7.58-1.18 11.21-2.26l39.46 66.32-39.46 66.21C79.6 321.18 76 320 72 320a40 40 0 000 80c19.25 0 34.57-13.88 38.38-32h78.88l43.15 72.55C222.7 447.84 216 458.91 216 472a40 40 0 0080 0c0-13.15-6.76-24.26-16.56-31.55L322.59 368h79c3.81 18.12 19.13 32 38.38 32a40 40 0 000-80zm-184 0a64 64 0 1164-64 64 64 0 01-64 64z" />
  </svg>
);

SvgBadgeSheriff.displayName = "SvgBadgeSheriff";
SvgBadgeSheriff.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgBadgeSheriff;
