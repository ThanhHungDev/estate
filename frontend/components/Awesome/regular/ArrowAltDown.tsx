import * as React from "react";

const SvgArrowAltDown = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 448 512" {...props}>
    <path d="M400 208h-73.8V80c0-26.5-21.5-48-48-48H169.8c-26.5 0-48 21.5-48 48v128H48.1c-42.6 0-64.2 51.7-33.9 81.9l175.9 176c18.7 18.7 49.1 18.7 67.9 0l176-176c30-30.1 8.7-81.9-34-81.9zM224 432L48 256h121.8V80h108.3v176H400L224 432z" />
  </svg>
);

SvgArrowAltDown.displayName = "SvgArrowAltDown";
SvgArrowAltDown.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgArrowAltDown;
