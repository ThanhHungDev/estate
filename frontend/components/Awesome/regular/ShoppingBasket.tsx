import * as React from "react";

const SvgShoppingBasket = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 576 512" {...props}>
    <path d="M564 192h-72.902L362.286 40.457c-8.583-10.099-23.729-11.327-33.83-2.743-10.099 8.584-11.327 23.731-2.742 33.83L428.102 192H147.899L250.287 71.543c8.584-10.099 7.356-25.246-2.743-33.83s-25.246-7.355-33.83 2.743L84.901 192H12c-6.627 0-12 5.373-12 12v24c0 6.627 5.373 12 12 12h18.667l27.584 198.603C61.546 462.334 81.836 480 105.794 480h364.412c23.958 0 44.248-17.666 47.544-41.397L545.333 240H564c6.627 0 12-5.373 12-12v-24c0-6.627-5.373-12-12-12zm-93.794 240H105.794L79.127 240h417.745l-26.666 192zM312 296v80c0 13.255-10.745 24-24 24s-24-10.745-24-24v-80c0-13.255 10.745-24 24-24s24 10.745 24 24zm112 0v80c0 13.255-10.745 24-24 24s-24-10.745-24-24v-80c0-13.255 10.745-24 24-24s24 10.745 24 24zm-224 0v80c0 13.255-10.745 24-24 24s-24-10.745-24-24v-80c0-13.255 10.745-24 24-24s24 10.745 24 24z" />
  </svg>
);

SvgShoppingBasket.displayName = "SvgShoppingBasket";
SvgShoppingBasket.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgShoppingBasket;
