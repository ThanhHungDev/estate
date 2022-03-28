import * as React from "react";

const SvgHockeySticks = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path d="M0 368v128c0 8.8 7.2 16 16 16h48V352H16c-8.8 0-16 7.2-16 16zM484.6 30.3L427.4 1.7c-7.9-4-17.5-.7-21.5 7.2L238.8 343.2c-2.7 5.4-8.2 8.8-14.3 8.8H96v160h126.1c24.2 0 46.4-13.7 57.2-35.4L491.8 51.8c3.9-7.9.7-17.5-7.2-21.5zm-245.1 204L293.2 127 234.1 8.8c-4-7.9-13.6-11.1-21.5-7.2l-57.3 28.6c-7.9 4-11.1 13.6-7.2 21.5l91.4 182.6zM624 352h-48v160h48c8.8 0 16-7.2 16-16V368c0-8.8-7.2-16-16-16zm-223.5-10.3L346.8 449c12.6 25.2 25.4 63 71.1 63H544V352H415.6c-4.6 0-10.8-1.7-15.1-10.3z" />
  </svg>
);

SvgHockeySticks.displayName = "SvgHockeySticks";
SvgHockeySticks.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgHockeySticks;
