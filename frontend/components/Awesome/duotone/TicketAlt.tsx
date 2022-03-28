import * as React from "react";

const SvgTicketAlt = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 576 512" {...props}>
    <path
      d="M576 208v-96a48 48 0 00-48-48H48a48 48 0 00-48 48v96a48 48 0 010 96v96a48 48 0 0048 48h480a48 48 0 0048-48v-96a48 48 0 010-96zm-96 176H96V128h384z"
      opacity={0.4}
    />
    <path d="M480 128v256H96V128z" className="ticket-alt_svg__fa-primary" />
  </svg>
);

SvgTicketAlt.displayName = "SvgTicketAlt";
SvgTicketAlt.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgTicketAlt;
