import * as React from "react";

const SvgLuggageCart = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path d="M624 400H144V16c0-8.84-7.16-16-16-16H16C7.16 0 0 7.16 0 16v16c0 8.84 7.16 16 16 16h80v384c0 8.84 7.16 16 16 16h50.94c-1.79 5.03-2.94 10.36-2.94 16 0 26.51 21.49 48 48 48s48-21.49 48-48c0-5.64-1.15-10.97-2.94-16h197.88c-1.79 5.03-2.94 10.36-2.94 16 0 26.51 21.49 48 48 48s48-21.49 48-48c0-5.64-1.15-10.97-2.94-16H624c8.84 0 16-7.16 16-16v-16c0-8.84-7.16-16-16-16zm-400-48h320c17.67 0 32-14.33 32-32V128c0-17.67-14.33-32-32-32h-64V48c0-26.51-21.49-48-48-48h-96c-26.51 0-48 21.49-48 48v48h-64c-17.67 0-32 14.33-32 32v192c0 17.67 14.33 32 32 32zm256-208h48v160h-48V144zM336 48h96v48h-96V48zm0 96h96v160h-96V144zm-96 0h48v160h-48V144z" />
  </svg>
);

SvgLuggageCart.displayName = "SvgLuggageCart";
SvgLuggageCart.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgLuggageCart;
