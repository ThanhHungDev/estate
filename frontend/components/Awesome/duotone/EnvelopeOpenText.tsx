import * as React from "react";

const SvgEnvelopeOpenText = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path
      d="M64 257.6L227.9 376a47.72 47.72 0 0056.2 0L448 257.6V96a32 32 0 00-32-32H96a32 32 0 00-32 32zm96-97.6a16 16 0 0116-16h160a16 16 0 0116 16v16a16 16 0 01-16 16H176a16 16 0 01-16-16zm0 80a16 16 0 0116-16h160a16 16 0 0116 16v16a16 16 0 01-16 16H176a16 16 0 01-16-16z"
      opacity={0.4}
    />
    <path
      d="M352 160a16 16 0 00-16-16H176a16 16 0 00-16 16v16a16 16 0 0016 16h160a16 16 0 0016-16zm-16 64H176a16 16 0 00-16 16v16a16 16 0 0016 16h160a16 16 0 0016-16v-16a16 16 0 00-16-16zm-6.6-182.6C312.6 29.2 279.2-.3 256 0c-23.2-.3-56.6 29.2-73.4 41.4L152 64h208zM64 129c-23.9 17.7-42.7 31.6-45.6 34A48 48 0 000 200.7v10.7l64 46.2zm429.6 34c-2.9-2.3-21.7-16.3-45.6-33.9v128.5l64-46.2v-10.7a48 48 0 00-18.4-37.7zM256 417.1a80 80 0 01-46.9-15.2L0 250.9V464a48 48 0 0048 48h416a48 48 0 0048-48V250.9l-209.1 151a80 80 0 01-46.9 15.2z"
      className="envelope-open-text_svg__fa-primary"
    />
  </svg>
);

SvgEnvelopeOpenText.displayName = "SvgEnvelopeOpenText";
SvgEnvelopeOpenText.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgEnvelopeOpenText;
