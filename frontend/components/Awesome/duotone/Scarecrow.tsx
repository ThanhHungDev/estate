import * as React from "react";

const SvgScarecrow = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 448 512" {...props}>
    <path
      d="M216.84 414.2L192 401v95a16 16 0 0016 16h32a16 16 0 0016-16v-95l-24.87 13.2a15.08 15.08 0 01-14.29 0zM224 0a96 96 0 1096 96 96 96 0 00-96-96zm-32 96a16 16 0 1116-16 16 16 0 01-16 16zm64 16a16 16 0 1116-16 16 16 0 01-16 16z"
      opacity={0.4}
    />
    <path
      d="M445.75 186.39l-.08-.09-26.39-26.3 18.29-18.3a8 8 0 00-5.7-13.7H314.48a96 96 0 01-181 0H16a8 8 0 00-5.7 13.7L28.72 160 2.34 186.3a8 8 0 000 11.3L28.72 224l-18.3 18.3a8 8 0 005.7 13.7h106.09l-26 141.3a16 16 0 0022.9 16.9l32.71-24.2a16 16 0 0117.08-1.3l47.91 25.5a15.08 15.08 0 0014.29 0l47.9-25.5a16 16 0 0117.1 1.3l32.7 24.2a15.93 15.93 0 0022.89-16.9L325.88 256h106.06a8.05 8.05 0 005.69-13.7L419.28 224l26.29-26.3a8 8 0 00.18-11.31zM256 112a16 16 0 10-16-16 16 16 0 0016 16zm-64-16a16 16 0 10-16-16 16 16 0 0016 16z"
      className="scarecrow_svg__fa-primary"
    />
  </svg>
);

SvgScarecrow.displayName = "SvgScarecrow";
SvgScarecrow.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgScarecrow;
