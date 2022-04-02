import * as React from "react";

const SvgCameraMovie = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 576 512" {...props}>
    <path d="M535.68 260.59L448 321.05V447l87.66 60.39c17 11.68 40.32-.23 40.32-20.63V281.22c.02-20.32-23.25-32.32-40.3-20.63zM368.2 288H16a16 16 0 00-16 16v32a16 16 0 0016 16h48v112.2a47.81 47.81 0 0047.8 47.8h256.4a47.81 47.81 0 0047.8-47.8V335.8a47.81 47.81 0 00-47.8-47.8zM352 0c-48.57 0-90.31 27.37-112 67.23C218.31 27.37 176.57 0 128 0a128 128 0 000 256h224a128 128 0 000-256zM128 192a64 64 0 1164-64 64.07 64.07 0 01-64 64zm224 0a64 64 0 1164-64 64.07 64.07 0 01-64 64z" />
  </svg>
);

SvgCameraMovie.displayName = "SvgCameraMovie";
SvgCameraMovie.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgCameraMovie;
