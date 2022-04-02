import * as React from "react";

const SvgHouse = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 576 512" {...props}>
    <path d="M570.63 240L512 187.36V56a24 24 0 00-24-24h-96a24 24 0 00-24 24v2.08l-53.44-48a40 40 0 00-53.12 0L5.37 240A16 16 0 004 262.58l10.62 11.95a16 16 0 0022.59 1.34l26.75-24V472a40 40 0 0040 40H472a40 40 0 0040-40V251.85l26.75 24a16 16 0 0022.59-1.34L572 262.58a16 16 0 00-1.37-22.58zM464 464H112V208.75l176-158 176 158zm0-319.74l-48-43.09V80h48zM224 208v96a16 16 0 0016 16h96a16 16 0 0016-16v-96a16 16 0 00-16-16h-96a16 16 0 00-16 16z" />
  </svg>
);

SvgHouse.displayName = "SvgHouse";
SvgHouse.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgHouse;
