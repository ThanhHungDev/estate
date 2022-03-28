import * as React from "react";

const SvgAlienMonster = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 576 512" {...props}>
    <path
      d="M560 128h-32a16 16 0 00-16 16v80h-32v-48a16 16 0 00-16-16h-48V96h48a16 16 0 0016-16V48a16 16 0 00-16-16h-32a16 16 0 00-16 16v16h-48a16 16 0 00-16 16v48H224V80a16 16 0 00-16-16h-48V48a16 16 0 00-16-16h-32a16 16 0 00-16 16v32a16 16 0 0016 16h48v64h-48a16 16 0 00-16 16v48H64v-80a16 16 0 00-16-16H16a16 16 0 00-16 16v128a16 16 0 0016 16h48v80a16 16 0 0016 16h48v80a16 16 0 0016 16h96a16 16 0 0016-16v-32a16 16 0 00-16-16h-48v-32h192v32h-48a16 16 0 00-16 16v32a16 16 0 0016 16h96a16 16 0 0016-16v-80h48a16 16 0 0016-16v-80h48a16 16 0 0016-16V144a16 16 0 00-16-16zM224 320h-64v-96h64zm192 0h-64v-96h64z"
      opacity={0.4}
    />
    <path
      d="M160 320h64v-96h-64zm192-96v96h64v-96z"
      className="alien-monster_svg__fa-primary"
    />
  </svg>
);

SvgAlienMonster.displayName = "SvgAlienMonster";
SvgAlienMonster.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgAlienMonster;
