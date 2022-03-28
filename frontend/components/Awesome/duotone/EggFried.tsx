import * as React from "react";

const SvgEggFried = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path
      d="M478.31 150.45c-39.5-40.71-100.74-46.29-144.41-82.24C284.09 27.2 245.77-9.25 175.34 2.1c-86.79 14-111.73 80-125 157.14-11.1 64.34-54.42 127-50 192.91s52.84 128.43 115 150.74c93 33.39 147-31.71 204.67-86.45 43.69-41.44 93.41-37.72 141-73.89 56.2-42.82 71.63-140.55 17.3-192.1zM224 352.38c-61.75 0-112-50.3-112-112.11s50.27-112.12 112-112.12 112 50.29 112 112.12a112.14 112.14 0 01-112 112.11z"
      opacity={0.4}
    />
    <path
      d="M224 128a112 112 0 10112 112 112.15 112.15 0 00-112-112zm-8 63.78a40 40 0 00-40 40 16 16 0 01-32 0 72.05 72.05 0 0172-71.92 16 16 0 110 32z"
      className="egg-fried_svg__fa-primary"
    />
  </svg>
);

SvgEggFried.displayName = "SvgEggFried";
SvgEggFried.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgEggFried;
