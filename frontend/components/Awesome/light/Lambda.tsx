import * as React from "react";

const SvgLambda = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 448 512" {...props}>
    <path d="M440 448h-72.63c-3.12 0-5.96-1.81-7.26-4.65L178.83 50.59A31.999 31.999 0 00149.78 32H8c-4.42 0-8 3.58-8 8v16c0 4.42 3.58 8 8 8h136.63c3.12 0 5.96 1.81 7.26 4.65l7.79 16.88L.62 468.92C-1.57 474.19 2.3 480 8.01 480h17.36a7.99 7.99 0 007.38-4.92l145.17-350.05 155.25 336.38A31.999 31.999 0 00362.22 480H440c4.42 0 8-3.58 8-8v-16c0-4.42-3.58-8-8-8z" />
  </svg>
);

SvgLambda.displayName = "SvgLambda";
SvgLambda.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgLambda;
