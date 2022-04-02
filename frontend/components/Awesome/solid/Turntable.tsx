import * as React from "react";

const SvgTurntable = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 576 512" {...props}>
    <path d="M224 224a32 32 0 1032 32 32 32 0 00-32-32zM512 32H64A64 64 0 000 96v320a64 64 0 0064 64h448a64 64 0 0064-64V96a64 64 0 00-64-64zM224 416a160 160 0 11160-160 160 160 0 01-160 160zm288-148.18a64 64 0 01-6.76 28.63l-18.93 37.86a16 16 0 017.16 21.46l-25.69 51.38a16 16 0 01-21.47 7.16L417.69 400a16 16 0 01-7.16-21.46l25.69-51.38a16 16 0 0121.47-7.16l18.93-37.87a32 32 0 003.38-14.32V104a8 8 0 018-8h16a8 8 0 018 8z" />
  </svg>
);

SvgTurntable.displayName = "SvgTurntable";
SvgTurntable.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgTurntable;
