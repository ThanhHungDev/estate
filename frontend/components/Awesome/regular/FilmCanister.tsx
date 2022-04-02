import * as React from "react";

const SvgFilmCanister = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 576 512" {...props}>
    <path d="M544 112H320V80h16a16 16 0 0016-16V48a16 16 0 00-16-16h-80V16a16 16 0 00-16-16H112a16 16 0 00-16 16v16H16A16 16 0 000 48v16a16 16 0 0016 16h16v384H16a16 16 0 00-16 16v16a16 16 0 0016 16h320a16 16 0 0016-16v-16a16 16 0 00-16-16h-16v-32h160a32 32 0 0032-32v-48a32 32 0 0132-32 32 32 0 0032-32V144a32 32 0 00-32-32zM80 464V80h192v384zm344-104a16 16 0 01-16 16h-16a16 16 0 01-16-16v-16a16 16 0 0116-16h16a16 16 0 0116 16zm0-160a16 16 0 01-16 16h-16a16 16 0 01-16-16v-16a16 16 0 0116-16h16a16 16 0 0116 16zm96 0a16 16 0 01-16 16h-16a16 16 0 01-16-16v-16a16 16 0 0116-16h16a16 16 0 0116 16z" />
  </svg>
);

SvgFilmCanister.displayName = "SvgFilmCanister";
SvgFilmCanister.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgFilmCanister;
