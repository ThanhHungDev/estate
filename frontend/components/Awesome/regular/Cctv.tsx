import * as React from "react";

const SvgCctv = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 576 512" {...props}>
    <path d="M573.86 256.4a30.75 30.75 0 00-16.38-17.09l-33.8-14.86c20.74-14.36 17.57-46.33-6.25-55.86L139.24 2.32C119.9-5.41 104.23 8 99.57 16.15L4.23 183a32 32 0 0016.85 45.94l164 67.92L143.37 408H48v-40a16 16 0 00-16-16H16a16 16 0 00-16 16v128a16 16 0 0016 16h16a16 16 0 0016-16v-40h112a24 24 0 0022.47-15.56l46.95-125.21 75.92 31.45c12.8 4.65 25-1.14 27.89-2.94l20.79-13 136.82 60.16.09.06a31.15 31.15 0 0040.75-16l41.65-94.83a30.62 30.62 0 00.53-23.73zM314.8 298.65L54.93 191l79.16-138.51 337.3 148.29z" />
  </svg>
);

SvgCctv.displayName = "SvgCctv";
SvgCctv.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgCctv;
