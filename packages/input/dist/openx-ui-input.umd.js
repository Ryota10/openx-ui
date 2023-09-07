(function(global, factory) {
  typeof exports === "object" && typeof module !== "undefined" ? factory(exports, require("vue"), require("@openx-ui/shared")) : typeof define === "function" && define.amd ? define(["exports", "vue", "@openx-ui/shared"], factory) : (global = typeof globalThis !== "undefined" ? globalThis : global || self, factory(global.OpenxUiButton = {}, global.vue, global.shared));
})(this, function(exports2, vue, shared) {
  "use strict";
  const _hoisted_1 = ["value"];
  const _sfc_main = /* @__PURE__ */ vue.defineComponent({
    __name: "input",
    props: {
      modelValue: { default: "" }
    },
    emits: ["update:modelValue"],
    setup(__props, { emit }) {
      function inputHandler(e) {
        const value = e.target.value;
        emit("update:modelValue", value);
        shared.hello(value);
      }
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("input", {
          class: "openx-input",
          type: "text",
          value: _ctx.modelValue,
          onInput: inputHandler
        }, null, 40, _hoisted_1);
      };
    }
  });
  exports2.Input = _sfc_main;
  Object.defineProperty(exports2, Symbol.toStringTag, { value: "Module" });
});
