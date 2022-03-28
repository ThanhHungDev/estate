import * as React from "react";

const SvgPrescriptionBottleAlt = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 384 512" {...props}>
    <path d="M104 320h56v56c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-56h56c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8h-56v-56c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v56h-56c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8zM360 0H24C10.8 0 0 10.8 0 24v80c0 13.2 10.8 24 24 24h8v352c0 17.6 14.4 32 32 32h256c17.6 0 32-14.4 32-32V128h8c13.2 0 24-10.8 24-24V24c0-13.2-10.8-24-24-24zm-40 480H64V128h256v352zm32-384H32V32h320v64z" />
  </svg>
);

SvgPrescriptionBottleAlt.displayName = "SvgPrescriptionBottleAlt";
SvgPrescriptionBottleAlt.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgPrescriptionBottleAlt;
