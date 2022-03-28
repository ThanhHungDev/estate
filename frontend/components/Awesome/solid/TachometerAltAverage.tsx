import * as React from "react";

const SvgTachometerAltAverage = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 576 512" {...props}>
    <path d="M288 32C128.94 32 0 160.94 0 320c0 52.8 14.25 102.26 39.06 144.8 5.61 9.62 16.3 15.2 27.44 15.2h443c11.14 0 21.83-5.58 27.44-15.2C561.75 422.26 576 372.8 576 320c0-159.06-128.94-288-288-288zM96 384c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm48-160c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm199.12 192H232.88c-5.5-9.45-8.88-20.28-8.88-32 0-26.85 16.56-49.75 40-59.25V128c0-13.25 10.75-24 24-24s24 10.75 24 24v196.75c23.44 9.5 40 32.41 40 59.25 0 11.72-3.38 22.55-8.88 32zM400 192c0-17.67 14.33-32 32-32s32 14.33 32 32-14.33 32-32 32-32-14.33-32-32zm80 192c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32z" />
  </svg>
);

SvgTachometerAltAverage.displayName = "SvgTachometerAltAverage";
SvgTachometerAltAverage.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgTachometerAltAverage;
