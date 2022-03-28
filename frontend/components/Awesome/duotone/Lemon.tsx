import * as React from "react";

const SvgLemon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path
      d="M489 23C465.94-.13 434.65-5.93 414 6.13 355 40.44 232.7-46.95 92.87 92.88S40.44 355 6.13 413.94C-5.93 434.65-.13 465.94 23 489s54.39 28.89 75.1 16.83c58.9-34.27 181.2 53.17 321-86.7S471.56 157 505.87 98.06c12.06-20.71 6.26-52-16.87-75.06zM243.88 95.52c-58.19 14.55-133.81 90.16-148.36 148.36a16 16 0 01-31-7.76c17.38-69.69 101.8-154.19 171.6-171.64a16 16 0 017.76 31z"
      opacity={0.4}
    />
    <path
      d="M243.88 95.48c-58.19 14.55-133.81 90.16-148.36 148.36a16 16 0 01-31-7.76c17.38-69.65 101.8-154.15 171.6-171.6a16 16 0 017.76 31z"
      className="lemon_svg__fa-primary"
    />
  </svg>
);

SvgLemon.displayName = "SvgLemon";
SvgLemon.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgLemon;
