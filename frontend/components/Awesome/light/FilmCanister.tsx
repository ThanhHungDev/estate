import * as React from "react";

const SvgFilmCanister = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 576 512" {...props}>
    <path d="M544 96H320V64h24a8 8 0 008-8V40a8 8 0 00-8-8h-88V16a16 16 0 00-16-16H112a16 16 0 00-16 16v16H8a8 8 0 00-8 8v16a8 8 0 008 8h24v416H8a8 8 0 00-8 8v16a8 8 0 008 8h336a8 8 0 008-8v-16a8 8 0 00-8-8h-24v-32h160a32 32 0 0032-32v-64a32 32 0 0132-32 32 32 0 0032-32V128a32 32 0 00-32-32zM288 480H64V64h224zm256-192a64.07 64.07 0 00-64 64v64H320V128h224zm-64-80h16a16 16 0 0016-16v-16a16 16 0 00-16-16h-16a16 16 0 00-16 16v16a16 16 0 0016 16zM368 384h16a16 16 0 0016-16v-16a16 16 0 00-16-16h-16a16 16 0 00-16 16v16a16 16 0 0016 16zm0-176h16a16 16 0 0016-16v-16a16 16 0 00-16-16h-16a16 16 0 00-16 16v16a16 16 0 0016 16z" />
  </svg>
);

SvgFilmCanister.displayName = "SvgFilmCanister";
SvgFilmCanister.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgFilmCanister;
