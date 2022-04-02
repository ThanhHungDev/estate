import * as React from "react";

const SvgSink = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path
      d="M32 416a96 96 0 0096 96h256a96 96 0 0096-96v-32H32zm464-128H16a16 16 0 00-16 16v32a16 16 0 0016 16h480a16 16 0 0016-16v-32a16 16 0 00-16-16z"
      opacity={0.4}
    />
    <path
      d="M352 112a16 16 0 0016 16h32a16 16 0 0016-16V96A96.16 96.16 0 00300.87 1.86C255.29 10.71 224 53.36 224 99.79V288h64V96a32 32 0 0164 0zm112 96h-80a32 32 0 00-32 32v48h48v-32h64a16 16 0 0016-16v-16a16 16 0 00-16-16zm-336 0H48a16 16 0 00-16 16v16a16 16 0 0016 16h64v32h48v-48a32 32 0 00-32-32z"
      className="sink_svg__fa-primary"
    />
  </svg>
);

SvgSink.displayName = "SvgSink";
SvgSink.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgSink;
