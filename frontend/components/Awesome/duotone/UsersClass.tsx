import * as React from "react";

const SvgUsersClass = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path
      d="M608 217a95.26 95.26 0 00-64-25V64H96v128a95.28 95.28 0 00-64 25V49.59C32 22.25 53.53 0 80 0h480c26.47 0 48 22.25 48 49.59z"
      opacity={0.4}
    />
    <path
      d="M576 384h-64a64 64 0 00-64 64v32a32 32 0 0032 32h128a32 32 0 0032-32v-32a64 64 0 00-64-64zm-32-32a64 64 0 10-64-64 64 64 0 0064 64zm-192 32h-64a64 64 0 00-64 64v32a32 32 0 0032 32h128a32 32 0 0032-32v-32a64 64 0 00-64-64zm-224 0H64a64 64 0 00-64 64v32a32 32 0 0032 32h128a32 32 0 0032-32v-32a64 64 0 00-64-64zm192-32a64 64 0 10-64-64 64 64 0 0064 64zm-224 0a64 64 0 10-64-64 64 64 0 0064 64z"
      className="users-class_svg__fa-primary"
    />
  </svg>
);

SvgUsersClass.displayName = "SvgUsersClass";
SvgUsersClass.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgUsersClass;
