import * as React from "react";

const SvgRefrigerator = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 384 512" {...props}>
    <path
      d="M336 .5H48a48 48 0 00-48 48v112h288v-88a8 8 0 018-8h16a8 8 0 018 8v88h64v-112a48 48 0 00-48-48zm-16 376a8 8 0 01-8 8h-16a8 8 0 01-8-8v-184H0v272a48 48 0 0048 48h288a48 48 0 0048-48v-272h-64z"
      opacity={0.4}
    />
    <path
      d="M0 192.5h288v-32H0zm320-32v32h64v-32z"
      className="refrigerator_svg__fa-primary"
    />
  </svg>
);

SvgRefrigerator.displayName = "SvgRefrigerator";
SvgRefrigerator.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgRefrigerator;
