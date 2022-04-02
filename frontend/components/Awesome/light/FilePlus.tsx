import * as React from "react";

const SvgFilePlus = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 384 512" {...props}>
    <path d="M369.9 97.9L286 14A48 48 0 00252.1-.1H48A48.16 48.16 0 000 48v416a48 48 0 0048 48h288a48 48 0 0048-48V131.9a48.23 48.23 0 00-14.1-34zm-22.6 22.7a15.73 15.73 0 014.2 7.4H256V32.5a15.73 15.73 0 017.4 4.2zM336 480H48a16 16 0 01-16-16V48a16 16 0 0116-16h176v104a23.94 23.94 0 0024 24h104v304a16 16 0 01-16 16zm-48-180v8a12 12 0 01-12 12h-68v68a12 12 0 01-12 12h-8a12 12 0 01-12-12v-68h-68a12 12 0 01-12-12v-8a12 12 0 0112-12h68v-68a12 12 0 0112-12h8a12 12 0 0112 12v68h68a12 12 0 0112 12z" />
  </svg>
);

SvgFilePlus.displayName = "SvgFilePlus";
SvgFilePlus.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgFilePlus;
