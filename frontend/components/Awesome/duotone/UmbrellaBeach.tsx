import * as React from "react";

const SvgUmbrellaBeach = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path d="M253 448l72.9-200.37L386 269.5 321.06 448z" opacity={0.4} />
    <path
      d="M247.63 185.06l238.47 86.83c35.76-121.38 18.7-231.66-42.62-254a66.94 66.94 0 00-23.09-4c-58.02.04-128.27 69.19-172.76 171.17zM115.38 136.9l102.11 37.18C252.68 92.54 303.7 29.8 356.49.39A299.21 299.21 0 00108 112.18c-6.73 8.4-2.7 21.05 7.38 24.72zm406.09-76.4a226.81 226.81 0 0113.2 55.19c5.74 49.89-1.42 108.23-18.95 167L618.34 320c10.09 3.67 21.31-3.43 21.57-14.17A299.4 299.4 0 00521.47 60.5zM560 448H16a16 16 0 00-16 16v32a16 16 0 0016 16h544a16 16 0 0016-16v-32a16 16 0 00-16-16z"
      className="umbrella-beach_svg__fa-primary"
    />
  </svg>
);

SvgUmbrellaBeach.displayName = "SvgUmbrellaBeach";
SvgUmbrellaBeach.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgUmbrellaBeach;
