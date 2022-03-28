import * as React from "react";

const SvgSortAmountUp = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M304 376h-64a16 16 0 00-16 16v16a16 16 0 0016 16h64a16 16 0 0016-16v-16a16 16 0 00-16-16zM28 128h44v336a16 16 0 0016 16h16a16 16 0 0016-16V128h44a12 12 0 008.73-20.24l-68-72a12 12 0 00-17.44 0l-68 72A12 12 0 0028 128zm404 56H240a16 16 0 00-16 16v16a16 16 0 0016 16h192a16 16 0 0016-16v-16a16 16 0 00-16-16zm64-96H240a16 16 0 00-16 16v16a16 16 0 0016 16h256a16 16 0 0016-16v-16a16 16 0 00-16-16zM368 280H240a16 16 0 00-16 16v16a16 16 0 0016 16h128a16 16 0 0016-16v-16a16 16 0 00-16-16z" />
  </svg>
);

SvgSortAmountUp.displayName = "SvgSortAmountUp";
SvgSortAmountUp.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgSortAmountUp;
