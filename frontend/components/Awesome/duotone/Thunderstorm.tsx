import * as React from "react";

const SvgThunderstorm = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path
      d="M350 310.5l-98 194a15 15 0 01-27.6-11L256 352h-81a15 15 0 01-14.9-17l16-130a15.08 15.08 0 0114.9-13h82a15 15 0 0114.5 18.9L264.92 288H337a15 15 0 0113 22.5z"
      opacity={0.4}
    />
    <path
      d="M512 224a96 96 0 01-96 96h-30a46.78 46.78 0 00-45-60h-30.5l10.9-40.9A47 47 0 00276 160h-85a47.1 47.1 0 00-46.6 40.8L128.5 320H96a96 96 0 01-96-96c0-42.5 27.8-78.2 66.1-90.8A113.72 113.72 0 0164 112 111.94 111.94 0 01176 0c43.3 0 80.4 24.8 99 60.8C289.7 43.3 311.4 32 336 32a80 80 0 0180 80 78.09 78.09 0 01-1.6 16.2c.5 0 1-.2 1.6-.2a96 96 0 0196 96z"
      className="thunderstorm_svg__fa-primary"
    />
  </svg>
);

SvgThunderstorm.displayName = "SvgThunderstorm";
SvgThunderstorm.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgThunderstorm;
