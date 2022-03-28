import * as React from "react";

const SvgRocket = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M505.12 19.094c-1.19-5.532-6.658-11-12.207-12.188C460.716 0 435.507 0 410.407 0 307.175 0 245.27 55.203 199.052 128H94.838c-16.348.016-35.557 11.875-42.887 26.484L2.516 253.297A28.4 28.4 0 000 264a24.009 24.009 0 0024.006 24h103.81l-22.474 22.469c-11.366 11.361-12.996 32.258 0 45.25l50.904 50.906c11.156 11.188 32.156 13.156 45.277 0l22.475-22.469V488a24.009 24.009 0 0024.005 24 28.56 28.56 0 0010.707-2.516l98.729-49.39c14.629-7.297 26.508-26.5 26.508-42.86V312.797C456.544 266.484 511.98 204.39 511.98 101.703c.094-25.203.094-50.406-6.86-82.61zM384.04 168a40 40 0 1140.01-40 40.023 40.023 0 01-40.01 40z" />
  </svg>
);

SvgRocket.displayName = "SvgRocket";
SvgRocket.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgRocket;
