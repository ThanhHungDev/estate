import * as React from "react";

const SvgTachometerFast = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 576 512" {...props}>
    <path d="M288 32C128.94 32 0 160.94 0 320c0 52.8 14.25 102.26 39.06 144.8 5.61 9.62 16.3 15.2 27.44 15.2h443c11.14 0 21.83-5.58 27.44-15.2C561.75 422.26 576 372.8 576 320c0-159.06-128.94-288-288-288zm163.2 174.41L342.65 351.14c5.81 9.63 9.35 20.79 9.35 32.86 0 11.72-3.38 22.55-8.88 32H232.88c-5.5-9.45-8.88-20.28-8.88-32 0-35.35 28.65-64 64-64 5.65 0 11.02.96 16.24 2.34L412.8 177.59c7.98-10.56 23-12.72 33.61-4.8 10.59 7.96 12.75 23.01 4.79 33.62z" />
  </svg>
);

SvgTachometerFast.displayName = "SvgTachometerFast";
SvgTachometerFast.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgTachometerFast;
