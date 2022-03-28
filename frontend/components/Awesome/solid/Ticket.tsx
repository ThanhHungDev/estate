import * as React from "react";

const SvgTicket = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 576 512" {...props}>
    <path d="M576 208v-96c0-26.51-21.49-48-48-48H48C21.49 64 0 85.49 0 112v96c26.51 0 48 21.49 48 48s-21.49 48-48 48v96c0 26.51 21.49 48 48 48h480c26.51 0 48-21.49 48-48v-96c-26.51 0-48-21.49-48-48s21.49-48 48-48z" />
  </svg>
);

SvgTicket.displayName = "SvgTicket";
SvgTicket.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgTicket;
