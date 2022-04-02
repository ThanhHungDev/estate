import * as React from "react";

const SvgVoicemail = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path d="M496 128a144 144 0 00-144 144c0 37.05 14.38 70.48 37.37 96H250.63c23-25.52 37.37-58.95 37.37-96a144 144 0 10-144 144h352a144 144 0 000-288zM48 272a96 96 0 1196 96 96.11 96.11 0 01-96-96zm448 96a96 96 0 1196-96 96.11 96.11 0 01-96 96z" />
  </svg>
);

SvgVoicemail.displayName = "SvgVoicemail";
SvgVoicemail.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgVoicemail;
