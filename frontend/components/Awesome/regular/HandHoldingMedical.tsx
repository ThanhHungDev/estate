import * as React from "react";

const SvgHandHoldingMedical = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 576 512" {...props}>
    <path d="M160 176h64v64a16 16 0 0016 16h64a16 16 0 0016-16v-64h64a16 16 0 0016-16V96a16 16 0 00-16-16h-64V16a16 16 0 00-16-16h-64a16 16 0 00-16 16v64h-64a16 16 0 00-16 16v64a16 16 0 0016 16zm392 136c-31.11-26.4-69.32-16.09-88.41-1.8l-60.42 45.49h-3.29c-.21-38-30.51-67.78-69.21-67.78h-144a130.4 130.4 0 00-78.51 26.29L79.8 336H16a16 16 0 00-16 16v16a16 16 0 0016 16h80l41.3-31.49A81.37 81.37 0 01186.72 336h144c27.89 0 29.09 40.2-1.11 40.2h-59.79A13.82 13.82 0 00256 390v.1a13.83 13.83 0 0013.79 13.81h134.55a45 45 0 0026.91-9l61.3-46.1c8.3-6.21 20.5-6.71 28.41 0a19.28 19.28 0 01-.91 30.69L419.45 455a45.16 45.16 0 01-26.91 9H16a16 16 0 00-16 16v16a16 16 0 0016 16h376.84A91.69 91.69 0 00448 493.5l100.81-75.89A67.32 67.32 0 00552 312z" />
  </svg>
);

SvgHandHoldingMedical.displayName = "SvgHandHoldingMedical";
SvgHandHoldingMedical.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgHandHoldingMedical;
