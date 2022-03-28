import * as React from "react";

const SvgUserClock = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path
      d="M496 224a144 144 0 10144 144 143.91 143.91 0 00-144-144zm64 150.3a9.77 9.77 0 01-9.7 9.7h-60.6a9.77 9.77 0 01-9.7-9.7v-76.6a9.77 9.77 0 019.7-9.7h12.6a9.77 9.77 0 019.7 9.7V352h38.3a9.77 9.77 0 019.7 9.7z"
      opacity={0.4}
    />
    <path
      d="M224 256A128 128 0 1096 128a128 128 0 00128 128zm96 112a175.38 175.38 0 0118.2-77.5 133.25 133.25 0 00-24.6-2.5h-16.7a174.08 174.08 0 01-145.8 0h-16.7A134.43 134.43 0 000 422.4V464a48 48 0 0048 48h347.1c-45.3-31.9-75.1-84.5-75.1-144z"
      className="user-clock_svg__fa-primary"
    />
  </svg>
);

SvgUserClock.displayName = "SvgUserClock";
SvgUserClock.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgUserClock;