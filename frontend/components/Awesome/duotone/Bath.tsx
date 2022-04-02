import * as React from "react";

const SvgBath = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path
      d="M80 256H32V69.25a69.25 69.25 0 01118.22-49l19.26 19.27c29.9-13.13 59.11-7.61 79.73 8.62l.17-.17A16 16 0 01272 48l11.31 11.31a16 16 0 010 22.63L177.94 187.31a16 16 0 01-22.63 0L144 176a16 16 0 010-22.62l.17-.17c-16.23-20.62-21.75-49.85-8.62-79.73l-19.27-19.26A21.26 21.26 0 0080 69.25z"
      opacity={0.4}
    />
    <path
      d="M32 384a95.4 95.4 0 0032 71.09V496a16 16 0 0016 16h32a16 16 0 0016-16v-16h256v16a16 16 0 0016 16h32a16 16 0 0016-16v-40.91A95.4 95.4 0 00480 384v-48H32zm464-128H16a16 16 0 00-16 16v16a16 16 0 0016 16h480a16 16 0 0016-16v-16a16 16 0 00-16-16z"
      className="bath_svg__fa-primary"
    />
  </svg>
);

SvgBath.displayName = "SvgBath";
SvgBath.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgBath;
