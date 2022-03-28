import * as React from "react";

const SvgHeading = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M416 64v384h56a8 8 0 018 8v16a8 8 0 01-8 8H328a8 8 0 01-8-8v-16a8 8 0 018-8h56V272H128v176h56a8 8 0 018 8v16a8 8 0 01-8 8H40a8 8 0 01-8-8v-16a8 8 0 018-8h56V64H40a8 8 0 01-8-8V40a8 8 0 018-8h144a8 8 0 018 8v16a8 8 0 01-8 8h-56v176h256V64h-56a8 8 0 01-8-8V40a8 8 0 018-8h144a8 8 0 018 8v16a8 8 0 01-8 8z" />
  </svg>
);

SvgHeading.displayName = "SvgHeading";
SvgHeading.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgHeading;
