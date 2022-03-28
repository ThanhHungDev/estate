import * as React from "react";

const SvgBallot = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 448 512" {...props}>
    <path d="M200 408h144c4.4 0 8-3.6 8-8v-32c0-4.4-3.6-8-8-8H200c-4.4 0-8 3.6-8 8v32c0 4.4 3.6 8 8 8zm-88 8h32c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16zm0-128h32c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16zm88-8h144c4.4 0 8-3.6 8-8v-32c0-4.4-3.6-8-8-8H200c-4.4 0-8 3.6-8 8v32c0 4.4 3.6 8 8 8zm-88-120h32c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16zm88-8h144c4.4 0 8-3.6 8-8v-32c0-4.4-3.6-8-8-8H200c-4.4 0-8 3.6-8 8v32c0 4.4 3.6 8 8 8zM416 0H32C14.3 0 0 14.3 0 32v448c0 17.7 14.3 32 32 32h384c17.7 0 32-14.3 32-32V32c0-17.7-14.3-32-32-32zm-16 464H48V48h352v416z" />
  </svg>
);

SvgBallot.displayName = "SvgBallot";
SvgBallot.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgBallot;
