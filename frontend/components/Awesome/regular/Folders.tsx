import * as React from "react";

const SvgFolders = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path d="M592 64H400L345.37 9.37c-6-6-14.14-9.37-22.63-9.37H176c-26.51 0-48 21.49-48 48v80H48c-26.51 0-48 21.49-48 48v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48v-80h80c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zM464 464H48V176h80v160c0 26.51 21.49 48 48 48h288v80zm128-128H176V48h140.12l54.63 54.63c6 6 14.14 9.37 22.63 9.37H592v224z" />
  </svg>
);

SvgFolders.displayName = "SvgFolders";
SvgFolders.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgFolders;
