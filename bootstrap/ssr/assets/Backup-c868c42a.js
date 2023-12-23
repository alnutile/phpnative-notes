import { unref, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrIncludeBooleanAttr, ssrRenderComponent } from "vue/server-renderer";
import { useForm } from "@inertiajs/vue3";
import { _ as _sfc_main$1 } from "./ActionMessage-8d62f3c2.js";
const _sfc_main = {
  __name: "Backup",
  __ssrInlineRender: true,
  setup(__props) {
    const form = useForm({});
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<form${ssrRenderAttrs(_attrs)}><button class="btn-primary btn"${ssrIncludeBooleanAttr(unref(form).processing) ? " disabled" : ""}>`);
      _push(ssrRenderComponent(_sfc_main$1, {
        on: unref(form).recentlySuccessful
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Backup complete`);
          } else {
            return [
              createTextVNode("Backup complete")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(` Backup </button></form>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Settings/Components/Backup.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
