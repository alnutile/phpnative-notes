import { withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./Layout-49ec2c64.js";
import { useForm } from "@inertiajs/vue3";
import "./ActionMessage-8d62f3c2.js";
import "./Resource-277c67e7.js";
import { useToast } from "vue-toastification";
import "@headlessui/vue";
import "@heroicons/vue/24/outline";
const _sfc_main = {
  __name: "Show",
  __ssrInlineRender: true,
  props: {
    note: Object
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
            _push2(`<div${_scopeId}><h2 class="text-white text-2xl"${_scopeId}>Settings</h2><div class="max-w-full mx-auto dark:text-gray-300"${_scopeId}><div class="flex justify-between gap-4 items-center"${_scopeId}><button type="button"${_scopeId}>run migration</button></div><div class="flex justify-between gap-4 items-center"${_scopeId}><button type="button"${_scopeId}>run seeder</button></div></div></div>`);
          } else {
            return [
              createVNode("div", null, [
                createVNode("h2", { class: "text-white text-2xl" }, "Settings"),
                createVNode("div", { class: "max-w-full mx-auto dark:text-gray-300" }, [
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
