import * as React from "react";

const SvgUserLock = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path d="M48 480a16 16 0 01-16-16v-41.6A102.47 102.47 0 01134.4 320c19.6 0 39.1 16 89.6 16s70-16 89.6-16c2.7 0 5.3.6 7.9.8a79.45 79.45 0 0113.1-30.7 132.34 132.34 0 00-21.1-2.1c-28.7 0-42.5 16-89.6 16s-60.8-16-89.6-16C60.2 288 0 348.2 0 422.4V464a48 48 0 0048 48h288.4a78.34 78.34 0 01-14.8-32zm176-224A128 128 0 1096 128a128 128 0 00128 128zm0-224a96 96 0 11-96 96 96.15 96.15 0 0196-96zm272 336a32 32 0 1032 32 32 32 0 00-32-32zm96-80h-16v-48a80 80 0 00-160 0v48h-16a48 48 0 00-48 48v128a48 48 0 0048 48h192a48 48 0 0048-48V336a48 48 0 00-48-48zm-144-48a48 48 0 0196 0v48h-96zm160 224a16 16 0 01-16 16H400a16 16 0 01-16-16V336a16 16 0 0116-16h192a16 16 0 0116 16z" />
  </svg>
);

SvgUserLock.displayName = "SvgUserLock";
SvgUserLock.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgUserLock;
