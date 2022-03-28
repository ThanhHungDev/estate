import * as React from "react";

const SvgKazoo = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path d="M608 128H480.68c-19.53-9.89-41.29-16-64.68-16s-45.15 6.11-64.68 16H241.93a128.3 128.3 0 00-35.17 4.92L23.21 185.37A32 32 0 000 216.14v79.72a32 32 0 0023.21 30.77l183.55 52.44a127.93 127.93 0 0035.17 4.93h109.39c19.53 9.89 41.29 16 64.68 16s45.15-6.11 64.68-16H608a32 32 0 0032-32V160a32 32 0 00-32-32zM296.32 336h-54.39a80.08 80.08 0 01-22-3.08L48 283.79v-55.58l172-49.13a80.08 80.08 0 0122-3.08h54.39a143.74 143.74 0 000 160zM416 352a96 96 0 1196-96 96.1 96.1 0 01-96 96zm176-16h-56.32a143.74 143.74 0 000-160H592zM466.91 216.4l-11.31-11.31a8 8 0 00-11.32 0L416 233.37l-28.28-28.28a8 8 0 00-11.32 0l-11.31 11.31a8 8 0 000 11.31L393.37 256l-28.28 28.28a8 8 0 000 11.32l11.31 11.31a8 8 0 0011.32 0L416 278.63l28.28 28.28a8 8 0 0011.32 0l11.31-11.31a8 8 0 000-11.32L438.63 256l28.28-28.29a8 8 0 000-11.31z" />
  </svg>
);

SvgKazoo.displayName = "SvgKazoo";
SvgKazoo.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgKazoo;
