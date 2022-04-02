import * as React from "react";

const SvgSoap = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M384 64a32 32 0 10-32-32 32 32 0 0032 32zM208 96a48 48 0 10-48-48 48 48 0 0048 48zm208 96h-17.61a80 80 0 10-156.78 0H96a96 96 0 00-96 96v128a96 96 0 0096 96h320a96 96 0 0096-96V288a96 96 0 00-96-96zm-96-48a32 32 0 11-32 32 32 32 0 0132-32zm144 272a48.05 48.05 0 01-48 48H96a48.05 48.05 0 01-48-48V288a48.05 48.05 0 0148-48h176.94c13.27 9.77 29.32 16 47.06 16s33.79-6.23 47.06-16H416a48.05 48.05 0 0148 48zM352 288H160a64 64 0 000 128h192a64 64 0 000-128zm0 96H160a32 32 0 010-64h192a32 32 0 010 64z" />
  </svg>
);

SvgSoap.displayName = "SvgSoap";
SvgSoap.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgSoap;
