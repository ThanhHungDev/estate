import * as React from "react";

const SvgGrinStars = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 496 512" {...props}>
    <path
      d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zM94.6 168.9l34.9-5 15.5-31.6a7.73 7.73 0 0113.9 0l15.5 31.6 34.9 5a7.78 7.78 0 014.3 13.2l-25.4 24.6 6 34.9a7.48 7.48 0 01-11 7.9L152 233.3l-31.3 16.3a7.48 7.48 0 01-11-7.9l6-34.9-25.4-24.6a7.85 7.85 0 014.3-13.3zm297.2 169.8c-9.3 55-83.2 93.3-143.8 93.3s-134.5-38.3-143.8-93.3a16.06 16.06 0 0120.7-17.9C155.1 330.5 200 336 248 336s92.9-5.5 123.1-15.2a16 16 0 0120.7 17.9zm13.9-156.6l-25.4 24.6 6 34.9a7.48 7.48 0 01-11 7.9L344 233.3l-31.3 16.3a7.48 7.48 0 01-11-7.9l6-34.9-25.4-24.6a7.81 7.81 0 014.3-13.2l34.9-5 15.5-31.6a7.73 7.73 0 0113.9 0l15.5 31.6 34.9 5a7.7 7.7 0 014.4 13.1z"
      opacity={0.4}
    />
    <path
      d="M209.3 168.9l-34.9-5-15.5-31.6a7.73 7.73 0 00-13.9 0l-15.5 31.6-34.9 5a7.85 7.85 0 00-4.3 13.3l25.4 24.6-6 34.9a7.48 7.48 0 0011 7.9l31.3-16.3 31.2 16.2a7.48 7.48 0 0011-7.9l-6-34.9 25.4-24.6a7.78 7.78 0 00-4.3-13.2zm192 .1l-34.9-5-15.5-31.6a7.73 7.73 0 00-13.9 0L321.5 164l-34.9 5a7.81 7.81 0 00-6.47 8.95v.05a7.92 7.92 0 002.16 4.24l25.4 24.6-6 34.9a7.48 7.48 0 0011 7.9L344 233.3l31.3 16.2a7.48 7.48 0 0011-7.9l-6-34.9 25.4-24.6a7.68 7.68 0 00-4.4-13.1z"
      className="grin-stars_svg__fa-primary"
    />
  </svg>
);

SvgGrinStars.displayName = "SvgGrinStars";
SvgGrinStars.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgGrinStars;
