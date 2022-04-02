import * as React from "react";

const SvgVials = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path d="M72 48h24v288c0 44.1 35.9 80 80 80s80-35.9 80-80V48h24c4.4 0 8-3.6 8-8V8c0-4.4-3.6-8-8-8H72c-4.4 0-8 3.6-8 8v32c0 4.4 3.6 8 8 8zm72 0h64v112h-64V48zm0 160h64v128c0 42.3-64 42.3-64 0V208zm488 256H8c-4.4 0-8 3.6-8 8v32c0 4.4 3.6 8 8 8h624c4.4 0 8-3.6 8-8v-32c0-4.4-3.6-8-8-8zM360 48h24v288c0 44.1 35.9 80 80 80s80-35.9 80-80V48h24c4.4 0 8-3.6 8-8V8c0-4.4-3.6-8-8-8H360c-4.4 0-8 3.6-8 8v32c0 4.4 3.6 8 8 8zm72 0h64v112h-64V48zm0 160h64v128c0 42.3-64 42.3-64 0V208z" />
  </svg>
);

SvgVials.displayName = "SvgVials";
SvgVials.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgVials;
