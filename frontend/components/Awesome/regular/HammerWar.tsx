import * as React from "react";

const SvgHammerWar = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 384 512" {...props}>
    <path d="M352.07 32c-3.83 0 5.08-1.29-136.07 22.23V12c0-6.63-5.37-12-12-12h-24c-6.63 0-12 5.37-12 12v42.23C26.22 30.6 35.77 32 31.93 32 14.64 32 0 46.05 0 64.01v191.98C0 273.95 14.64 288 31.94 288c3.86 0-5.08 1.29 136.06-22.23V500c0 6.63 5.37 12 12 12h24c6.63 0 12-5.37 12-12V265.77C357.77 289.4 348.23 288 352.06 288c17.3 0 31.94-14.05 31.94-32.01V64.01C384 46.05 369.36 32 352.07 32zM336 237.11l-144-24-144 24V82.89l144 24 144-24v154.22z" />
  </svg>
);

SvgHammerWar.displayName = "SvgHammerWar";
SvgHammerWar.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgHammerWar;
