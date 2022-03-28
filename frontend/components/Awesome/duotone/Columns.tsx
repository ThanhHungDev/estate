import * as React from "react";

const SvgColumns = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M288 160v256h160V160zM64 416h160V160H64z" opacity={0.4} />
    <path
      d="M464 32H48A48 48 0 000 80v352a48 48 0 0048 48h416a48 48 0 0048-48V80a48 48 0 00-48-48zM224 416H64V160h160zm224 0H288V160h160z"
      className="columns_svg__fa-primary"
    />
  </svg>
);

SvgColumns.displayName = "SvgColumns";
SvgColumns.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgColumns;
