import * as React from "react";

const SvgVolumeOff = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 256 512" {...props}>
    <path d="M231.81 64a23.44 23.44 0 00-16.78 7l-89 89H24a24 24 0 00-24 24v144a24 24 0 0024 24h102.06L215 441a23.47 23.47 0 0016.81 7c12.33 0 24.19-9.52 24.19-24V88c0-14.51-11.86-24-24.19-24zM224 404.67L139.31 320H32V192h107.31L224 107.33v297.34z" />
  </svg>
);

SvgVolumeOff.displayName = "SvgVolumeOff";
SvgVolumeOff.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgVolumeOff;
