import * as React from "react";

const SvgTrafficCone = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M496 464h-21.39L294.54 11.52A18.284 18.284 0 00277.55 0h-43.11c-7.49 0-14.22 4.57-16.99 11.52L37.39 464H16c-8.84 0-16 7.16-16 16v24c0 4.42 3.58 8 8 8h496c4.42 0 8-3.58 8-8v-24c0-8.84-7.16-16-16-16zM365.64 320H146.36l44.57-112h130.15l44.56 112zM254.6 48h2.8l44.57 112h-91.94L254.6 48zM127.25 368h257.49l38.2 96H89.05l38.2-96z" />
  </svg>
);

SvgTrafficCone.displayName = "SvgTrafficCone";
SvgTrafficCone.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgTrafficCone;
