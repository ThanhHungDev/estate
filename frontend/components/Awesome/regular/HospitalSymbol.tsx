import * as React from "react";

const SvgHospitalSymbol = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm0 464c-114.7 0-208-93.3-208-208S141.3 48 256 48s208 93.3 208 208-93.3 208-208 208zm88-320h-32c-4.4 0-8 3.6-8 8v80h-96v-80c0-4.4-3.6-8-8-8h-32c-4.4 0-8 3.6-8 8v208c0 4.4 3.6 8 8 8h32c4.4 0 8-3.6 8-8v-80h96v80c0 4.4 3.6 8 8 8h32c4.4 0 8-3.6 8-8V152c0-4.4-3.6-8-8-8z" />
  </svg>
);

SvgHospitalSymbol.displayName = "SvgHospitalSymbol";
SvgHospitalSymbol.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgHospitalSymbol;