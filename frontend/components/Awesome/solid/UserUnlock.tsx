import * as React from "react";

const SvgUserUnlock = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path d="M224 256A128 128 0 1096 128a128 128 0 00128 128zm96 64a63.07 63.07 0 018.1-30.5c-4.8-.5-9.5-1.5-14.5-1.5h-16.7a174.1 174.1 0 01-145.8 0h-16.7A134.43 134.43 0 000 422.4V464a48 48 0 0048 48h280.9a63.58 63.58 0 01-8.9-32zm288-32H464v-79.33c0-17.44 13.67-32.18 31.1-32.66A32 32 0 01528 208a16 16 0 0016 16h17a15 15 0 0015-15c0-43.28-34-79.51-77.26-80.95A80 80 0 00416 208v80h-32a32 32 0 00-32 32v160a32 32 0 0032 32h224a32 32 0 0032-32V320a32 32 0 00-32-32zM496 432a32 32 0 1132-32 32 32 0 01-32 32z" />
  </svg>
);

SvgUserUnlock.displayName = "SvgUserUnlock";
SvgUserUnlock.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgUserUnlock;
