import * as React from "react";

const SvgRefrigerator = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 384 512" {...props}>
    <path d="M336 0H48A48 48 0 000 48v416a48 48 0 0048 48h288a48 48 0 0048-48V48a48 48 0 00-48-48zm0 48v128h-48v-64a16 16 0 00-16-16h-16a16 16 0 00-16 16v64H48V48zM48 464V224h192v144a16 16 0 0016 16h16a16 16 0 0016-16V224h48v240z" />
  </svg>
);

SvgRefrigerator.displayName = "SvgRefrigerator";
SvgRefrigerator.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgRefrigerator;
