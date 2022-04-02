import * as React from "react";

const SvgVial = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 480 512" {...props}>
    <path
      d="M318 256L138.61 435.44a55.46 55.46 0 01-78.39.06 55.46 55.46 0 01-.09-78.44L161 256z"
      opacity={0.4}
    />
    <path
      d="M477.65 186.12L309.45 18.33a8 8 0 00-11.3 0l-34 33.9a8 8 0 000 11.29l11.2 11.1L33 316.53c-38.8 38.69-45.1 102-9.4 143.5a102.44 102.44 0 0078 35.9h.4a102.75 102.75 0 0072.9-30.09l246.3-245.71 11.2 11.1a8 8 0 0011.3 0l34-33.89a7.92 7.92 0 00-.05-11.22zM141 431.84a54.65 54.65 0 01-38.95 16h-.36A54.09 54.09 0 0160 428.76c-8.67-10.08-12.85-23.53-11.76-37.86a64.77 64.77 0 0118.61-40.4l242.4-241.9 78 77.54z"
      className="vial_svg__fa-primary"
    />
  </svg>
);

SvgVial.displayName = "SvgVial";
SvgVial.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgVial;
