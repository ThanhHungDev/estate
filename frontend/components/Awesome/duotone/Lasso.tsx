import * as React from "react";

const SvgLasso = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 576 512" {...props}>
    <path
      d="M178.13 384.21a68.83 68.83 0 012.58 17.53 45.9 45.9 0 01-45.77 46.5H48a16 16 0 00-16 15.94v31.88A16 16 0 0048 512h86.94c59.38 0 108.8-47.23 109.76-106.38a134.89 134.89 0 00-6.57-45.28c-14.24 14.12-35.65 23.35-60 23.87zM288 0C126.5 0 0 79.64 0 181.3c0 49.78 30.22 95.84 85 129.7 3.54 2.17 7.41 4.31 11.37 6.45 1.39-22.07 16.73-41 39.25-51.59-5.91-3-11.92-6-16.9-9.07C98.31 244.17 64 217.57 64 181.3c0-62.61 104.69-117.54 224-117.54s224 54.93 224 117.54-104.69 117.52-224 117.52c-12.82 0-25.42-.8-37.88-2a52.39 52.39 0 015.88 23.8c0 14.93-6.7 28.47-17.48 39.34a470.13 470.13 0 0049.48 2.62c161.5 0 288-79.64 288-181.28S449.5 0 288 0z"
      opacity={0.4}
    />
    <path
      d="M256 320.62c0 35.21-35.82 63.76-80 63.76s-80-28.55-80-63.76 35.82-63.76 80-63.76 80 28.55 80 63.76z"
      className="lasso_svg__fa-primary"
    />
  </svg>
);

SvgLasso.displayName = "SvgLasso";
SvgLasso.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgLasso;
