import * as React from "react";

const SvgSortAmountUp = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path
      d="M304 416h-64a16 16 0 00-16 16v32a16 16 0 0016 16h64a16 16 0 0016-16v-32a16 16 0 00-16-16zm128-256H240a16 16 0 00-16 16v32a16 16 0 0016 16h192a16 16 0 0016-16v-32a16 16 0 00-16-16zm-64 128H240a16 16 0 00-16 16v32a16 16 0 0016 16h128a16 16 0 0016-16v-32a16 16 0 00-16-16zM496 32H240a16 16 0 00-16 16v32a16 16 0 0016 16h256a16 16 0 0016-16V48a16 16 0 00-16-16z"
      opacity={0.4}
    />
    <path
      d="M16 160h48v304a16 16 0 0016 16h32a16 16 0 0016-16V160h48c14.21 0 21.38-17.24 11.31-27.31l-80-96a16 16 0 00-22.62 0l-80 96C-5.35 142.74 1.77 160 16 160z"
      className="sort-amount-up_svg__fa-primary"
    />
  </svg>
);

SvgSortAmountUp.displayName = "SvgSortAmountUp";
SvgSortAmountUp.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgSortAmountUp;
