import * as React from "react";

const SvgMapMarkerEdit = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 384 512" {...props}>
    <path d="M192 0C86.4 0 0 86.4 0 192c0 76.8 25.6 99.2 172.8 310.4 4.8 6.4 12 9.6 19.2 9.6s14.4-3.2 19.2-9.6C358.4 291.2 384 268.8 384 192 384 86.4 297.6 0 192 0zm0 446.09c-14.41-20.56-27.51-39.12-39.41-55.99C58.35 256.48 48 240.2 48 192c0-79.4 64.6-144 144-144s144 64.6 144 144c0 48.2-10.35 64.48-104.59 198.09-11.9 16.87-25 35.44-39.41 56zm-78.41-231.66l-4.8 42.83c-.62 5.68 4.18 10.57 9.95 9.95l42.83-4.8 67.11-67.11-47.98-47.98-67.11 67.11zM247.43 106c-7.02-7.02-18.39-7.02-25.41 0l-18.7 18.7 47.98 47.98 18.7-18.7c7.02-7.02 7.02-18.39 0-25.41L247.43 106z" />
  </svg>
);

SvgMapMarkerEdit.displayName = "SvgMapMarkerEdit";
SvgMapMarkerEdit.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgMapMarkerEdit;
