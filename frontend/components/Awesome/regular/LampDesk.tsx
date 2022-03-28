import * as React from "react";

const SvgLampDesk = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M392.65 278.4a56 56 0 0077.75-77.76zM509.3 85.76A35.08 35.08 0 00476.76 64h-85l-35.88-35.88A95.68 95.68 0 00202.76 139.3L103 239a24 24 0 00-6.09 23.56L154.48 464H48C26.69 464 6.78 477.89.52 497.12-1.89 504.53 4.41 512 12.19 512h359.62c7.79 0 14.08-7.47 11.67-14.88C377.22 477.89 357.32 464 336 464H204.38L147 263l86.13-86.13L256 199.76v85a35.23 35.23 0 0060.14 24.9l185.49-185.51a35.06 35.06 0 007.67-38.39zM304 253.92v-74l-49.93-49.94a48 48 0 0167.87-67.88l49.94 49.9h74z" />
  </svg>
);

SvgLampDesk.displayName = "SvgLampDesk";
SvgLampDesk.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgLampDesk;
