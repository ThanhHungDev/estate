import * as React from "react";

const SvgPhoneOffice = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 576 512" {...props}>
    <path
      d="M192 0h-64a32 32 0 00-32 32v352a32 32 0 0032 32h64a32 32 0 0032-32V32a32 32 0 00-32-32zm304 384h-32a16 16 0 00-16 16v32a16 16 0 0016 16h32a16 16 0 0016-16v-32a16 16 0 00-16-16zm0-128h-32a16 16 0 00-16 16v32a16 16 0 0016 16h32a16 16 0 0016-16v-32a16 16 0 00-16-16zM368 384h-32a16 16 0 00-16 16v32a16 16 0 0016 16h32a16 16 0 0016-16v-32a16 16 0 00-16-16zm0-128h-32a16 16 0 00-16 16v32a16 16 0 0016 16h32a16 16 0 0016-16v-32a16 16 0 00-16-16z"
      opacity={0.4}
    />
    <path
      d="M528 32H256v352a64.07 64.07 0 01-64 64h-64a64.07 64.07 0 01-64-64V32H48A48 48 0 000 80v384a48 48 0 0048 48h480a48 48 0 0048-48V80a48 48 0 00-48-48zM384 432a16 16 0 01-16 16h-32a16 16 0 01-16-16v-32a16 16 0 0116-16h32a16 16 0 0116 16zm0-128a16 16 0 01-16 16h-32a16 16 0 01-16-16v-32a16 16 0 0116-16h32a16 16 0 0116 16zm128 128a16 16 0 01-16 16h-32a16 16 0 01-16-16v-32a16 16 0 0116-16h32a16 16 0 0116 16zm0-128a16 16 0 01-16 16h-32a16 16 0 01-16-16v-32a16 16 0 0116-16h32a16 16 0 0116 16zm0-112H320V96h192z"
      className="phone-office_svg__fa-primary"
    />
  </svg>
);

SvgPhoneOffice.displayName = "SvgPhoneOffice";
SvgPhoneOffice.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgPhoneOffice;