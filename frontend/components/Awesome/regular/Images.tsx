import * as React from "react";

const SvgImages = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 576 512" {...props}>
    <path d="M480 416v16c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48V176c0-26.51 21.49-48 48-48h16v48H54a6 6 0 00-6 6v244a6 6 0 006 6h372a6 6 0 006-6v-10h48zm42-336H150a6 6 0 00-6 6v244a6 6 0 006 6h372a6 6 0 006-6V86a6 6 0 00-6-6zm6-48c26.51 0 48 21.49 48 48v256c0 26.51-21.49 48-48 48H144c-26.51 0-48-21.49-48-48V80c0-26.51 21.49-48 48-48h384zM264 144c0 22.091-17.909 40-40 40s-40-17.909-40-40 17.909-40 40-40 40 17.909 40 40zm-72 96l39.515-39.515c4.686-4.686 12.284-4.686 16.971 0L288 240l103.515-103.515c4.686-4.686 12.284-4.686 16.971 0L480 208v80H192v-48z" />
  </svg>
);

SvgImages.displayName = "SvgImages";
SvgImages.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgImages;
