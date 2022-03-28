import * as React from "react";

const SvgUsersCrown = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path
      d="M96 224a64 64 0 10-64-64 64 64 0 0064 64zm448 0a64 64 0 10-64-64 64 64 0 0064 64zm32 32h-64a63.78 63.78 0 00-45.07 18.59A146.54 146.54 0 01542.06 384H608a32 32 0 0032-32v-32a64 64 0 00-64-64zm-512 0a64 64 0 00-64 64v32a32 32 0 0032 32h65.94a146.54 146.54 0 0175.13-109.41A63.78 63.78 0 00128 256zM320 32l-48 24-48-24v80h192V32l-48 24z"
      opacity={0.4}
    />
    <path
      d="M320 256a96 96 0 0096-96v-16H224v16a96 96 0 0096 96zm76.8 32h-8.31c-20.84 10-43.89 16-68.49 16s-47.64-6-68.49-16h-8.31A115.2 115.2 0 00128 403.2V432a48 48 0 0048 48h288a48 48 0 0048-48v-28.8A115.2 115.2 0 00396.8 288z"
      className="users-crown_svg__fa-primary"
    />
  </svg>
);

SvgUsersCrown.displayName = "SvgUsersCrown";
SvgUsersCrown.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgUsersCrown;
