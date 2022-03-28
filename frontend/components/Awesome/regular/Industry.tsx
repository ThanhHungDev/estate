import * as React from "react";

const SvgIndustry = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M475.115 163.723L336 252.251v-68.28c0-18.916-20.931-30.399-36.885-20.248L160 252.251V56c0-13.255-10.745-24-24-24H24C10.745 32 0 42.745 0 56v400c0 13.255 10.745 24 24 24h464c13.255 0 24-10.745 24-24V183.971c0-18.917-20.931-30.399-36.885-20.248zM464 432H48V80h64v215.971c0 18.916 20.931 30.399 36.885 20.248L288 227.691v68.28c0 18.915 20.931 30.399 36.885 20.248L464 227.691V432z" />
  </svg>
);

SvgIndustry.displayName = "SvgIndustry";
SvgIndustry.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgIndustry;