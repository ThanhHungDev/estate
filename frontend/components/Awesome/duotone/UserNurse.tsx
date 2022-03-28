import * as React from "react";

const SvgUserNurse = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 448 512" {...props}>
    <path
      d="M128.59 320zm190.82 0zM304 160v16a80 80 0 01-160 0v-16H96v16a128 128 0 00256 0v-16z"
      opacity={0.4}
    />
    <path
      d="M144 160h208V65.82a32 32 0 00-20.76-30L246.47 4.07a64 64 0 00-44.94 0l-84.77 31.79A32 32 0 0096 65.82V160zm40-88.33a5 5 0 015-5h21.67V45a5 5 0 015-5h16.66a5 5 0 015 5v21.67H259a5 5 0 015 5v16.66a5 5 0 01-5 5h-21.67V115a5 5 0 01-5 5h-16.66a5 5 0 01-5-5V93.33H189a5 5 0 01-5-5zM319.41 320L224 415.39 128.59 320C57.1 323.1 0 381.6 0 453.79A58.21 58.21 0 0058.21 512h331.58A58.21 58.21 0 00448 453.79C448 381.6 390.9 323.1 319.41 320z"
      className="user-nurse_svg__fa-primary"
    />
  </svg>
);

SvgUserNurse.displayName = "SvgUserNurse";
SvgUserNurse.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgUserNurse;
