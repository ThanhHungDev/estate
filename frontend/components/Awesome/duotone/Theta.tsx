import * as React from "react";

const SvgTheta = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 384 512" {...props}>
    <path
      d="M288 256a229.75 229.75 0 01-4.92 48H100.92a236.61 236.61 0 010-96h182.16a229.75 229.75 0 014.92 48z"
      opacity={0.4}
    />
    <path
      d="M192 104c27.82 0 48.24 18.83 60.46 34.62 10.67 13.78 19.18 30.4 25.3 49.4A221.26 221.26 0 01288 256a221.26 221.26 0 01-10.24 68c-6.12 19-14.63 35.62-25.3 49.4C240.24 389.17 219.82 408 192 408s-48.24-18.83-60.46-34.62c-10.67-13.78-19.18-30.4-25.3-49.4A221.26 221.26 0 0196 256a221.26 221.26 0 0110.24-68c6.12-19 14.63-35.62 25.3-49.4C143.76 122.83 164.18 104 192 104m0-96C84.34 8 0 116.94 0 256s84.34 248 192 248 192-108.94 192-248S299.66 8 192 8z"
      className="theta_svg__fa-primary"
    />
  </svg>
);

SvgTheta.displayName = "SvgTheta";
SvgTheta.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgTheta;
