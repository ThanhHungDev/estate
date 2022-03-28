import * as React from "react";

const SvgEggFried = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M478.32 150.45c-39.5-40.71-100.73-46.29-144.39-82.24C284.12 27.2 245.81-9.25 175.39 2.1c-86.78 14-111.71 80-125 157.14-11.1 64.34-54.41 127-50 192.91s52.83 128.43 114.97 150.74c93 33.39 146.94-31.71 204.64-86.45 43.68-41.44 93.4-37.72 140.93-73.89 56.28-42.82 71.71-140.55 17.39-192.1zM224 352.38c-61.74 0-112-50.3-112-112.11s50.26-112.12 112-112.12 112 50.29 112 112.12-50.19 112.11-112 112.11zM216 160a72.09 72.09 0 00-72 72 16 16 0 0032 0 40.05 40.05 0 0140-40 16 16 0 000-32z" />
  </svg>
);

SvgEggFried.displayName = "SvgEggFried";
SvgEggFried.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgEggFried;
