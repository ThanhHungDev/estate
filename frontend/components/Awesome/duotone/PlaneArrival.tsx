import * as React from "react";

const SvgPlaneArrival = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path
      d="M640 464v32a16 16 0 01-16 16H16a16 16 0 01-16-16v-32a16 16 0 0116-16h608a16 16 0 0116 16z"
      opacity={0.4}
    />
    <path
      d="M32.23 182.41L32 80.63a16.52 16.52 0 0120.72-15.88l39.73 10.83a16.54 16.54 0 0111 9.93l27.59 67.88 102.2 27.84L185.34 17A16.51 16.51 0 01206.05.58l65.09 17.73a16.62 16.62 0 0111.66 11.91l100.36 191.85 97.51 26.56c26.48 7.21 51.55 20.18 70.83 40 21.64 22.25 27.2 40.46 23.37 55S557.29 371 527.62 379.3c-26.44 7.36-54.52 5.85-81-1.36L159 299.59a62.52 62.52 0 01-25.47-13.93l-88.74-80c-6.53-5.91-12.37-14.34-12.56-23.25z"
      className="plane-arrival_svg__fa-primary"
    />
  </svg>
);

SvgPlaneArrival.displayName = "SvgPlaneArrival";
SvgPlaneArrival.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgPlaneArrival;
