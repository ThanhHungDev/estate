import * as React from "react";

const SvgCartArrowDown = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 576 512" {...props}>
    <path
      d="M552 64H159.21l52.36 256h293.15a24 24 0 0023.4-18.68l47.27-208a24 24 0 00-18.08-28.72A23.69 23.69 0 00552 64zM444.42 196.48l-67.83 72a12.27 12.27 0 01-17.18 0l-67.83-72c-7.65-7.55-2.23-20.48 8.59-20.48h43.54v-52a12.07 12.07 0 0112.14-12h24.29a12.07 12.07 0 0112.15 12v52h43.54c10.82 0 16.24 12.93 8.59 20.48z"
      opacity={0.4}
    />
    <path
      d="M504.42 405.6l5.52-24.28a24 24 0 00-23.4-29.32H218.12L150 19.19A24 24 0 00126.53 0H24A24 24 0 000 24v16a24 24 0 0024 24h69.88l70.25 343.43a56 56 0 1067.05 8.57h209.64a56 56 0 1063.6-10.4zm-145-137.12a12.27 12.27 0 0017.18 0l67.83-72c7.65-7.55 2.23-20.48-8.59-20.48h-43.55v-52a12.07 12.07 0 00-12.15-12h-24.29a12.07 12.07 0 00-12.14 12v52h-43.54c-10.82 0-16.24 12.93-8.59 20.48z"
      className="cart-arrow-down_svg__fa-primary"
    />
  </svg>
);

SvgCartArrowDown.displayName = "SvgCartArrowDown";
SvgCartArrowDown.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgCartArrowDown;
