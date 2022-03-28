import * as React from "react";

const SvgCompressArrowsAlt = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path
      d="M507.25 30.05l-25.4-25.4a16.06 16.06 0 00-22.6 0L360 104l-31.1-33C313.8 55.9 288 66.6 288 88v112a23.94 23.94 0 0024 24h112c21.4 0 32.1-25.9 17-41l-33-31 99.3-99.3a16.06 16.06 0 00-.05-22.65zM200 288H88c-21.4 0-32.1 25.8-17 41l32.9 31-99.2 99.3a16.06 16.06 0 000 22.6l25.4 25.4a16.06 16.06 0 0022.6 0L152 408l31.1 33c15.1 15.1 40.9 4.4 40.9-17V312a23.94 23.94 0 00-24-24z"
      opacity={0.4}
    />
    <path
      d="M183 71.05L152 104 52.65 4.65a16.06 16.06 0 00-22.6 0l-25.4 25.4a16.06 16.06 0 000 22.6L104 152l-33 31.1C55.9 198.2 66.6 224 88 224h112a23.94 23.94 0 0024-24V88c0-21.35-25.95-32-41-16.95zm324.3 388.3L408 360l33-31.1c15.1-15.1 4.4-40.9-17-40.9H312a23.94 23.94 0 00-24 24v112c0 21.4 25.9 32.1 41 17l31-32.9 99.3 99.3a16.06 16.06 0 0022.6 0l25.4-25.4a16.06 16.06 0 00-.05-22.65z"
      className="compress-arrows-alt_svg__fa-primary"
    />
  </svg>
);

SvgCompressArrowsAlt.displayName = "SvgCompressArrowsAlt";
SvgCompressArrowsAlt.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgCompressArrowsAlt;
