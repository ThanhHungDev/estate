import * as React from "react";

const SvgLongArrowRight = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 448 512" {...props}>
    <path d="M254.544 154.427L320.118 220H24c-13.255 0-24 10.745-24 24v24c0 13.255 10.745 24 24 24h296.118l-65.574 65.573c-9.373 9.373-9.373 24.569 0 33.941l16.971 16.971c9.373 9.373 24.569 9.373 33.941 0L440.97 272.97c9.373-9.373 9.373-24.569 0-33.941L305.456 103.515c-9.373-9.373-24.569-9.373-33.941 0l-16.971 16.971c-9.373 9.372-9.373 24.568 0 33.941z" />
  </svg>
);

SvgLongArrowRight.displayName = "SvgLongArrowRight";
SvgLongArrowRight.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgLongArrowRight;
