import * as React from "react";

const SvgSortAmountDown = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M304 376h-64a16 16 0 00-16 16v16a16 16 0 0016 16h64a16 16 0 0016-16v-16a16 16 0 00-16-16zm-140 8h-44V48a16 16 0 00-16-16H88a16 16 0 00-16 16v336H28a12 12 0 00-8.73 20.24l68 72a12 12 0 0017.44 0l68-72A12 12 0 00164 384zm268-200H240a16 16 0 00-16 16v16a16 16 0 0016 16h192a16 16 0 0016-16v-16a16 16 0 00-16-16zm64-96H240a16 16 0 00-16 16v16a16 16 0 0016 16h256a16 16 0 0016-16v-16a16 16 0 00-16-16zM368 280H240a16 16 0 00-16 16v16a16 16 0 0016 16h128a16 16 0 0016-16v-16a16 16 0 00-16-16z" />
  </svg>
);

SvgSortAmountDown.displayName = "SvgSortAmountDown";
SvgSortAmountDown.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgSortAmountDown;
