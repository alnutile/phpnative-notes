import { withCtx, createVNode, createTextVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./Layout-85fa3394.js";
import { useForm } from "@inertiajs/vue3";
import { useToast } from "vue-toastification";
import _sfc_main$2 from "./Backup-c868c42a.js";
import "@heroicons/vue/24/outline";
import "./ActionMessage-8d62f3c2.js";
const _sfc_main = {
  __name: "Show",
  __ssrInlineRender: true,
  props: {
    note: Object,
    settings: Object
  },
  setup(__props) {
    const toast = useToast();
    const migrate = useForm({});
    useForm({});
    const runMigrations = () => {
      migrate.post(route("run.migrations"), {
        preserveScroll: true,
        onError: (params) => {
          toast.error("Error with migration");
        },
        onSuccess: (params) => {
          toast("Success with migration");
        }
      });
    };
    const runSeed = () => {
      migrate.post(route("run.seed"), {
        preserveScroll: true,
        onError: (params) => {
          toast.error("Error with seed");
        },
        onSuccess: (params) => {
          toast("Success with seed");
        }
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$1, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div${_scopeId}><h2 class="text-white text-2xl"${_scopeId}>Settings</h2><div class="max-w-full mx-auto dark:text-gray-300 mt-10"${_scopeId}><div${_scopeId}><h2${_scopeId}>Settings</h2> ${ssrInterpolate(__props.settings)}</div><div${_scopeId}><h2${_scopeId}>Backup</h2>`);
            _push2(ssrRenderComponent(_sfc_main$2, null, null, _parent2, _scopeId));
            _push2(`</div><div class="flex justify-between gap-4 items-center"${_scopeId}><button type="button"${_scopeId}>run migration</button></div><div class="flex justify-between gap-4 items-center"${_scopeId}><button type="button"${_scopeId}>run seeder</button></div></div></div>`);
          } else {
            return [
              createVNode("div", null, [
                createVNode("h2", { class: "text-white text-2xl" }, "Settings"),
                createVNode("div", { class: "max-w-full mx-auto dark:text-gray-300 mt-10" }, [
                  createVNode("div", null, [
                    createVNode("h2", null, "Settings"),
                    createTextVNode(" " + toDisplayString(__props.settings), 1)
                  ]),
                  createVNode("div", null, [
                    createVNode("h2", null, "Backup"),
                    createVNode(_sfc_main$2)
                  ]),
                  createVNode("div", { class: "flex justify-between gap-4 items-center" }, [
                    createVNode("button", {
                      onClick: runMigrations,
                      type: "button"
                    }, "run migration")
                  ]),
                  createVNode("div", { class: "flex justify-between gap-4 items-center" }, [
                    createVNode("button", {
                      onClick: runSeed,
                      type: "button"
                    }, "run seeder")
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Settings/Show.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
