import * as React from "react";

const SvgPhone = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path
      d="M336.23 167.12L406 4.43 389.41.61a24.16 24.16 0 00-27.5 13.9l-48 112a23.9 23.9 0 006.91 28zM154.6 320.71a24 24 0 00-28-6.91l-112 48a24.3 24.3 0 00-14 27.61l3.8 16.49 162.81-69.77zm338.81-296.1l-55.75-12.87L362 188.23l19.39 15.87A370.59 370.59 0 01204.2 381.3l-15.88-19.4-176.6 75.69 12.89 55.82A24 24 0 0048 512c256.1 0 464-207.49 464-464a24 24 0 00-18.59-23.39z"
      opacity={0.4}
    />
    <path
      d="M406 4.43l-69.77 162.69L362 188.23l75.66-176.49zM4.41 405.9l7.31 31.69 176.6-75.69-21.1-25.77z"
      className="phone_svg__fa-primary"
    />
  </svg>
);

SvgPhone.displayName = "SvgPhone";
SvgPhone.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgPhone;
