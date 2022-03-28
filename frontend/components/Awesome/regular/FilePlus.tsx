import * as React from "react";

const SvgFilePlus = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 384 512" {...props}>
    <path d="M369.9 97.9L286 14A48 48 0 00252.1-.1H48A48.16 48.16 0 000 48v416a48 48 0 0048 48h288a48 48 0 0048-48V131.9a48.23 48.23 0 00-14.1-34zM256 51.9l76.1 76.1H256zM336 464H48V48h160v104a23.94 23.94 0 0024 24h104zM215 223.75a16 16 0 00-16-16h-16a16 16 0 00-16 16v56.5h-55.5a16 16 0 00-16 16v16a16 16 0 0016 16H167v56a16 16 0 0016 16h16a16 16 0 0016-16v-56h56.5a16 16 0 0016-16v-16a16 16 0 00-16-16H215z" />
  </svg>
);

SvgFilePlus.displayName = "SvgFilePlus";
SvgFilePlus.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgFilePlus;
