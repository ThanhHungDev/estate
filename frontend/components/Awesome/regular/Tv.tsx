import * as React from "react";

const SvgTv = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path d="M592 0H48A48 48 0 000 48v320a48 48 0 0048 48h248v48H112a16 16 0 00-16 16v16a16 16 0 0016 16h416a16 16 0 0016-16v-16a16 16 0 00-16-16H344v-48h248a48 48 0 0048-48V48a48 48 0 00-48-48zm0 368H48V48h544z" />
  </svg>
);

SvgTv.displayName = "SvgTv";
SvgTv.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgTv;
