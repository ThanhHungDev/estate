import * as React from "react";

const SvgFighterJet = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path
      d="M168 192h176L227.16 44h39.51c11.66 0 21.33-2.62 21.33-6s-9.67-6-21.33-6H152v12h16zm0 128v148h-16v12h114.67c11.66 0 21.33-2.62 21.33-6s-9.67-6-21.33-6h-39.51L344 320z"
      opacity={0.4}
    />
    <path
      d="M640 256c0 5.42 0 10.67-96 32l-128 16-48 16H106.67l-53.34 64H18.67L8 373.33V304h8v-16h48v-2.67l-64-8v-42.66l64-8V224H16v-16H8v-69.33L18.67 128h34.66l53.34 64H368l48 16 128 16c96 21.33 96 26.58 96 32z"
      className="fighter-jet_svg__fa-primary"
    />
  </svg>
);

SvgFighterJet.displayName = "SvgFighterJet";
SvgFighterJet.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgFighterJet;
