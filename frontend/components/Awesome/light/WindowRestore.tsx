import * as React from "react";

const SvgWindowRestore = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M464 0H144c-26.5 0-48 21.5-48 48v48H48c-26.5 0-48 21.5-48 48v320c0 26.5 21.5 48 48 48h320c26.5 0 48-21.5 48-48v-48h48c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zM32 144c0-8.8 7.2-16 16-16h320c8.8 0 16 7.2 16 16v80H32v-80zm352 320c0 8.8-7.2 16-16 16H48c-8.8 0-16-7.2-16-16V256h352v208zm96-96c0 8.8-7.2 16-16 16h-48V144c0-26.5-21.5-48-48-48H128V48c0-8.8 7.2-16 16-16h320c8.8 0 16 7.2 16 16v320z" />
  </svg>
);

SvgWindowRestore.displayName = "SvgWindowRestore";
SvgWindowRestore.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgWindowRestore;
