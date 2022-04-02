import * as React from "react";

const SvgVideoPlus = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 576 512" {...props}>
    <path d="M543.9 96c-6.2 0-12.5 1.8-18.2 5.7L416 171.6v-59.8c0-26.4-23.2-47.8-51.8-47.8H51.8C23.2 64 0 85.4 0 111.8v288.4C0 426.6 23.2 448 51.8 448h312.4c28.6 0 51.8-21.4 51.8-47.8v-59.8l109.6 69.9c5.7 4 12.1 5.7 18.2 5.7 16.6 0 32.1-13 32.1-31.5v-257c.1-18.5-15.4-31.5-32-31.5zM384 192v208.2c0 8.6-9.1 15.8-19.8 15.8H51.8c-10.7 0-19.8-7.2-19.8-15.8V111.8c0-8.6 9.1-15.8 19.8-15.8h312.4c10.7 0 19.8 7.2 19.8 15.8V192zm160 192.5l-1.2-1.3L416 302.4v-92.9L544 128v256.5zM296 240h-72v-72c0-4.4-3.6-8-8-8h-16c-4.4 0-8 3.6-8 8v72h-72c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h72v72c0 4.4 3.6 8 8 8h16c4.4 0 8-3.6 8-8v-72h72c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8z" />
  </svg>
);

SvgVideoPlus.displayName = "SvgVideoPlus";
SvgVideoPlus.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgVideoPlus;
