"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const vue = require("vue");
require("./style/index.css");
const __default__ = vue.defineComponent({
  name: "ml-icon"
});
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  ...__default__,
  props: {
    type: null
  },
  setup(__props) {
    const iconProps = __props;
    const style = vue.computed(() => {
      return { [`ml-button--${iconProps.type}`]: iconProps.type };
    });
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createElementBlock("div", {
        class: "ml-icon",
        style: vue.normalizeStyle(vue.unref(style))
      }, "this is a icon component", 4);
    };
  }
});
exports.default = _sfc_main;
