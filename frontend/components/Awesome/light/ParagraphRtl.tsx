import * as React from "react";

const SvgParagraphRtl = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 384 512" {...props}>
    <path d="M176 224h48v88a8 8 0 008 8h16a8 8 0 008-8V32h32v280a8 8 0 008 8h16a8 8 0 008-8V32h24a8 8 0 008-8V8a8 8 0 00-8-8H179.37C116.72 0 63.68 50 64 112.66 64.33 176.33 112.22 224 176 224zM119.12 57a85.55 85.55 0 0160.25-25H224v160h-48c-46.12 0-79.76-33.44-80-79.51A77.8 77.8 0 01119.12 57zM376 400H112v-64a16 16 0 00-16.12-16 15.66 15.66 0 00-11.19 4.7l-80 80a16 16 0 000 22.63l80 80A16.16 16.16 0 0096.17 512c8 0 15.83-5.69 15.83-16v-64h264a8 8 0 008-8v-16a8 8 0 00-8-8zm-296 0v57.37L38.63 416 80 374.64z" />
  </svg>
);

SvgParagraphRtl.displayName = "SvgParagraphRtl";
SvgParagraphRtl.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgParagraphRtl;
