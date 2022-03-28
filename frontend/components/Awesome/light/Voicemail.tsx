import * as React from "react";

const SvgVoicemail = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path d="M640 272a144 144 0 00-288 0c0 45.52 21.54 85.61 54.51 112h-173c33-26.39 54.51-66.48 54.51-112A144 144 0 000 272c0 74.05 56.1 134.33 128 142.39V416h384v-1.61c71.9-8.06 128-68.34 128-142.39zm-608 0a112 112 0 11112 112A112.12 112.12 0 0132 272zm464 112a112 112 0 11112-112 112.12 112.12 0 01-112 112z" />
  </svg>
);

SvgVoicemail.displayName = "SvgVoicemail";
SvgVoicemail.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgVoicemail;
