import * as React from "react";

const SvgVuejs = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 448 512" {...props}>
    <path d="M356.9 64.3H280l-56 88.6-48-88.6H0L224 448 448 64.3h-91.1zm-301.2 32h53.8L224 294.5 338.4 96.3h53.8L224 384.5 55.7 96.3z" />
  </svg>
);

SvgVuejs.displayName = "SvgVuejs";
SvgVuejs.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgVuejs;
