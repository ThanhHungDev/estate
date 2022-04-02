import * as React from "react";

const SvgTrafficCone = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M362.12 192H149.88l-38.21 96h288.65l-38.2-96zM289.73 10.08A16.01 16.01 0 00274.86 0h-37.72a16.01 16.01 0 00-14.87 10.08L175.35 128h161.3L289.73 10.08zM496 448h-32l-38.21-96H86.21L48 448H16c-8.84 0-16 7.16-16 16v32c0 8.84 7.16 16 16 16h480c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16z" />
  </svg>
);

SvgTrafficCone.displayName = "SvgTrafficCone";
SvgTrafficCone.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgTrafficCone;
