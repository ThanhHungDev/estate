import * as React from "react";

const SvgDiceD10 = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M503.88 261.29L279.8 10.64C273.45 3.55 264.73 0 256 0s-17.45 3.55-23.8 10.64L8.12 261.29c-11.81 13.21-10.6 33.5 2.69 45.22l224.08 197.52c6.03 5.32 13.57 7.97 21.11 7.97s15.08-2.66 21.11-7.97L501.19 306.5c13.29-11.71 14.49-32.01 2.69-45.21zM256 287.83l-66.08-44.05L256 89.6l66.08 154.18L256 287.83zm-113.37-55.56l-56.9 14.23 97.58-109.15-40.68 94.92zm12.9 46.26L232 329.51v107.97L74.61 298.76l80.92-20.23zM280 329.51l76.47-50.98 80.92 20.22L280 437.49V329.51zm89.37-97.24l-40.68-94.92 97.58 109.15-56.9-14.23z" />
  </svg>
);

SvgDiceD10.displayName = "SvgDiceD10";
SvgDiceD10.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgDiceD10;
