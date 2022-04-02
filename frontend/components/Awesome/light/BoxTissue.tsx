import * as React from "react";

const SvgBoxTissue = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M464 224h-58.67L448 96H338.6A70.2 70.2 0 01272 48a70.19 70.19 0 00-66.6-48H64l49.78 224H48a48 48 0 00-48 48v192a48 48 0 0048 48h416a48 48 0 0048-48V272a48 48 0 00-48-48zM103.89 32H205.4a38.15 38.15 0 0136.24 26.12 102.07 102.07 0 0097 69.88h65l-53.37 160H160.78zM480 464a16 16 0 01-16 16H48a16 16 0 01-16-16v-48h448zm0-80H32V272a16 16 0 0116-16h72.89l7.11 32h-16a16 16 0 000 32h288a16 16 0 000-32h-16l10.67-32H464a16 16 0 0116 16z" />
  </svg>
);

SvgBoxTissue.displayName = "SvgBoxTissue";
SvgBoxTissue.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgBoxTissue;
