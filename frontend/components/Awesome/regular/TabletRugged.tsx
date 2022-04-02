import * as React from "react";

const SvgTabletRugged = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 448 512" {...props}>
    <path d="M439.2 164.4c5.4-2.7 8.8-8.2 8.8-14.3V73.9c0-6.1-3.4-11.6-8.8-14.3L416 48c0-26.5-21.5-48-48-48H80C53.5 0 32 21.5 32 48L8.8 59.6C3.4 62.3 0 67.8 0 73.9v76.2c0 6.1 3.4 11.6 8.8 14.3L32 176v16L8.8 203.6c-5.4 2.7-8.8 8.2-8.8 14.3v76.2c0 6.1 3.4 11.6 8.8 14.3L32 320v16L8.8 347.6c-5.4 2.7-8.8 8.2-8.8 14.3v76.2c0 6.1 3.4 11.6 8.8 14.3L32 464c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48l23.2-11.6c5.4-2.7 8.8-8.2 8.8-14.3v-76.2c0-6.1-3.4-11.6-8.8-14.3L416 336v-16l23.2-11.6c5.4-2.7 8.8-8.2 8.8-14.3v-76.2c0-6.1-3.4-11.6-8.8-14.3L416 192v-16l23.2-11.6zM368 448c0 8.8-7.2 16-16 16H96c-8.8 0-16-7.2-16-16V64c0-8.8 7.2-16 16-16h256c8.8 0 16 7.2 16 16v384z" />
  </svg>
);

SvgTabletRugged.displayName = "SvgTabletRugged";
SvgTabletRugged.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgTabletRugged;
