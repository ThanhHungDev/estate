import * as React from "react";

const SvgUserVisor = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 448 512" {...props}>
    <path d="M313.594 304c-28.688 0-42.5 16-89.594 16s-60.813-16-89.594-16A134.431 134.431 0 000 438.406V464a48.012 48.012 0 0048 48h352a48.012 48.012 0 0048-48v-25.594A134.431 134.431 0 00313.594 304zM400 464H48v-25.594A86.56 86.56 0 01134.406 352C149 352 172.687 368 224 368c51.688 0 74.906-16 89.594-16A86.56 86.56 0 01400 438.406zm-77.559-101.336a3.53 3.53 0 00-2.695 1.236c-17.611 20.43-28.277 47.196-31.723 79.557a3.555 3.555 0 005.723 3.182c22.084-17.182 30-21.168 32.918-22.057a5.98 5.98 0 011.223-.334c2.332 2.07 7.277 7.627 17.666 22.252a3.512 3.512 0 002.888 1.5 3.634 3.634 0 001.141-.182 3.568 3.568 0 002.416-3.486c-1.027-31.402-10.027-58.404-26.723-80.266a4.002 4.002 0 00-2.834-1.402zM88.338 190.454C107.738 247.05 160.824 288 224 288s116.262-40.95 135.662-97.547C373.527 186.943 384 174.955 384 160V96a32 32 0 00-32-32h-8.316a143.908 143.908 0 00-239.368 0H96a32 32 0 00-32 32v64c0 14.955 10.473 26.943 24.338 30.453zM224 240c-35.373 0-65.99-19.445-82.645-48h165.29c-16.655 28.555-47.272 48-82.645 48zm0-192a95.354 95.354 0 0152.867 16H171.133A95.354 95.354 0 01224 48zm-112 64h224v32H112z" />
  </svg>
);

SvgUserVisor.displayName = "SvgUserVisor";
SvgUserVisor.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgUserVisor;