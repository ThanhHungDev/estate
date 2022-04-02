import * as React from "react";

const SvgSwordLaserAlt = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path
      d="M504.967 7.03a24.008 24.008 0 00-33.281-.641L225.979 232.056h103.522l176.107-191.74a24.007 24.007 0 00-.64-33.286z"
      opacity={0.4}
    />
    <path
      d="M94.223 327.254L9.37 412.124a31.997 31.997 0 00-.012 45.236l.008.003L116.85 349.88zm33.946 33.942L20.674 468.685l22.623 22.644 107.503-107.5zm180.866-105.134h-137a16 16 0 00-11.318 4.688l-55.178 55.187 90.53 90.53 124.227-123.032c10.155-10.059 3.032-27.373-11.26-27.373zM54.612 502.652v.002a32.085 32.085 0 0045.261.011l84.881-84.881-22.639-22.638z"
      className="sword-laser-alt_svg__fa-primary"
    />
  </svg>
);

SvgSwordLaserAlt.displayName = "SvgSwordLaserAlt";
SvgSwordLaserAlt.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgSwordLaserAlt;
