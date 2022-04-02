import * as React from "react";

const SvgTrashUndo = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 448 512" {...props}>
    <path d="M440 64H336l-33.59-44.8C294.44 8.59 277.25 0 264 0h-80c-13.25 0-30.44 8.59-38.41 19.2L112 64H8a8 8 0 00-8 8v16a8 8 0 008 8h18.91l33.18 372.3c2.19 24.12 23.6 43.7 47.82 43.7h232.18c24.22 0 45.63-19.58 47.82-43.7L421.09 96H440a8 8 0 008-8V72a8 8 0 00-8-8zM171.19 38.41A18.15 18.15 0 01184 32h80a18.15 18.15 0 0112.81 6.41L296 64H152zm184.81 427A16.2 16.2 0 01340.16 480H107.84A16.2 16.2 0 0192 465.41L59 96h330zM192.75 360.34A28 28 0 00240 340v-52h16a48.05 48.05 0 0148 48 16 16 0 0032 0 80.09 80.09 0 00-80-80h-16v-52a28 28 0 00-47.25-20.34l-72 68a28 28 0 000 40.68zM208 213.28v117.44L145.81 272z" />
  </svg>
);

SvgTrashUndo.displayName = "SvgTrashUndo";
SvgTrashUndo.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgTrashUndo;
