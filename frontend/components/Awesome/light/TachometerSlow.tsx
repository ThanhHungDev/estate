import * as React from "react";

const SvgTachometerSlow = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 576 512" {...props}>
    <path d="M288 288c-9.47 0-18.38 2.18-26.47 5.88l-97.09-119.94c-5.53-6.88-15.62-7.92-22.5-2.38-6.88 5.56-7.94 15.64-2.38 22.5l97.14 120C228.82 324.7 224 337.74 224 352c0 35.35 28.65 64 64 64s64-28.65 64-64-28.65-64-64-64zm0 96c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm0-352C128.94 32 0 160.94 0 320c0 52.8 14.25 102.26 39.06 144.8 5.61 9.62 16.3 15.2 27.44 15.2h443c11.14 0 21.83-5.58 27.44-15.2C561.75 422.26 576 372.8 576 320c0-159.06-128.94-288-288-288zm221.5 416l-442.8.68C44 409.75 32 365.26 32 320 32 178.84 146.84 64 288 64s256 114.84 256 256c0 45.26-12 89.75-34.5 128z" />
  </svg>
);

SvgTachometerSlow.displayName = "SvgTachometerSlow";
SvgTachometerSlow.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgTachometerSlow;
