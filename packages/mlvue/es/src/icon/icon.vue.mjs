import { defineComponent, computed, openBlock, createElementBlock, normalizeStyle, unref } from "vue";
import "./style/index.css";
const __default__ = defineComponent({
  name: "ml-icon"
});
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  props: {
    type: null
  },
  setup(__props) {
    const iconProps = __props;
    const style = computed(() => {
      return { [`ml-button--${iconProps.type}`]: iconProps.type };
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: "ml-icon",
        style: normalizeStyle(unref(style))
      }, "this is a icon component", 4);
    };
  }
});
export {
  _sfc_main as default
};
