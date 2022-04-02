import * as React from "react";

const SvgHospital = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 448 512" {...props}>
    <path
      d="M436 480h-20V120a24 24 0 00-24-24h-72V24a24 24 0 00-24-24H152a24 24 0 00-24 24v72H56a24 24 0 00-24 24v360H12a12 12 0 00-12 12v20h192v-96a12 12 0 0112-12h40a12 12 0 0112 12v96h192v-20a12 12 0 00-12-12zM192 340a12 12 0 01-12 12h-40a12 12 0 01-12-12v-40a12 12 0 0112-12h40a12 12 0 0112 12zm0-96a12 12 0 01-12 12h-40a12 12 0 01-12-12v-40a12 12 0 0112-12h40a12 12 0 0112 12zm53.33-126.67V152a8 8 0 01-8 8h-26.66a8 8 0 01-8-8v-34.67H168a8 8 0 01-8-8V82.67a8 8 0 018-8h34.67V40a8 8 0 018-8h26.66a8 8 0 018 8v34.67H280a8 8 0 018 8v26.66a8 8 0 01-8 8zM320 340a12 12 0 01-12 12h-40a12 12 0 01-12-12v-40a12 12 0 0112-12h40a12 12 0 0112 12zm0-96a12 12 0 01-12 12h-40a12 12 0 01-12-12v-40a12 12 0 0112-12h40a12 12 0 0112 12z"
      opacity={0.4}
    />
    <path
      d="M180 288h-40a12 12 0 00-12 12v40a12 12 0 0012 12h40a12 12 0 0012-12v-40a12 12 0 00-12-12zm0-96h-40a12 12 0 00-12 12v40a12 12 0 0012 12h40a12 12 0 0012-12v-40a12 12 0 00-12-12zm108-82.67V82.67a8 8 0 00-8-8h-34.67V40a8 8 0 00-8-8h-26.66a8 8 0 00-8 8v34.67H168a8 8 0 00-8 8v26.66a8 8 0 008 8h34.67V152a8 8 0 008 8h26.66a8 8 0 008-8v-34.67H280a8 8 0 008-8zM308 288h-40a12 12 0 00-12 12v40a12 12 0 0012 12h40a12 12 0 0012-12v-40a12 12 0 00-12-12zm0-96h-40a12 12 0 00-12 12v40a12 12 0 0012 12h40a12 12 0 0012-12v-40a12 12 0 00-12-12z"
      className="hospital_svg__fa-primary"
    />
  </svg>
);

SvgHospital.displayName = "SvgHospital";
SvgHospital.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgHospital;
