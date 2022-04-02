import * as React from "react";

const SvgClinicMedical = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 576 512" {...props}>
    <path d="M573.48 219.92L310.6 8a35.85 35.85 0 00-45.19 0L2.53 219.92a6.71 6.71 0 00-1 9.5l14.2 17.49a6.82 6.82 0 009.6 1L64 216.72V496a16 16 0 0016 16h416a16 16 0 0016-16V216.82l38.8 31.29a6.83 6.83 0 009.6-1l14.19-17.5a7.13 7.13 0 00-1.11-9.69zM480 480H96V190.92l187.71-151.4a6.63 6.63 0 018.4 0L480 191zM256 216v56h-56a8 8 0 00-8 8v48a8 8 0 008 8h56v56a8 8 0 008 8h48a8 8 0 008-8v-56h56a8 8 0 008-8v-48a8 8 0 00-8-8h-56v-56a8 8 0 00-8-8h-48a8 8 0 00-8 8z" />
  </svg>
);

SvgClinicMedical.displayName = "SvgClinicMedical";
SvgClinicMedical.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgClinicMedical;
