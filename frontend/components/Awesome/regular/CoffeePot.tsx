import * as React from "react";

const SvgCoffeePot = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M428 175l52-143H88a88 88 0 00-88 88v88a16 16 0 0016 16h16a16 16 0 0016-16v-88a40 40 0 0140-40h25.46l34.73 95.53C96.92 215.22 64 276.16 64 344.62c0 51.47 18.62 84.77 49.64 117.71A57.18 57.18 0 00155.17 480h265.67a57.08 57.08 0 0041.45-17.6c31-32.95 49.69-66.24 49.71-117.72 0-67.82-32-129.61-84-169.68zm-16.53-95l-29.09 80H193.62l-29.09-80zM114.09 320c7.11-46.22 34.2-85.91 72.12-112h205.86c37.25 26.13 63 66.23 69.84 112z" />
  </svg>
);

SvgCoffeePot.displayName = "SvgCoffeePot";
SvgCoffeePot.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgCoffeePot;
