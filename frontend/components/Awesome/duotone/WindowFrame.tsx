import * as React from "react";

const SvgWindowFrame = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path
      d="M272 64v160h144V64zM96 224h144V64H96zm0 224h144V288H96zm176 0h144V288H272z"
      opacity={0.4}
    />
    <path
      d="M496 448h-16V32a32 32 0 00-32-32H64a32 32 0 00-32 32v416H16a16 16 0 00-16 16v32a16 16 0 0016 16h480a16 16 0 0016-16v-32a16 16 0 00-16-16zm-256 0H96V288h144zm0-224H96V64h144zm176 224H272V288h144zm0-224H272V64h144z"
      className="window-frame_svg__fa-primary"
    />
  </svg>
);

SvgWindowFrame.displayName = "SvgWindowFrame";
SvgWindowFrame.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgWindowFrame;
