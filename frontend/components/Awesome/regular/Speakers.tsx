import * as React from "react";

const SvgSpeakers = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path d="M448 176a48 48 0 10-48-48 48 48 0 0048 48zm0 256a112 112 0 10-112-112 112 112 0 00112 112zm0-176a64 64 0 11-64 64 64 64 0 0164-64zM592 0H304a48 48 0 00-48 48v416a48 48 0 0048 48h288a48 48 0 0048-48V48a48 48 0 00-48-48zm0 464H304V48h288zM224 92.46a48 48 0 100 71.08zM192 256a63.33 63.33 0 0132 8.88V213.2c-10.2-3.06-20.8-5.2-32-5.2a112 112 0 000 224c11.2 0 21.8-2.14 32-5.2v-51.68a63.33 63.33 0 01-32 8.88 64 64 0 010-128zM240.41 0H48A48 48 0 000 48v416a48 48 0 0048 48h192.41A79.24 79.24 0 01224 464H48V48h176a79.24 79.24 0 0116.41-48z" />
  </svg>
);

SvgSpeakers.displayName = "SvgSpeakers";
SvgSpeakers.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgSpeakers;
