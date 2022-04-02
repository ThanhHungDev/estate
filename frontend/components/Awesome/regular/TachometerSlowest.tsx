import * as React from "react";

const SvgTachometerSlowest = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 576 512" {...props}>
    <path d="M288 288c-22.35 0-41.96 11.49-53.41 28.84l-101.87-20.38c-13.06-2.77-25.66 5.83-28.25 18.83s5.81 25.64 18.81 28.23L225.69 364c1.45 7.1 3.64 13.91 7.18 19.99h110.25c5.5-9.45 8.88-20.28 8.88-32 0-35.34-28.65-63.99-64-63.99zm0-256C128.94 32 0 160.94 0 320c0 52.8 14.25 102.26 39.06 144.8 5.61 9.62 16.3 15.2 27.44 15.2h443c11.14 0 21.83-5.58 27.44-15.2C561.75 422.26 576 372.8 576 320c0-159.06-128.94-288-288-288zm212.27 400H75.73C57.56 397.63 48 359.12 48 320 48 187.66 155.66 80 288 80s240 107.66 240 240c0 39.12-9.56 77.63-27.73 112z" />
  </svg>
);

SvgTachometerSlowest.displayName = "SvgTachometerSlowest";
SvgTachometerSlowest.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgTachometerSlowest;
