import * as React from "react";

const SvgCocktail = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 576 512" {...props}>
    <path d="M296 464h-64V346.78l176.74-176.73c15.52-15.52 4.53-42.05-17.42-42.05H24.68c-21.95 0-32.94 26.53-17.42 42.05L184 346.78V464h-64c-22.09 0-40 17.91-40 40 0 4.42 3.58 8 8 8h240c4.42 0 8-3.58 8-8 0-22.09-17.91-40-40-40zM81.1 176h253.8L208 302.9 81.1 176zM432 0c-62.61 0-115.35 40.2-135.18 96h52.54c16.65-28.55 47.27-48 82.64-48 52.93 0 96 43.06 96 96s-43.07 96-96 96c-14.04 0-27.29-3.2-39.32-8.64l-35.26 35.26C379.23 279.92 404.59 288 432 288c79.53 0 144-64.47 144-144S511.53 0 432 0z" />
  </svg>
);

SvgCocktail.displayName = "SvgCocktail";
SvgCocktail.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgCocktail;
