import * as React from "react";

const SvgShip = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path
      d="M594.3 447.89c-21.53-2.4-42.13-10.51-57.93-22.92a38.77 38.77 0 00-48.22 0c-37.91 30.43-107.24 30.43-145.75-1.5-13.5-11.21-33-9.11-46.71 1.8-38 30.13-106.93 30-145.25-1.7-13.5-11.21-33.31-8.91-47.12 2-15.5 12.21-36 20.12-57.72 22.42-7.9.8-13.6 7.81-13.6 15.72v32.23c0 9.11 7.6 16.81 16.7 16 28.81-2.5 56.12-11.41 79.44-25.92 56.52 34.63 137 34.13 192 0 56.51 34.63 137 34.13 192 0a184.89 184.89 0 0079.14 25.82c9.1.8 16.7-6.9 16.7-16v-31.63c.16-8-5.64-15.42-13.74-16.32zM192 128h256v87.53l64 20.58V96a32 32 0 00-32-32h-64V24a24 24 0 00-24-24H248a24 24 0 00-24 24v40h-64a32 32 0 00-32 32v140.11l64-20.58z"
      opacity={0.4}
    />
    <path
      d="M574.56 289.82a32.13 32.13 0 01-7.84 12.83l-92.5 89.25A83.19 83.19 0 01417 415.61h-.5c-21.23 0-40.79-6.12-53.64-16.77A64.17 64.17 0 00321.29 384a73.55 73.55 0 00-45.5 16.19c-12.38 9.8-31.12 15.42-51.44 15.42h-.51a85 85 0 01-58.48-24.22l-92-88.74a32 32 0 0112.85-53.09l224-72a31.94 31.94 0 0119.58 0l224 72a32 32 0 0120.7 40.25z"
      className="ship_svg__fa-primary"
    />
  </svg>
);

SvgShip.displayName = "SvgShip";
SvgShip.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgShip;
