import * as React from "react";

const SvgSlidersHSquare = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 448 512" {...props}>
    <path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-6 400H54c-3.3 0-6-2.7-6-6V86c0-3.3 2.7-6 6-6h340c3.3 0 6 2.7 6 6v340c0 3.3-2.7 6-6 6zm-42-244v8c0 6.6-5.4 12-12 12H192v24c0 13.3-10.7 24-24 24h-16c-13.3 0-24-10.7-24-24v-24h-20c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h20v-24c0-13.3 10.7-24 24-24h16c13.3 0 24 10.7 24 24v24h148c6.6 0 12 5.4 12 12zm0 128v8c0 6.6-5.4 12-12 12h-20v24c0 13.3-10.7 24-24 24h-16c-13.3 0-24-10.7-24-24v-24H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h148v-24c0-13.3 10.7-24 24-24h16c13.3 0 24 10.7 24 24v24h20c6.6 0 12 5.4 12 12z" />
  </svg>
);

SvgSlidersHSquare.displayName = "SvgSlidersHSquare";
SvgSlidersHSquare.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgSlidersHSquare;
