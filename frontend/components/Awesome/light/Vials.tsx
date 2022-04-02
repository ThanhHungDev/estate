import * as React from "react";

const SvgVials = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path d="M72 32h24v304c0 44.1 35.9 80 80 80s80-35.9 80-80V32h24c4.4 0 8-3.6 8-8V8c0-4.4-3.6-8-8-8H72c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8zm56 0h96v128h-96V32zm0 160h96v144c0 63.5-96 63.5-96 0V192zM360 32h24v304c0 44.1 35.9 80 80 80s80-35.9 80-80V32h24c4.4 0 8-3.6 8-8V8c0-4.4-3.6-8-8-8H360c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8zm56 0h96v128h-96V32zm0 160h96v144c0 63.5-96 63.5-96 0V192zm216 288H8c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h624c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8z" />
  </svg>
);

SvgVials.displayName = "SvgVials";
SvgVials.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgVials;
