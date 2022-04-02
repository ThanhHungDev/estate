import * as React from "react";

const SvgBoxesAlt = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path d="M592 224H480V48c0-26.5-21.5-48-48-48H208c-26.5 0-48 21.5-48 48v176H48c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h544c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48zM208 48h80v72c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V48h80v176H208V48zm88 416H48V272h96v72c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-72h88v192zm296 0H344V272h88v72c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-72h96v192z" />
  </svg>
);

SvgBoxesAlt.displayName = "SvgBoxesAlt";
SvgBoxesAlt.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgBoxesAlt;
