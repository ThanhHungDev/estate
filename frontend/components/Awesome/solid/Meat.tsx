import * as React from "react";

const SvgMeat = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M444 68.52C399.45 24.05 345.11 0 299.17 0c-23.64 0-44.77 6.79-61.47 20a41.83 41.83 0 00-7.3 5.82C191.68 64.5 128.14 139.6 128.14 209.42v100.37l-8.61 8.6c-9.71 9.69-24 11.07-36.79 6a60.33 60.33 0 00-65 98.72c15.26 15.28 36.51 19.59 56.13 15.1-4.49 19.6-.18 40.83 15.11 56.1a60.36 60.36 0 0098.83-65c-5.1-12.73-3.72-27 6-36.75l8.6-8.59h100.47c69.89 0 145.07-63.46 183.8-102.15a40.86 40.86 0 006.66-9c37.42-49.4 17.37-137.63-49.34-204.3zm8.73 179.39c-9.76 9.75-24.3 11.8-34.79 11.8-34.72 0-77.19-20.87-110.82-54.47-27.19-27.16-46.31-60.32-52.45-91-4.74-23.7-1.19-43.56 9.74-54.48C274.13 50.05 288.69 48 299.18 48c34.72 0 77.18 20.87 110.82 54.46 53.88 53.84 67 121.19 42.7 145.45zM331.89 127.23c-9.81 9.8-5.84 29.67 8.88 44.37s34.61 18.68 44.42 8.87 5.84-29.66-8.88-44.37-34.61-18.67-44.42-8.87z" />
  </svg>
);

SvgMeat.displayName = "SvgMeat";
SvgMeat.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgMeat;
