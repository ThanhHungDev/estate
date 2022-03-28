import * as React from "react";

const SvgXRay = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path
      d="M624 448H16a16 16 0 00-16 16v32a16 16 0 0016 16h608a16 16 0 0016-16v-32a16 16 0 00-16-16zm0-448H16A16 16 0 000 16v32a16 16 0 0016 16h608a16 16 0 0016-16V16a16 16 0 00-16-16zM168 192a8 8 0 00-8 8v16a8 8 0 008 8h136v32H200a8 8 0 00-8 8v16a8 8 0 008 8h104v32h-64a48 48 0 1048 48v-16h64v16a48 48 0 1048-48h-64v-32h104a8 8 0 008-8v-16a8 8 0 00-8-8H336v-32h136a8 8 0 008-8v-16a8 8 0 00-8-8H336v-32h104a8 8 0 008-8v-16a8 8 0 00-8-8H336v-24a8 8 0 00-8-8h-16a8 8 0 00-8 8v24H200a8 8 0 00-8 8v16a8 8 0 008 8h104v32zm72 192a16 16 0 1116-16 16 16 0 01-16 16zm160-32a16 16 0 11-16 16 16 16 0 0116-16z"
      opacity={0.4}
    />
    <path
      d="M240 352a16 16 0 1016 16 16 16 0 00-16-16zm160 32a16 16 0 10-16-16 16 16 0 0016 16zM64 64v384h512V64zm416 152a8 8 0 01-8 8H336v32h104a8 8 0 018 8v16a8 8 0 01-8 8H336v32h64a48 48 0 11-48 48v-16h-64v16a48 48 0 11-48-48h64v-32H200a8 8 0 01-8-8v-16a8 8 0 018-8h104v-32H168a8 8 0 01-8-8v-16a8 8 0 018-8h136v-32H200a8 8 0 01-8-8v-16a8 8 0 018-8h104v-24a8 8 0 018-8h16a8 8 0 018 8v24h104a8 8 0 018 8v16a8 8 0 01-8 8H336v32h136a8 8 0 018 8z"
      className="x-ray_svg__fa-primary"
    />
  </svg>
);

SvgXRay.displayName = "SvgXRay";
SvgXRay.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgXRay;
