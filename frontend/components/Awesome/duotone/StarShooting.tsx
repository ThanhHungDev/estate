import * as React from "react";

const SvgStarShooting = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path
      d="M507.312 15.996l-11.308-11.31a16.003 16.003 0 00-22.63 0l-164.69 164.682a15.998 15.998 0 000 22.628l11.308 11.309a16 16 0 0022.63 0l164.69-164.683a15.995 15.995 0 000-22.626zm-192.003 0l-11.31-11.31a16.003 16.003 0 00-22.628 0l-52.689 52.687a15.998 15.998 0 000 22.628l11.309 11.308a16 16 0 0022.63 0l52.688-52.687a15.995 15.995 0 000-22.626zm180.695 180.682a16.003 16.003 0 00-22.63 0l-52.688 52.687a15.998 15.998 0 000 22.628l11.309 11.308a16 16 0 0022.629 0l52.688-52.687a15.995 15.995 0 000-22.626z"
      opacity={0.4}
    />
    <path
      d="M82.898 380.485l-18 104.589c-3.204 18.905 16.687 33.108 33.297 24.202l93.799-49.388 93.798 49.388a22.954 22.954 0 0033.298-24.202l-17.891-104.59 75.892-73.996c13.61-13.297 6-36.499-12.797-39.202L259.495 251.99l-46.907-95.2c-8.39-16.998-32.688-17.202-41.188 0l-46.908 95.2-104.798 15.296C.896 269.99-6.713 293.191 6.99 306.488z"
      className="star-shooting_svg__fa-primary"
    />
  </svg>
);

SvgStarShooting.displayName = "SvgStarShooting";
SvgStarShooting.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgStarShooting;