import * as React from "react";

const SvgWaveform = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path d="M140 192h-24a16 16 0 00-16 16v96a16 16 0 0016 16h24a16 16 0 0016-16v-96a16 16 0 00-16-16zm-96 32H20a16 16 0 00-16 16v32a16 16 0 0016 16h24a16 16 0 0016-16v-32a16 16 0 00-16-16zM236 96h-24a16 16 0 00-16 16v288a16 16 0 0016 16h24a16 16 0 0016-16V112a16 16 0 00-16-16zm384 128h-24a16 16 0 00-16 16v32a16 16 0 0016 16h24a16 16 0 0016-16v-32a16 16 0 00-16-16zM524 64h-24a16 16 0 00-16 16v352a16 16 0 0016 16h24a16 16 0 0016-16V80a16 16 0 00-16-16zm-96 64h-24a16 16 0 00-16 16v224a16 16 0 0016 16h24a16 16 0 0016-16V144a16 16 0 00-16-16zM332 0h-24a16 16 0 00-16 16v480a16 16 0 0016 16h24a16 16 0 0016-16V16a16 16 0 00-16-16z" />
  </svg>
);

SvgWaveform.displayName = "SvgWaveform";
SvgWaveform.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgWaveform;
