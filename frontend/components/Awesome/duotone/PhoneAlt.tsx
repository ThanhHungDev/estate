import * as React from "react";

const SvgPhoneAlt = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path
      d="M191.18 154.51a23.9 23.9 0 006.91-28l-48-112a24.16 24.16 0 00-27.5-13.9L106 4.43l69.73 162.69zm153.6 181.62l162.81 69.77 3.8-16.49a24.3 24.3 0 00-14-27.61l-112-48a24 24 0 00-28 6.91zM0 48c0 256.5 207.9 464 464 464a24 24 0 0023.4-18.59l12.89-55.82-176.61-75.69-15.88 19.4a370.59 370.59 0 01-177.21-177.2L150 188.23 74.34 11.74 18.59 24.61A24 24 0 000 48z"
      opacity={0.4}
    />
    <path
      d="M74.34 11.74L150 188.23l25.79-21.11L106 4.43zm270.44 324.39l-21.1 25.77 176.6 75.69 7.31-31.69z"
      className="phone-alt_svg__fa-primary"
    />
  </svg>
);

SvgPhoneAlt.displayName = "SvgPhoneAlt";
SvgPhoneAlt.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgPhoneAlt;
