import * as React from "react";

const SvgAlienMonster = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 576 512" {...props}>
    <path d="M560 128h-16a16 16 0 00-16 16v96h-48v-64a16 16 0 00-16-16h-32V96h32a16 16 0 0016-16V48a16 16 0 00-16-16h-16a16 16 0 00-16 16v16h-32a16 16 0 00-16 16v48H192V80a16 16 0 00-16-16h-32V48a16 16 0 00-16-16h-16a16 16 0 00-16 16v32a16 16 0 0016 16h32v64h-32a16 16 0 00-16 16v64H48v-96a16 16 0 00-16-16H16a16 16 0 00-16 16v128a16 16 0 0016 16h48v80a16 16 0 0016 16h48v80a16 16 0 0016 16h96a16 16 0 0016-16v-16a16 16 0 00-16-16h-64v-48h224v48h-64a16 16 0 00-16 16v16a16 16 0 0016 16h96a16 16 0 0016-16v-80h48a16 16 0 0016-16v-80h48a16 16 0 0016-16V144a16 16 0 00-16-16zm-96 208H112v-48h32v-80h48v-32h192v32h48v80h32zM240 224h-32a16 16 0 00-16 16v48a16 16 0 0016 16h32a16 16 0 0016-16v-48a16 16 0 00-16-16zm128 0h-32a16 16 0 00-16 16v48a16 16 0 0016 16h32a16 16 0 0016-16v-48a16 16 0 00-16-16z" />
  </svg>
);

SvgAlienMonster.displayName = "SvgAlienMonster";
SvgAlienMonster.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgAlienMonster;