import * as React from "react";

const SvgHouseReturn = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path
      d="M323.06 216.54l11.51-5.83 5.56-16.83a143.26 143.26 0 0151.95-71.1L263.52 8.92a35.33 35.33 0 00-46.93 0L4.8 196.41a14.18 14.18 0 00-1.23 20l18.79 21.29a14.21 14.21 0 0020 1.24L64 219.87V384a32 32 0 0032 32h245.86L352 375.38a95.83 95.83 0 0122.33-41.5l.48-.52a63.48 63.48 0 01-80.3-31.17c-15.51-31.51-2.64-69.95 28.55-85.65zM224 272a16 16 0 01-16 16h-64a16 16 0 01-16-16v-64a16 16 0 0116-16h64a16 16 0 0116 16z"
      opacity={0.4}
    />
    <path
      d="M531 262.48l-15.2-60.69 26.8 10.79A31.82 31.82 0 01559 228l6.71 13.59a31.56 31.56 0 0042.49 14.31 32.12 32.12 0 0014.2-42.9l-6.7-13.59a95.41 95.41 0 00-49.7-46.2c-37.4-15.11-57.29-25.3-93.28-25.2-46.49.09-87.49 31.29-102.19 75.89l-9.7 29.38-23.29 11.8a32.37 32.37 0 00-14.3 43 31.57 31.57 0 0042.49 14.31l23.3-11.81a63.75 63.75 0 0031.7-37l5.5-16.49 17.2 68.69L398 355.46a63.83 63.83 0 00-14.9 27.69l-22.2 89a32 32 0 0062.1 15.5l18.3-73.28a64.38 64.38 0 0114.88-27.7l59.9-65.39a64.21 64.21 0 0014.92-58.8zM432 96a48 48 0 10-48-48 48 48 0 0048 48zm198.63 361.34l-50-50.1a61.78 61.78 0 01-14.18-21.49l-20.7-51.49c-8.7 11.9 7.89-6.59-47.4 53.69l13.5 33.79a64.6 64.6 0 0014.2 21.49l59.4 59.4a32 32 0 0045.18-45.29z"
      className="house-return_svg__fa-primary"
    />
  </svg>
);

SvgHouseReturn.displayName = "SvgHouseReturn";
SvgHouseReturn.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgHouseReturn;