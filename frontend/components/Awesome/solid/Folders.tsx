import * as React from "react";

const SvgFolders = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path d="M96 336V128H48c-26.51 0-48 21.49-48 48v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48v-48H176c-44.11 0-80-35.89-80-80zM592 64H400L336 0H176c-26.51 0-48 21.49-48 48v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48z" />
  </svg>
);

SvgFolders.displayName = "SvgFolders";
SvgFolders.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgFolders;
