import * as React from "react";

const SvgGameConsoleHandheld = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 384 512" {...props}>
    <path d="M232 336a24 24 0 1024 24 24 24 0 00-24-24zm40-24a24 24 0 1024-24 24 24 0 00-24 24zM352 0H32A32 32 0 000 32v448a32 32 0 0032 32h256a96 96 0 0096-96V32a32 32 0 00-32-32zm0 416a64.07 64.07 0 01-64 64H32V32h320zM112 224h144a32 32 0 0032-32V80a16 16 0 00-16-16H112a16 16 0 00-16 16v128a16 16 0 0016 16zm16-128h128v96H128zM72 352h24v24a8 8 0 008 8h16a8 8 0 008-8v-24h24a8 8 0 008-8v-16a8 8 0 00-8-8h-24v-24a8 8 0 00-8-8h-16a8 8 0 00-8 8v24H72a8 8 0 00-8 8v16a8 8 0 008 8z" />
  </svg>
);

SvgGameConsoleHandheld.displayName = "SvgGameConsoleHandheld";
SvgGameConsoleHandheld.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgGameConsoleHandheld;
