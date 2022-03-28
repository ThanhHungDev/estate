import * as React from "react";

const SvgMandolin = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M507.31 50.67l-46-46a16 16 0 00-19.81-2.25l-64 40.07a32 32 0 00-14 19.11L349 117.73l-74.46 74.46C90.38 190.67 46 241 30.74 256.28c-46.81 46.79-39.52 150.36 17.54 207.45s160.65 64.34 207.44 17.53C271 466 321.32 421.62 319.8 237.45L394.27 163l56.11-14.51a32 32 0 0019.11-14l40.07-64a16 16 0 00-2.25-19.82zM208 352a48 48 0 1148-48 48 48 0 01-48 48z" />
  </svg>
);

SvgMandolin.displayName = "SvgMandolin";
SvgMandolin.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgMandolin;
