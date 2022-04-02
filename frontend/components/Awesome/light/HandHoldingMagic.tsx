import * as React from "react";

const SvgHandHoldingMagic = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 576 512" {...props}>
    <path d="M558.3 333.65c-9.58-8.65-22.09-13.41-35.23-13.41-12.51 0-24.81 4.32-34.62 12.17l-61.57 49.25a10.68 10.68 0 01-6.66 2.34h-41.63c4.56-9.58 6.48-20.66 4.81-32.27-4.02-27.93-29.62-47.73-57.83-47.73H181.33c-20.77 0-40.98 6.74-57.6 19.2L85.33 352H8c-4.42 0-8 3.58-8 8v16c0 4.42 3.58 8 8 8h88l46.93-35.2a63.99 63.99 0 0138.4-12.8H328c13.25 0 24 10.74 24 24 0 13.25-10.75 24-24 24h-88c-8.84 0-16 7.16-16 16s7.16 16 16 16h180.22c9.69 0 19.09-3.3 26.65-9.35l61.56-49.25c4.22-3.38 9.46-5.16 14.63-5.16 4.99 0 9.91 1.66 13.78 5.16 10.05 9.08 9.26 24.51-.87 32.59l-100.83 80.66a42.656 42.656 0 01-26.65 9.35H8c-4.42 0-8 3.58-8 8v16c0 4.42 3.58 8 8 8h400.51c16.95 0 33.4-5.77 46.63-16.36l100.83-80.67c12.23-9.76 19.52-24.36 20-40.03s-5.96-30.72-17.67-41.29zM208 224h72c39.69 0 72-32.3 72-72s-32.31-72-72-72h-15.31C233 80 204.81 98.78 192 126.61c17.72-7.86 41.88-14.61 72.69-14.61H280c22.06 0 40 17.94 40 40s-17.94 40-40 40h-72c-27.47 0-48-25.34-48-48V80c0-26.47 21.53-48 48-48h160c26.47 0 48 21.53 48 48v69.23c0 36.12-16.63 72.41-46.84 102.2L348.31 272c57.09-14.78 99.25-64.27 99.69-121.33V80c0-44.11-35.88-80-80-80H208c-44.13 0-80 35.89-80 80v64c0 42.61 37.38 80 80 80z" />
  </svg>
);

SvgHandHoldingMagic.displayName = "SvgHandHoldingMagic";
SvgHandHoldingMagic.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgHandHoldingMagic;
