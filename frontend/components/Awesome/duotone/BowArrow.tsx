import * as React from "react";

const SvgBowArrow = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path
      d="M282.33 150.47l46.61-46.61a255.3 255.3 0 00-275.1.73l-3.9-3.9a16 16 0 00-22.63 0L4.69 123.31a16 16 0 000 22.63L145.78 287 191 241.78l-90.54-90.58a192.49 192.49 0 01181.87-.73zm125.08 307a255.3 255.3 0 00.73-275.1L361.53 229a192.51 192.51 0 01-.73 181.88l-90.58-90.58L225 365.56l141.72 141.76a16 16 0 0022.63 0L412 484.69a16 16 0 000-22.63z"
      opacity={0.4}
    />
    <path
      d="M511.71 18.78L486 147.37a15.7 15.7 0 01-26.49 8L425 120.92 174.39 371.56l16.61 49.7a20.56 20.56 0 01-5 21L122.32 506a20.56 20.56 0 01-34-8l-18.59-55.72-55.66-18.55a20.56 20.56 0 01-8-34L69.7 326a20.58 20.58 0 0121-5l49.7 16.57L391.08 87l-34.47-34.48a15.7 15.7 0 018-26.49L493.22.31a15.72 15.72 0 0118.49 18.47z"
      className="bow-arrow_svg__fa-primary"
    />
  </svg>
);

SvgBowArrow.displayName = "SvgBowArrow";
SvgBowArrow.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgBowArrow;
