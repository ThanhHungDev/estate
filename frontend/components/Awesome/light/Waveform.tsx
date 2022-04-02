import * as React from "react";

const SvgWaveform = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path d="M232 96h-16a8 8 0 00-8 8v304a8 8 0 008 8h16a8 8 0 008-8V104a8 8 0 00-8-8zm-96 96h-16a8 8 0 00-8 8v112a8 8 0 008 8h16a8 8 0 008-8V200a8 8 0 00-8-8zm-96 32H24a8 8 0 00-8 8v48a8 8 0 008 8h16a8 8 0 008-8v-48a8 8 0 00-8-8zm384-96h-16a8 8 0 00-8 8v240a8 8 0 008 8h16a8 8 0 008-8V136a8 8 0 00-8-8zm192 96h-16a8 8 0 00-8 8v48a8 8 0 008 8h16a8 8 0 008-8v-48a8 8 0 00-8-8zM520 64h-16a8 8 0 00-8 8v368a8 8 0 008 8h16a8 8 0 008-8V72a8 8 0 00-8-8zM328 0h-16a8 8 0 00-8 8v496a8 8 0 008 8h16a8 8 0 008-8V8a8 8 0 00-8-8z" />
  </svg>
);

SvgWaveform.displayName = "SvgWaveform";
SvgWaveform.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgWaveform;
