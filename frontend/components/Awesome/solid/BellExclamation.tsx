import * as React from "react";

const SvgBellExclamation = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 448 512" {...props}>
    <path d="M224 512a64 64 0 0064-64H160a64 64 0 0064 64zm215.39-149.71c-19.32-20.76-55.47-52-55.47-154.29 0-77.7-54.48-139.9-127.94-155.16V32a32 32 0 10-64 0v20.84C118.56 68.1 64.08 130.3 64.08 208c0 102.3-36.15 133.53-55.47 154.29A31.24 31.24 0 000 384c.11 16.4 13 32 32.1 32h383.8c19.12 0 32-15.6 32.1-32a31.23 31.23 0 00-8.61-21.71zM224 352a32 32 0 1132-32 32 32 0 01-32 32zm25.4-110.4a16 16 0 01-15.9 14.4h-19a16 16 0 01-15.9-14.4l-12.8-96a16.06 16.06 0 0115.9-17.6h44.6a16 16 0 0115.9 17.6z" />
  </svg>
);

SvgBellExclamation.displayName = "SvgBellExclamation";
SvgBellExclamation.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgBellExclamation;
