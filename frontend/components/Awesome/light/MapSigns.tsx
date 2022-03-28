import * as React from "react";

const SvgMapSigns = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M441.37 192c8.49 0 16.62-4.21 22.63-11.72l43.31-54.14c6.25-7.81 6.25-20.47 0-28.29L464 43.71C458 36.21 449.86 32 441.37 32H272V8c0-4.42-3.58-8-8-8h-16c-4.42 0-8 3.58-8 8v24H56c-13.25 0-24 13.43-24 30v100c0 16.57 10.75 30 24 30h184v32H70.63C62.14 224 54 228.21 48 235.71L4.69 289.86c-6.25 7.81-6.25 20.47 0 28.29L48 372.28c6 7.5 14.14 11.72 22.63 11.72H240v120c0 4.42 3.58 8 8 8h16c4.42 0 8-3.58 8-8V384h184c13.25 0 24-13.43 24-30V254c0-16.57-10.75-30-24-30H272v-32h169.37zm6.38 160h-375l-38.4-48 38.45-48h375.19l-.24 96zM64.25 64h375l38.4 48-38.45 48H64.01l.24-96z" />
  </svg>
);

SvgMapSigns.displayName = "SvgMapSigns";
SvgMapSigns.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgMapSigns;