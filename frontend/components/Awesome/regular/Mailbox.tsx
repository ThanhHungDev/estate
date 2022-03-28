import * as React from "react";

const SvgMailbox = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 576 512" {...props}>
    <path d="M432 64H144A144 144 0 000 208v208a32 32 0 0032 32h512a32 32 0 0032-32V208A144 144 0 00432 64zM240 400H48V208a96 96 0 01192 0zm288 0H288V208c0-37.05-14.38-70.48-37.37-96H432a96.1 96.1 0 0196 96zm-64-208H344a8 8 0 00-8 8v32a8 8 0 008 8h72v32a16 16 0 0016 16h32a16 16 0 0016-16v-64a16 16 0 00-16-16zm-280 0h-80a8 8 0 00-8 8v48a8 8 0 008 8h80a8 8 0 008-8v-48a8 8 0 00-8-8z" />
  </svg>
);

SvgMailbox.displayName = "SvgMailbox";
SvgMailbox.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgMailbox;
