import * as React from "react";

const SvgBath = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M32 384a95.4 95.4 0 0032 71.09V496a16 16 0 0016 16h32a16 16 0 0016-16v-16h256v16a16 16 0 0016 16h32a16 16 0 0016-16v-40.91A95.4 95.4 0 00480 384v-48H32zm464-128H80V69.25a21.26 21.26 0 0136.28-15l19.27 19.26c-13.13 29.88-7.61 59.11 8.62 79.73l-.17.17a16 16 0 000 22.59l11.31 11.31a16 16 0 0022.63 0L283.31 81.94a16 16 0 000-22.63L272 48a16 16 0 00-22.62 0l-.17.17c-20.62-16.23-49.83-21.75-79.73-8.62l-19.26-19.27A69.25 69.25 0 0032 69.25V256H16a16 16 0 00-16 16v16a16 16 0 0016 16h480a16 16 0 0016-16v-16a16 16 0 00-16-16z" />
  </svg>
);

SvgBath.displayName = "SvgBath";
SvgBath.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgBath;
