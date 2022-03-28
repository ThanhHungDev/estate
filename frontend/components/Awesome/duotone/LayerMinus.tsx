import * as React from "react";

const SvgLayerMinus = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path
      d="M12.41 236.3l233-105.58a25.68 25.68 0 0121.29 0L499.59 236.3c16.55 7.5 16.55 32.5 0 40L266.64 381.89a25.68 25.68 0 01-21.29 0L12.41 276.3c-16.55-7.5-16.55-32.5 0-40z"
      opacity={0.4}
    />
    <path
      d="M499.59 364.1l-58.09-26.33L279.87 411a57.64 57.64 0 01-47.72 0L70.51 337.77l-58.1 26.33c-16.55 7.5-16.55 32.5 0 40l232.94 105.59a25.68 25.68 0 0021.29 0l233-105.59c16.5-7.5 16.5-32.5-.05-40zM304 64h192a16 16 0 0016-16V16a16 16 0 00-16-16H304a16 16 0 00-16 16v32a16 16 0 0016 16z"
      className="layer-minus_svg__fa-primary"
    />
  </svg>
);

SvgLayerMinus.displayName = "SvgLayerMinus";
SvgLayerMinus.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgLayerMinus;
