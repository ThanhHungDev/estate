import * as React from "react";

const SvgEclipseAlt = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path
      d="M502.42 240.5l-94.7-47.3 33.5-100.4c4.5-13.6-8.4-26.5-21.9-21.9l-100.4 33.5-47.41-94.8a17.31 17.31 0 00-31 0l-47.3 94.7L92.7 70.8c-13.6-4.5-26.5 8.4-21.9 21.9l33.51 100.4L9.6 240.5a17.31 17.31 0 000 31l94.71 47.3L70.8 419.3c-4.5 13.6 8.4 26.5 21.9 21.9l100.41-33.5 47.3 94.7a17.31 17.31 0 0031 0l47.31-94.7 100.4 33.5c13.6 4.5 26.5-8.4 21.9-21.9l-33.5-100.4 94.7-47.3a17.33 17.33 0 00.2-31.1zm-155.9 106c-49.91 49.9-131.11 49.9-181 0a128.13 128.13 0 010-181c49.9-49.9 131.1-49.9 181 0a128.13 128.13 0 010 181z"
      opacity={0.4}
    />
    <path
      d="M330.4 316.5A96 96 0 11255.9 160a93.4 93.4 0 0117.5 1.6 4.49 4.49 0 011.4 8.3 75.21 75.21 0 00-38 65.4c0 47.1 42.8 82.8 89.3 73.9a4.5 4.5 0 014.3 7.3z"
      className="eclipse-alt_svg__fa-primary"
    />
  </svg>
);

SvgEclipseAlt.displayName = "SvgEclipseAlt";
SvgEclipseAlt.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgEclipseAlt;
