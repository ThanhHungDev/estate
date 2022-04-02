import * as React from "react";

const SvgItalic = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 320 512" {...props}>
    <path d="M320 48v16a16 16 0 01-16 16h-67l-88 352h59a16 16 0 0116 16v16a16 16 0 01-16 16H16a16 16 0 01-16-16v-16a16 16 0 0116-16h67l88-352h-59a16 16 0 01-16-16V48a16 16 0 0116-16h192a16 16 0 0116 16z" />
  </svg>
);

SvgItalic.displayName = "SvgItalic";
SvgItalic.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgItalic;
