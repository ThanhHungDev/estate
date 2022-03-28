import * as React from "react";

const SvgBookMedical = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 448 512" {...props}>
    <path d="M448 384V16a16 16 0 00-16-16H80A80 80 0 000 80v352a80 80 0 0080 80h352a16 16 0 0016-16v-16a16 16 0 00-12.9-15.7c-4.2-13-4.2-51.6 0-64.6A16 16 0 00448 384zm-54 80H80a32 32 0 010-64h314c-2.7 17.3-2.7 46.7 0 64zm6-112H80a79.37 79.37 0 00-32 6.7V80a32 32 0 0132-32h320zM136 224h56v56a8 8 0 008 8h48a8 8 0 008-8v-56h56a8 8 0 008-8v-48a8 8 0 00-8-8h-56v-56a8 8 0 00-8-8h-48a8 8 0 00-8 8v56h-56a8 8 0 00-8 8v48a8 8 0 008 8z" />
  </svg>
);

SvgBookMedical.displayName = "SvgBookMedical";
SvgBookMedical.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgBookMedical;
