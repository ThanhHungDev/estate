import * as React from "react";

const SvgWaveTriangle = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path d="M636.73 235.05l-12.91-9.47a8 8 0 00-11.18 1.72L464.38 436.44 189.16 38.93A16 16 0 00176.22 32c-6.22-.43-10 2.38-13.13 6.54L1.55 265.82A8 8 0 003.27 277l12.91 9.47a8 8 0 0011.18-1.72L175.62 75.6l275.22 397.51a16 16 0 0012.94 6.89h.22a16 16 0 0012.91-6.53l161.54-227.24a8 8 0 00-1.72-11.18z" />
  </svg>
);

SvgWaveTriangle.displayName = "SvgWaveTriangle";
SvgWaveTriangle.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgWaveTriangle;
