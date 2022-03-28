import * as React from "react";

const SvgWind = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path
      d="M508.88 394.71c-9.6 41.1-43.5 74-84.69 82.7-58.9 12.5-111.6-21.7-129.39-72.3-3.7-10.3 4.4-21.1 15.29-21.1h33.8c5.8 0 11.6 2.6 14.5 7.6A47.93 47.93 0 10400 320H283.5a126.41 126.41 0 00-39.8-64H400c70.48 0 126 65.5 108.88 138.71z"
      opacity={0.4}
    />
    <path
      d="M156.76 256H16a16 16 0 00-16 16v32a16 16 0 0016 16h142.26c15.9 0 30.81 10.9 33.41 26.6a32.06 32.06 0 01-62 15.5c-2.11-6.3-8.61-10.1-15.21-10.1H81.63c-9.8 0-17.71 8.8-15.91 18.4a96 96 0 00189.47-31c-6.1-48.4-49.72-83.4-98.43-83.4zm289.07-148.72c-7.6-36.21-36.91-65.52-73.11-73.12a96.22 96.22 0 00-114.9 75.52c-1.9 9.6 6.1 18.3 15.8 18.3h32.8c6.7 0 13.1-3.8 15.2-10.1a32 32 0 0162 15.5C381 149.09 366.22 160 350.22 160H16a16 16 0 00-16 16v32a16 16 0 0016 16h336a96.2 96.2 0 0093.83-116.72z"
      className="wind_svg__fa-primary"
    />
  </svg>
);

SvgWind.displayName = "SvgWind";
SvgWind.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgWind;
