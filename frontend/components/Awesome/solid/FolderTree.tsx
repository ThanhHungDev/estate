import * as React from "react";

const SvgFolderTree = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 576 512" {...props}>
    <path d="M544 32H432L400 0h-80a32 32 0 00-32 32v160a32 32 0 0032 32h224a32 32 0 0032-32V64a32 32 0 00-32-32zm0 288H432l-32-32h-80a32 32 0 00-32 32v160a32 32 0 0032 32h224a32 32 0 0032-32V352a32 32 0 00-32-32zM64 16A16 16 0 0048 0H16A16 16 0 000 16v400a32 32 0 0032 32h224v-64H64V160h192V96H64z" />
  </svg>
);

SvgFolderTree.displayName = "SvgFolderTree";
SvgFolderTree.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgFolderTree;
