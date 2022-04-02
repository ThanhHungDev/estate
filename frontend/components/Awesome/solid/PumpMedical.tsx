import * as React from "react";

const SvgPumpMedical = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 384 512" {...props}>
    <path d="M235.51 159.82H84.24A64 64 0 0020.51 218L.14 442a64 64 0 0063.74 69.8h192a64 64 0 0063.73-69.8l-20.37-224a64 64 0 00-63.73-58.18zm4.37 173.33a13.35 13.35 0 01-13.34 13.34h-40v40a13.33 13.33 0 01-13.33 13.33h-26.67a13.33 13.33 0 01-13.33-13.33v-40h-40a13.34 13.34 0 01-13.33-13.34v-26.66a13.33 13.33 0 0113.33-13.34h40v-40a13.33 13.33 0 0113.33-13.33h26.67a13.33 13.33 0 0113.33 13.33v40h40a13.34 13.34 0 0113.34 13.34zM379.19 93.88l-43.32-43.32a64 64 0 00-45.24-18.74h-66.75a32 32 0 00-32-32h-64a32 32 0 00-32 32v96h128v-32h66.75l43.31 43.31a16 16 0 0022.63 0l22.62-22.62a16 16 0 000-22.63z" />
  </svg>
);

SvgPumpMedical.displayName = "SvgPumpMedical";
SvgPumpMedical.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgPumpMedical;
