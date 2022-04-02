import * as React from "react";

const SvgAlignSlash = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path d="M536 304h-77.57l40.64 32H536a8 8 0 008-8v-16a8 8 0 00-8-8zm8-120a8 8 0 00-8-8H295.89l40.63 32H536a8 8 0 008-8zm-8-104a8 8 0 008-8V56a8 8 0 00-8-8H133.34L174 80zM96 328a8 8 0 008 8h240l-40.64-32H104a8 8 0 00-8 8zm541 157.32L23 1.8A7.86 7.86 0 0011.79 3l-10 12.5A7.92 7.92 0 003 26.71l614 483.52a7.91 7.91 0 0011.18-1.23l10-12.5a7.83 7.83 0 00-1.18-11.18zM104 432a8 8 0 00-8 8v16a8 8 0 008 8h402.55l-40.64-32zm0-224h77.45l-40.64-32H104a8 8 0 00-8 8v16a8 8 0 008 8z" />
  </svg>
);

SvgAlignSlash.displayName = "SvgAlignSlash";
SvgAlignSlash.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgAlignSlash;
