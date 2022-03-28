import * as React from "react";

const SvgTrashUndoAlt = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 448 512" {...props}>
    <path d="M432 80h-82.41l-34-56.7C307.88 10.44 289.44 0 274.44 0H173.59c-15 0-33.43 10.44-41.15 23.3L98.41 80H16A16 16 0 000 96v16a16 16 0 0016 16h16v336a48 48 0 0048 48h288a48 48 0 0048-48V128h16a16 16 0 0016-16V96a16 16 0 00-16-16zM171.84 50.91A6.66 6.66 0 01177 48h94a6.67 6.67 0 015.16 2.91L293.62 80H154.38zM368 464H80V128h288zM203.76 348.71A12 12 0 00224 340v-35.16c48.68 5.1 65.21 26 48.45 84.78-2.15 7.53 6.15 13.37 12 8.72C303.11 383.45 320 355 320 326.19c0-62.88-39.64-82-96-86.17V204a12 12 0 00-20.24-8.73l-72 68a12 12 0 000 17.44z" />
  </svg>
);

SvgTrashUndoAlt.displayName = "SvgTrashUndoAlt";
SvgTrashUndoAlt.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgTrashUndoAlt;
