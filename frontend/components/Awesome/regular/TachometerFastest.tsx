import * as React from "react";

const SvgTachometerFastest = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 576 512" {...props}>
    <path d="M443.28 296.47l-101.87 20.38C329.96 299.49 310.35 288 288 288c-35.35 0-64 28.65-64 64 0 11.72 3.38 22.55 8.88 32h110.25c3.54-6.08 5.73-12.89 7.18-19.99l102.41-20.48c13-2.59 21.41-15.23 18.81-28.23s-15.31-21.61-28.25-18.83zM288 32C128.94 32 0 160.94 0 320c0 52.8 14.25 102.26 39.06 144.8 5.61 9.62 16.3 15.2 27.44 15.2h443c11.14 0 21.83-5.58 27.44-15.2C561.75 422.26 576 372.8 576 320c0-159.06-128.94-288-288-288zm212.27 400H75.73C57.56 397.63 48 359.12 48 320 48 187.66 155.66 80 288 80s240 107.66 240 240c0 39.12-9.56 77.63-27.73 112z" />
  </svg>
);

SvgTachometerFastest.displayName = "SvgTachometerFastest";
SvgTachometerFastest.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgTachometerFastest;
