import * as React from "react";

const SvgTenge = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 384 512" {...props}>
    <path d="M376 128H8c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h168v312c0 4.4 3.6 8 8 8h16c4.4 0 8-3.6 8-8V160h168c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8zm0-96H8c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h368c4.4 0 8-3.6 8-8V40c0-4.4-3.6-8-8-8z" />
  </svg>
);

SvgTenge.displayName = "SvgTenge";
SvgTenge.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgTenge;
