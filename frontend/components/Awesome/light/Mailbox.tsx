import * as React from "react";

const SvgMailbox = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 576 512" {...props}>
    <path d="M432 64H144A144 144 0 000 208v208a32 32 0 0032 32h512a32 32 0 0032-32V208A144 144 0 00432 64zM256 416H32V208a112 112 0 01224 0zm288 0H288V208c0-45.52-21.54-85.61-54.51-112H432a112.12 112.12 0 01112 112zm-48-224H328a8 8 0 00-8 8v16a8 8 0 008 8h88v80a16 16 0 0016 16h64a16 16 0 0016-16v-96a16 16 0 00-16-16zm-16 96h-32v-64h32zm-296-96h-80a8 8 0 00-8 8v16a8 8 0 008 8h80a8 8 0 008-8v-16a8 8 0 00-8-8z" />
  </svg>
);

SvgMailbox.displayName = "SvgMailbox";
SvgMailbox.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgMailbox;
