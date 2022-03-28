import * as React from "react";

const SvgSigma = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 320 512" {...props}>
    <path d="M287.96 448H42.36a42.314 42.314 0 01-38.92-25.62C-3.26 406.8 0 388.8 11.7 376.52L126.63 256 11.7 135.48C0 123.2-3.26 105.2 3.44 89.62A42.325 42.325 0 0142.36 64h245.6C305.65 64 320 78.33 320 96v48c0 8.84-7.17 16-16.02 16h-16.02c-8.85 0-16.02-7.16-16.02-16v-32H55.66l116.27 121.94c11.79 12.36 11.79 31.78 0 44.14L55.66 400h216.28v-32c0-8.84 7.17-16 16.02-16h16.02c8.85 0 16.02 7.16 16.02 16v48c0 17.67-14.35 32-32.04 32z" />
  </svg>
);

SvgSigma.displayName = "SvgSigma";
SvgSigma.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgSigma;