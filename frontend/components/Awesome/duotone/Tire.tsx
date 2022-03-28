import * as React from "react";

const SvgTire = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path
      d="M256 64C150 64 64 150 64 256s86 192 192 192 192-86 192-192S362 64 256 64zm0 48a143.36 143.36 0 0164.08 15l-38.86 53.51a73.73 73.73 0 00-50.44 0L191.92 127A143.36 143.36 0 01256 112zM113.52 277a145.25 145.25 0 01-1.52-21 143 143 0 0141.13-100.75l38.75 53.34A79.28 79.28 0 00176 256c0 .25.07.48.07.72zM232 398a144.57 144.57 0 01-103.68-75.29L191 302.36a79.77 79.77 0 0041 29.57zm24-110a32 32 0 1132-32 32 32 0 01-32 32zm101.82 69.82A142.84 142.84 0 01280 398v-66.07a79.77 79.77 0 0041-29.57l62.68 20.36a144.24 144.24 0 01-25.86 35.1zm-21.89-101.09c0-.25.07-.48.07-.73a79.28 79.28 0 00-15.88-47.41l38.75-53.34A143 143 0 01400 256a146.93 146.93 0 01-1.52 21.05z"
      opacity={0.4}
    />
    <path
      d="M256 224a32 32 0 1032 32 32 32 0 00-32-32zm0-224C114.62 0 0 114.62 0 256s114.62 256 256 256 256-114.62 256-256S397.38 0 256 0zm0 448c-105.87 0-192-86.13-192-192S150.13 64 256 64s192 86.13 192 192-86.13 192-192 192z"
      className="tire_svg__fa-primary"
    />
  </svg>
);

SvgTire.displayName = "SvgTire";
SvgTire.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgTire;
