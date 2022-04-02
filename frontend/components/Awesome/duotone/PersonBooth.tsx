import * as React from "react";

const SvgPersonBooth = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 576 512" {...props}>
    <path
      d="M192 32v160h64V0h-32a32 32 0 00-32 32zm0 464a16 16 0 0016 16h32a16 16 0 0016-16V320h-64zM64 32a48 48 0 1048 48 48 48 0 00-48-48zM544 0h-32v496a16 16 0 0016 16h32a16 16 0 0016-16V32a32 32 0 00-32-32z"
      opacity={0.4}
    />
    <path
      d="M288 0v32l31.5 223.1-30.9 154.6c-4.3 21.6 13 38.3 31.4 38.3 15.2 0 28-9.1 32.3-30.4A31.87 31.87 0 00416 416a32 32 0 0064 0V0zm-64 224h-50.9l-45.2-45.3A63.55 63.55 0 0082.7 160H64a64 64 0 00-64 64.1L.2 320 0 480a32 32 0 1063.9 0l.1-100.7c.9.5 1.6 1.3 2.5 1.7l29.1 43v56a32 32 0 0064 0v-56.5a64.27 64.27 0 00-6.7-28.6l-41.2-61.3V253l20.9 20.9a47.58 47.58 0 0033.9 14.1H224a32 32 0 000-64z"
      className="person-booth_svg__fa-primary"
    />
  </svg>
);

SvgPersonBooth.displayName = "SvgPersonBooth";
SvgPersonBooth.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgPersonBooth;
