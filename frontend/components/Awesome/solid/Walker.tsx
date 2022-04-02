import * as React from "react";

const SvgWalker = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 448 512" {...props}>
    <path d="M416 392.88V96a96 96 0 00-96-96H190.66A95.62 95.62 0 0096 80L.24 487.77a16 16 0 0013 18.51l31.54 5.48a16 16 0 0018.5-13L127.81 224H352v168.88a64 64 0 1064 0zM352 160H142.83l16.26-69.25A31.91 31.91 0 01190.66 64H320a32 32 0 0132 32zm32 304a16 16 0 1116-16 16 16 0 01-16 16z" />
  </svg>
);

SvgWalker.displayName = "SvgWalker";
SvgWalker.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgWalker;
