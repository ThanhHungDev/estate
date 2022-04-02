import * as React from "react";

const SvgArrowAltSquareDown = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 448 512" {...props}>
    <path d="M204 128h40c6.6 0 12 5.4 12 12v116h67c10.7 0 16 12.9 8.5 20.5l-99 99c-4.7 4.7-12.3 4.7-17 0l-99-99c-7.6-7.6-2.2-20.5 8.5-20.5h67V140c0-6.6 5.4-12 12-12zm244-48v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h352c26.5 0 48 21.5 48 48zm-48 346V86c0-3.3-2.7-6-6-6H54c-3.3 0-6 2.7-6 6v340c0 3.3 2.7 6 6 6h340c3.3 0 6-2.7 6-6z" />
  </svg>
);

SvgArrowAltSquareDown.displayName = "SvgArrowAltSquareDown";
SvgArrowAltSquareDown.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgArrowAltSquareDown;
