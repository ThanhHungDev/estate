import * as React from "react";

const SvgFan = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M256 224a32 32 0 1032 32 32 32 0 00-32-32zm255.69 41.06C501 180.11 428.72 116 343.53 116a244.34 244.34 0 00-42.5 3.63l7.78-77.15A38.8 38.8 0 00265.09.34C180.09 11 116 83.31 116 168.49a244.42 244.42 0 003.63 42.5l-77.16-7.78a38.4 38.4 0 00-31.38 11.43A39.06 39.06 0 00.31 246.92C11 331.92 83.28 396 168.47 396a244.34 244.34 0 0042.5-3.63l-7.78 77.15a38.25 38.25 0 0011.44 31.35A39 39 0 00242 512a38.44 38.44 0 005-.31c84.91-10.69 149-82.97 149-168.15a244.42 244.42 0 00-3.63-42.5l77.16 7.78a38.5 38.5 0 0031.34-11.43 39 39 0 0010.82-32.31zM324.75 246l13 35.91c6.78 18.65 10.22 39.4 10.22 61.65 0 57.25-40.47 106.4-95.84 118.59L266 324.76l-35.9 13c-18.63 6.81-39.38 10.24-61.63 10.24-57.25 0-106.38-40.47-118.59-95.84l137.37 13.88-13-35.91c-6.78-18.65-10.22-39.4-10.22-61.65 0-57.25 40.47-106.37 95.84-118.59L246 187.27l35.9-13c18.66-6.78 39.41-10.22 61.66-10.22 57.25 0 106.41 40.47 118.59 95.84z" />
  </svg>
);

SvgFan.displayName = "SvgFan";
SvgFan.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgFan;
