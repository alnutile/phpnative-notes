import { withCtx, unref, createTextVNode, isRef, createVNode, withDirectives, vModelText, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderAttr } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./Layout-49ec2c64.js";
import { useForm } from "@inertiajs/vue3";
import { _ as _sfc_main$2 } from "./ActionMessage-8d62f3c2.js";
import _sfc_main$3 from "./ResourceNoEditor-cac4994d.js";
import "@headlessui/vue";
import "@heroicons/vue/24/outline";
import "vue-toastification";
const _sfc_main = {
  __name: "Create",
  __ssrInlineRender: true,
  props: {
    note: Object
  },
  setup(__props) {
    const form = useForm({
      title: "",
      content: ""
    });
    const save = () => {
      form.post(route("notes.store"), {
        preserveScroll: true
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$1, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div${_scopeId}><div class="max-w-full mx-auto dark:text-gray-300"${_scopeId}><div class="flex justify-between gap-4 items-center"${_scopeId}><div class="w-4/6 flex items-center gap-4"${_scopeId}><input class="bg-slate-900 border-0 text-lg w-full ring-indigo-600 ring-1" autofocus placeholder="Title here..."${ssrRenderAttr("value", unref(form).title)}${_scopeId}><button class="text-pink-600"${_scopeId}>save</button></div></div></div><div class="flex justify-end h-4 mb-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$2, {
              on: unref(form).recentlySuccessful
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`saved`);
                } else {
                  return [
                    createTextVNode("saved")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(_sfc_main$3, {
              modelValue: unref(form),
              "onUpdate:modelValue": ($event) => isRef(form) ? form.value = $event : null
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", null, [
                createVNode("div", { class: "max-w-full mx-auto dark:text-gray-300" }, [
                  createVNode("div", { class: "flex justify-between gap-4 items-center" }, [
                    createVNode("div", { class: "w-4/6 flex items-center gap-4" }, [
                      withDirectives(createVNode("input", {
                        class: "bg-slate-900 border-0 text-lg w-full ring-indigo-600 ring-1",
                        autofocus: "",
                        placeholder: "Title here...",
                        "onUpdate:modelValue": ($event) => unref(form).title = $event
                      }, null, 8, ["onUpdate:modelValue"]), [
                        [vModelText, unref(form).title]
                      ]),
                      createVNode("button", {
                        onClick: save,
                        class: "text-pink-600"
                      }, "save")
                    ])
                  ])
                ]),
                createVNode("div", { class: "flex justify-end h-4 mb-4" }, [
                  createVNode(_sfc_main$2, {
                    on: unref(form).recentlySuccessful
                  }, {
                    default: withCtx(() => [
                      createTextVNode("saved")
                    ]),
                    _: 1
                  }, 8, ["on"])
                ]),
                createVNode(_sfc_main$3, {
                  modelValue: unref(form),
                  "onUpdate:modelValue": ($event) => isRef(form) ? form.value = $event : null
                }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Notes/Create.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
