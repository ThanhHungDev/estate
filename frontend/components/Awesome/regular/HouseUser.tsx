import * as React from "react";

const SvgHouseUser = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 576 512" {...props}>
    <path d="M570.61 240L512 187.37V56a24 24 0 00-24-24h-96a24 24 0 00-24 24v2.08l-53.44-48C308.28 4.53 296.39 0 288 0s-20.28 4.53-26.56 10.09L5.39 240A18.21 18.21 0 000 252a18.47 18.47 0 004 10.61l10.62 12a18.15 18.15 0 0012 5.37 18.54 18.54 0 0010.63-4l26.75-24V472a40 40 0 0040 40h368a40 40 0 0040-40V251.85l26.75 24a16 16 0 0022.59-1.33L572 262.59a18.47 18.47 0 004-10.59 18.21 18.21 0 00-5.39-12zM464 464h-48v-16a96 96 0 00-96-96h-64a96 96 0 00-96 96v16h-48V208.76l176-158 176 158zm0-319.72l-48-43.1V80h48zM224 256a64 64 0 1064-64 64 64 0 00-64 64z" />
  </svg>
);

SvgHouseUser.displayName = "SvgHouseUser";
SvgHouseUser.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgHouseUser;
