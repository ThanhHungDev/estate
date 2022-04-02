import * as React from "react";

const SvgSortNumericUpAlt = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 448 512" {...props}>
    <path d="M400 432h-24V304a16 16 0 00-16-16h-36a16 16 0 00-13.57 7.52l-20 32A16 16 0 00304 352h24v80h-24a16 16 0 00-16 16v16a16 16 0 0016 16h96a16 16 0 0016-16v-16a16 16 0 00-16-16zM344 32a72 72 0 000 144 71.1 71.1 0 0018.84-2.82 59.56 59.56 0 01-42.32 34.42A15.84 15.84 0 00308 223.16v16.77a16 16 0 0018.71 15.83A108.19 108.19 0 00416 149.38V104a72.08 72.08 0 00-72-72zm0 96a24 24 0 1124-24 24 24 0 01-24 24zm-316 0h44v336a16 16 0 0016 16h16a16 16 0 0016-16V128h44a12 12 0 008.73-20.24l-68-72a12 12 0 00-17.44 0l-68 72A12 12 0 0028 128z" />
  </svg>
);

SvgSortNumericUpAlt.displayName = "SvgSortNumericUpAlt";
SvgSortNumericUpAlt.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgSortNumericUpAlt;
