import * as React from "react";

const SvgFileSearch = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path d="M603.32 473.39l-81.48-81.46a128 128 0 10-33.93 33.93l81.48 81.46a16 16 0 0022.62 0L603.32 496a16 16 0 000-22.61zM416 400a80 80 0 1180-80 80.09 80.09 0 01-80 80zM80 464V48.09h160v104a23.93 23.93 0 0024 24h83.29c20.89-10 44-16.06 68.71-16.06V132a48.23 48.23 0 00-14.1-34L318 14.1A48 48 0 00284.1 0H80a48.16 48.16 0 00-48 48.09V464a48 48 0 0048 48h288a47.86 47.86 0 0045.15-32.29A158.48 158.48 0 01347.43 464zM288 52l76.1 76.08H288z" />
  </svg>
);

SvgFileSearch.displayName = "SvgFileSearch";
SvgFileSearch.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgFileSearch;
