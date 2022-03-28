import * as React from "react";

const SvgIslandTropical = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 448 512" {...props}>
    <path d="M336.53 32c-34.88 0-65.66 13.82-86.3 35.08C235.78 28.29 193.72 0 143.47 0 87 0 40.31 35.43 32.18 81.64A12.38 12.38 0 0044.6 96H80l16-32 16 32h30.17c-34.21 35-39.62 86.88-14.54 122.58 4.36 6.2 13.14 7.31 18.5 1.95l71-71c4 79.62-11 159.62-21 202.5H142.8A144 144 0 00.36 474.78C-2.53 494.3 12.39 512 32.12 512H352c18.46 0 34.11-15.74 31.8-34.05-7-55.68-47.06-101-99-118.13 10.2-88.69-7.32-183.68-18.52-231.82H368l16-32 16 32h35.4a12.38 12.38 0 0012.42-14.36C439.69 67.43 393 32 336.53 32z" />
  </svg>
);

SvgIslandTropical.displayName = "SvgIslandTropical";
SvgIslandTropical.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgIslandTropical;
