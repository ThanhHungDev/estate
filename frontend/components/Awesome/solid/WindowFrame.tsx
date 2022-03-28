import * as React from "react";

const SvgWindowFrame = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M496 448h-16V32a32 32 0 00-32-32H64a32 32 0 00-32 32v416H16a16 16 0 00-16 16v32a16 16 0 0016 16h480a16 16 0 0016-16v-32a16 16 0 00-16-16zm-80-224H272V64h144zM96 64h144v160H96zm0 224h144v160H96zm176 160V288h144v160z" />
  </svg>
);

SvgWindowFrame.displayName = "SvgWindowFrame";
SvgWindowFrame.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgWindowFrame;
