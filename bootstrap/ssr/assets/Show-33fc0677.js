import { mergeProps, unref, useSSRContext, ref, onMounted, onBeforeUnmount, resolveDirective, withCtx, createTextVNode, isRef, createVNode, withDirectives, vModelText, openBlock, createBlock, Fragment, renderList, toDisplayString } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderList, ssrInterpolate, ssrRenderComponent, ssrGetDirectiveProps } from "vue/server-renderer";
import { _ as _sfc_main$2 } from "./Layout-49ec2c64.js";
import { useForm } from "@inertiajs/vue3";
import { _ as _sfc_main$3 } from "./ActionMessage-8d62f3c2.js";
import _sfc_main$4 from "./ResourceNoEditor-cac4994d.js";
import { useToast } from "vue-toastification";
import "@headlessui/vue";
import "@heroicons/vue/24/outline";
const _sfc_main$1 = {
  __name: "Tagger",
  __ssrInlineRender: true,
  props: {
    note: Object
  },
  setup(__props) {
    useToast();
    const form = useForm({
      name: "",
      type: ""
    });
    useForm({});
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex justify-start gap-2 items-center mt-2" }, _attrs))}><input${ssrRenderAttr("value", unref(form).name)} type="text" placeholder="Add Tag..." class="input input-sm input-bordered input-primary max-w-xs">`);
      if (unref(form).errors.name) {
        _push(`<div>Tag Name required</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="flex justify-start gap-4 items-center"><!--[-->`);
      ssrRenderList(__props.note.tags, (tag) => {
        _push(`<div class="badge badge-info flex items-center p-3 justify-between"><button type="button"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-4 h-4 stroke-current pb-0.5"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg></button> ${ssrInterpolate(tag.name)}</div>`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Tagger.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "Show",
  __ssrInlineRender: true,
  props: {
    note: Object
  },
  setup(__props) {
    const inactivityTime = ref();
    const props = __props;
    const form = useForm({
      title: props.note.data.title,
      content: props.note.data.content
    });
    const save = () => {
      form.put(route("notes.update", {
        note: props.note.data.id
      }), {
        preserveScroll: true
      });
    };
    const resetTimer = () => {
      clearTimeout(inactivityTime.value);
      inactivityTime.value = setTimeout(save, 3e5);
    };
    const setupInactivityTimer = () => {
      document.addEventListener("mousemove", resetTimer);
      document.addEventListener("keypress", resetTimer);
      document.addEventListener("touchstart", resetTimer);
      resetTimer();
    };
    onMounted(() => {
      setupInactivityTimer();
    });
    onBeforeUnmount(() => {
      clearTimeout(inactivityTime.value);
      document.removeEventListener("mousemove", resetTimer);
      document.removeEventListener("keypress", resetTimer);
      document.removeEventListener("touchstart", resetTimer);
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _directive_shortkey = resolveDirective("shortkey");
      _push(ssrRenderComponent(_sfc_main$2, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div${_scopeId}><div class="max-w-full mx-auto dark:text-gray-300"${_scopeId}><div class="flex justify-between gap-4 items-center"${_scopeId}><div class="w-4/6"${_scopeId}><input class="bg-slate-900 border-0 text-lg w-full"${ssrRenderAttr("value", unref(form).title)}${_scopeId}></div><div class="flex items-center"${_scopeId}><button${ssrRenderAttrs(mergeProps({ class: "text-pink-600" }, ssrGetDirectiveProps(_ctx, _directive_shortkey, ["ctrl", "s"])))}${_scopeId}>save</button></div></div><div${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$1, {
              note: __props.note.data
            }, null, _parent2, _scopeId));
            _push2(`</div></div><div class="flex justify-end h-4 mb-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$3, {
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
            _push2(`</div><div${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$4, {
              modelValue: unref(form),
              "onUpdate:modelValue": ($event) => isRef(form) ? form.value = $event : null,
              note: __props.note.data
            }, null, _parent2, _scopeId));
            _push2(`</div><h2 class="text-2xl text-gray-400"${_scopeId}>Files:</h2><div class="grid grid-cols-2 gap-4"${_scopeId}><!--[-->`);
            ssrRenderList(__props.note.data.files, (file) => {
              _push2(`<div${_scopeId}><div${_scopeId}>Name: ${ssrInterpolate(file.name)}</div><img class="align-self-auto max-w-2xl max-h-full"${ssrRenderAttr("src", `data:image/jpeg;base64,${file.data}`)}${_scopeId}></div>`);
            });
            _push2(`<!--]--></div></div>`);
          } else {
            return [
              createVNode("div", null, [
                createVNode("div", { class: "max-w-full mx-auto dark:text-gray-300" }, [
                  createVNode("div", { class: "flex justify-between gap-4 items-center" }, [
                    createVNode("div", { class: "w-4/6" }, [
                      withDirectives(createVNode("input", {
                        class: "bg-slate-900 border-0 text-lg w-full",
                        "onUpdate:modelValue": ($event) => unref(form).title = $event
                      }, null, 8, ["onUpdate:modelValue"]), [
                        [vModelText, unref(form).title]
                      ])
                    ]),
                    createVNode("div", { class: "flex items-center" }, [
                      withDirectives((openBlock(), createBlock("button", {
                        onShortkey: ($event) => save(),
                        onClick: save,
                        class: "text-pink-600"
                      }, [
                        createTextVNode("save")
                      ], 40, ["onShortkey"])), [
                        [_directive_shortkey, ["ctrl", "s"]]
                      ])
                    ])
                  ]),
                  createVNode("div", null, [
                    createVNode(_sfc_main$1, {
                      note: __props.note.data
                    }, null, 8, ["note"])
                  ])
                ]),
                createVNode("div", { class: "flex justify-end h-4 mb-4" }, [
                  createVNode(_sfc_main$3, {
                    on: unref(form).recentlySuccessful
                  }, {
                    default: withCtx(() => [
                      createTextVNode("saved")
                    ]),
                    _: 1
                  }, 8, ["on"])
                ]),
                createVNode("div", null, [
                  createVNode(_sfc_main$4, {
                    modelValue: unref(form),
                    "onUpdate:modelValue": ($event) => isRef(form) ? form.value = $event : null,
                    note: __props.note.data
                  }, null, 8, ["modelValue", "onUpdate:modelValue", "note"])
                ]),
                createVNode("h2", { class: "text-2xl text-gray-400" }, "Files:"),
                createVNode("div", { class: "grid grid-cols-2 gap-4" }, [
                  (openBlock(true), createBlock(Fragment, null, renderList(__props.note.data.files, (file) => {
                    return openBlock(), createBlock("div", {
                      key: file.id
                    }, [
                      createVNode("div", null, "Name: " + toDisplayString(file.name), 1),
                      createVNode("img", {
                        class: "align-self-auto max-w-2xl max-h-full",
                        src: `data:image/jpeg;base64,${file.data}`
                      }, null, 8, ["src"])
                    ]);
                  }), 128))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Notes/Show.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
