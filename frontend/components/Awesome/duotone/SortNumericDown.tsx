import * as React from "react";

const SvgSortNumericDown = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 448 512" {...props}>
    <path
      d="M304 96h16v64h-16a16 16 0 00-16 16v32a16 16 0 0016 16h96a16 16 0 0016-16v-32a16 16 0 00-16-16h-16V48a16 16 0 00-16-16h-48a16 16 0 00-14.29 8.83l-16 32A16 16 0 00304 96zm26.15 162.91a79 79 0 00-55 54.17c-14.25 51.05 21.21 97.77 68.85 102.53a84.07 84.07 0 01-20.85 12.91c-7.57 3.4-10.8 12.47-8.18 20.34l9.9 20c2.87 8.63 12.53 13.49 20.9 9.91 58-24.76 86.25-61.61 86.25-132V336c-.02-51.21-48.4-91.34-101.85-77.09zM352 356a20 20 0 1120-20 20 20 0 01-20 20z"
      opacity={0.4}
    />
    <path
      d="M176 352h-48V48a16 16 0 00-16-16H80a16 16 0 00-16 16v304H16c-14.19 0-21.36 17.24-11.29 27.31l80 96a16 16 0 0022.62 0l80-96C197.35 369.26 190.22 352 176 352z"
      className="sort-numeric-down_svg__fa-primary"
    />
  </svg>
);

SvgSortNumericDown.displayName = "SvgSortNumericDown";
SvgSortNumericDown.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgSortNumericDown;
