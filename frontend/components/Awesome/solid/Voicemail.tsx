import * as React from "react";

const SvgVoicemail = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path d="M496 128a144 144 0 00-119.74 224H263.74A144 144 0 10144 416h352a144 144 0 000-288zM64 272a80 80 0 1180 80 80 80 0 01-80-80zm432 80a80 80 0 1180-80 80 80 0 01-80 80z" />
  </svg>
);

SvgVoicemail.displayName = "SvgVoicemail";
SvgVoicemail.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgVoicemail;
