import * as React from "react";

const SvgCheeseburger = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M464 256h-48l-96 64-96-64H48a48 48 0 000 96h416a48 48 0 000-96zM58.6 224h394.7c34.6 0 54.6-43.9 34.8-75.9C448 83.2 359.5 32.1 256 32c-103.5.1-192 51.2-232.2 116.1-19.8 32 .3 75.9 34.8 75.9zM384 112a16 16 0 11-16 16 16 16 0 0116-16zM256 80a16 16 0 11-16 16 16 16 0 0116-16zm-128 32a16 16 0 11-16 16 16 16 0 0116-16zm352 272H32a16 16 0 00-16 16v16a64.06 64.06 0 0064 64h352a64.06 64.06 0 0064-64v-16a16 16 0 00-16-16z" />
  </svg>
);

SvgCheeseburger.displayName = "SvgCheeseburger";
SvgCheeseburger.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgCheeseburger;
