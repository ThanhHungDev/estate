import * as React from "react";

const SvgStarShooting = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M308.681 191.996l11.311 11.308a15.998 15.998 0 0022.627 0L507.314 38.622a15.999 15.999 0 000-22.626l-11.31-11.31a16.001 16.001 0 00-22.628 0L308.68 169.368a16.001 16.001 0 000 22.628zM239.991 91.31a15.998 15.998 0 0022.627 0l52.692-52.687a15.999 15.999 0 000-22.626L304 4.686a16.001 16.001 0 00-22.628 0L228.68 57.373a16.001 16.001 0 000 22.628zm256.012 105.369a16.001 16.001 0 00-22.627 0l-52.693 52.687a16.001 16.001 0 000 22.628l11.311 11.308a15.998 15.998 0 0022.628 0l52.692-52.687a15.999 15.999 0 000-22.626zm-131.71 70.608L259.496 251.99l-46.907-95.2c-8.391-16.998-32.688-17.202-41.189 0l-46.907 95.2-104.798 15.296C.896 269.99-6.713 293.191 6.99 306.488l75.908 73.997-18 104.589c-3.204 18.905 16.687 33.108 33.297 24.202l93.799-49.388 93.798 49.388a22.954 22.954 0 0033.298-24.202l-17.891-104.59 75.892-73.996c13.61-13.297 6-36.499-12.797-39.202z" />
  </svg>
);

SvgStarShooting.displayName = "SvgStarShooting";
SvgStarShooting.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgStarShooting;
