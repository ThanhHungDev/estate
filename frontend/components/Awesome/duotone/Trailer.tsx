import * as React from "react";

const SvgTrailer = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path
      d="M176 320a80 80 0 1080 80 80 80 0 00-80-80zM96 136a8 8 0 00-8-8H72a8 8 0 00-8 8v128.39a176.29 176.29 0 0132-20.71zm96 89.14V136a8 8 0 00-8-8h-16a8 8 0 00-8 8v89.14c5.31-.49 10.57-1.14 16-1.14s10.69.65 16 1.14zM280 128h-16a8 8 0 00-8 8v107.68a176.29 176.29 0 0132 20.71V136a8 8 0 00-8-8zm192 0h-16a8 8 0 00-8 8v184h32V136a8 8 0 00-8-8zm-96 0h-16a8 8 0 00-8 8v184h32V136a8 8 0 00-8-8z"
      opacity={0.4}
    />
    <path
      d="M624 320h-80V80a16 16 0 00-16-16H16A16 16 0 000 80v288a16 16 0 0016 16h49.61c7.83-54.21 54-96 110.39-96s102.56 41.79 110.39 96H624a16 16 0 0016-16v-32a16 16 0 00-16-16zM96 243.68a176.29 176.29 0 00-32 20.71V136a8 8 0 018-8h16a8 8 0 018 8zm96-18.54c-5.31-.49-10.57-1.14-16-1.14s-10.69.65-16 1.14V136a8 8 0 018-8h16a8 8 0 018 8zm96 39.25a176.29 176.29 0 00-32-20.71V136a8 8 0 018-8h16a8 8 0 018 8zM384 320h-32V136a8 8 0 018-8h16a8 8 0 018 8zm96 0h-32V136a8 8 0 018-8h16a8 8 0 018 8z"
      className="trailer_svg__fa-primary"
    />
  </svg>
);

SvgTrailer.displayName = "SvgTrailer";
SvgTrailer.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgTrailer;
