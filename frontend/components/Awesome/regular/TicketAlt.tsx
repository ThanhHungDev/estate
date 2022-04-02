import * as React from "react";

const SvgTicketAlt = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 576 512" {...props}>
    <path d="M400 208v96H176v-96h224m24-48H152c-13.255 0-24 10.745-24 24v144c0 13.255 10.745 24 24 24h272c13.255 0 24-10.745 24-24V184c0-13.255-10.745-24-24-24zm144 56h8V112c0-26.51-21.49-48-48-48H48C21.49 64 0 85.49 0 112v104h8c22.091 0 40 17.909 40 40s-17.909 40-40 40H0v104c0 26.51 21.49 48 48 48h480c26.51 0 48-21.49 48-48V296h-8c-22.091 0-40-17.909-40-40s17.909-40 40-40zm-40-38.372c-28.47 14.59-48 44.243-48 78.372s19.53 63.782 48 78.372V400H48v-65.628c28.471-14.59 48-44.243 48-78.372s-19.529-63.782-48-78.372V112h480v65.628z" />
  </svg>
);

SvgTicketAlt.displayName = "SvgTicketAlt";
SvgTicketAlt.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgTicketAlt;
