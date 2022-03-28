import * as React from "react";

const SvgRefrigerator = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 384 512" {...props}>
    <path d="M336 0H48A48 48 0 000 48v416a48 48 0 0048 48h288a48 48 0 0048-48V48a48 48 0 00-48-48zm16 464a16 16 0 01-16 16H48a16 16 0 01-16-16V192h224v184a8 8 0 008 8h16a8 8 0 008-8V192h64zm0-304h-64v-56a8 8 0 00-8-8h-16a8 8 0 00-8 8v56H32V48a16 16 0 0116-16h288a16 16 0 0116 16z" />
  </svg>
);

SvgRefrigerator.displayName = "SvgRefrigerator";
SvgRefrigerator.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgRefrigerator;
