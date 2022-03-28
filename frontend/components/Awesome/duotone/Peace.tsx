import * as React from "react";

const SvgPeace = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 496 512" {...props}>
    <path
      d="M409.54 344.25a184.93 184.93 0 01-31.43 41.86q-4.2 4.18-8.61 8.07l-89.5-71.6v114.66a186.89 186.89 0 01-64 0V322.58l-89.5 71.6q-4.41-3.89-8.61-8.07a184.93 184.93 0 01-31.43-41.86L216 240.62V74.76a186.89 186.89 0 0164 0v165.86z"
      opacity={0.4}
    />
    <path
      d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm130.11 378.11a184 184 0 01-260.22 0 183.93 183.93 0 010-260.21c71.74-72 188.25-72.15 260.21-.41s72.16 188.25.41 260.22z"
      className="peace_svg__fa-primary"
    />
  </svg>
);

SvgPeace.displayName = "SvgPeace";
SvgPeace.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgPeace;
