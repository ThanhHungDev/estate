import * as React from "react";

const SvgSmog = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path
      d="M624 368H80a16 16 0 00-16 16v16a16 16 0 0016 16h544a16 16 0 0016-16v-16a16 16 0 00-16-16zm-480 96H16a16 16 0 00-16 16v16a16 16 0 0016 16h128a16 16 0 0016-16v-16a16 16 0 00-16-16zm416 0H224a16 16 0 00-16 16v16a16 16 0 0016 16h336a16 16 0 0016-16v-16a16 16 0 00-16-16z"
      opacity={0.4}
    />
    <path
      d="M0 144a143.73 143.73 0 01248-99.2A143.18 143.18 0 01352 0c54.8 0 102 31 126.3 76.1A110.53 110.53 0 01528 64a112 112 0 010 224h-60.1c-22.6 19.7-51.6 32-83.9 32s-61.4-12.3-83.9-32H144A144 144 0 010 144z"
      className="smog_svg__fa-primary"
    />
  </svg>
);

SvgSmog.displayName = "SvgSmog";
SvgSmog.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgSmog;
