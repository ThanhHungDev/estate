import * as React from "react";

const SvgFilesMedical = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 448 512" {...props}>
    <path d="M96 392V96H24a24 24 0 00-24 24v368a24 24 0 0024 24h272a24 24 0 0024-24v-40H152a56.06 56.06 0 01-56-56zm224-288V0H152a24 24 0 00-24 24v368a24 24 0 0024 24h272a24 24 0 0024-24V128H344a24.07 24.07 0 01-24-24zm64 128v48a8 8 0 01-8 8h-56v56a8 8 0 01-8 8h-48a8 8 0 01-8-8v-56h-56a8 8 0 01-8-8v-48a8 8 0 018-8h56v-56a8 8 0 018-8h48a8 8 0 018 8v56h56a8 8 0 018 8zm57-159L375 7a24 24 0 00-17-7h-6v96h96v-6.06A24 24 0 00441 73z" />
  </svg>
);

SvgFilesMedical.displayName = "SvgFilesMedical";
SvgFilesMedical.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgFilesMedical;
