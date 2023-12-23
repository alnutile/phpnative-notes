import { ref, watch, computed, mergeProps, unref, withCtx, createTextVNode, toDisplayString, openBlock, createBlock, createCommentVNode, Fragment, renderList, createVNode, withKeys, useSSRContext, onMounted, onBeforeUnmount, resolveDirective, isRef, withDirectives, vModelText, withModifiers } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderAttr, ssrGetDirectiveProps } from "vue/server-renderer";
import { _ as _sfc_main$2 } from "./Layout-85fa3394.js";
import { useForm } from "@inertiajs/vue3";
import { _ as _sfc_main$3 } from "./ActionMessage-8d62f3c2.js";
import { useToast } from "vue-toastification";
import { Combobox, ComboboxInput, ComboboxOptions, ComboboxOption } from "@headlessui/vue";
import _sfc_main$4 from "./ResourceNoEditor-4fc0ec5d.js";
import "@heroicons/vue/24/outline";
const _sfc_main$1 = {
  __name: "Tagger",
  __ssrInlineRender: true,
  props: {
    note: Object
  },
  setup(__props) {
    const toast = useToast();
    const props = __props;
    const form = useForm({
      name: "",
      type: ""
    });
    const tagList = ref([]);
    const query = ref();
    watch(query, (newValue, oldValue) => {
      getApiResults();
    });
    const getApiResults = () => {
      axios.get(route("api.tags", {
        "tag": query.value
      })).then((data) => {
        console.log(data);
        tagList.value = data.data;
      });
    };
    const queryTag = computed(() => {
      return query.value === "" ? null : { id: null, name: query.value };
    });
    const selectedTag = ref(tagList[0]);
    const filteredTags = computed(
      () => query.value === "" ? tagList : tagList.value.filter((tag) => {
        return tag.name.toLowerCase().includes(query.value.toLowerCase());
      })
    );
    useForm({});
    const addTag = () => {
      form.name = query.value;
      form.post(route("notes.tag", {
        note: props.note.id
      }), {
        preserveScroll: true,
        onSuccess: (params) => {
          toast("Added tag");
          form.reset();
          query.value = "";
        },
        onError: (params) => {
          toast.error("Error adding tag");
        }
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex justify-start gap-2 items-center mt-2" }, _attrs))}>`);
      _push(ssrRenderComponent(unref(Combobox), {
        modelValue: selectedTag.value,
        "onUpdate:modelValue": ($event) => selectedTag.value = $event,
        as: "div"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="relative"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(ComboboxInput), {
              class: "input input-md input-bordered input-primary text-xl w-[300px] rounded-none",
              placeholder: "Find or Add Tag...",
              onChange: ($event) => query.value = $event.target.value,
              displayValue: (tag) => tag.name,
              onKeyup: addTag
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(ComboboxOptions), { class: "absolute z-10 mt-1 max-h-60 rounded shadow-lg" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  if (queryTag.value) {
                    _push3(ssrRenderComponent(unref(ComboboxOption), {
                      class: "hover:cursor-pointer hover:text-gray-400 bg-black text-gray-100 px-2 py-1.5 overflow-auto w-[200px]",
                      value: queryTag.value
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(` Add &quot;${ssrInterpolate(query.value)}&quot; `);
                        } else {
                          return [
                            createTextVNode(' Add "' + toDisplayString(query.value) + '" ', 1)
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`<!--[-->`);
                  ssrRenderList(filteredTags.value, (tag) => {
                    _push3(ssrRenderComponent(unref(ComboboxOption), {
                      class: "hover:cursor-pointer hover:text-gray-400 bg-black text-gray-100 px-2 py-1.5 overflow-auto w-[200px]",
                      key: tag.id,
                      value: tag
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(tag.name)}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(tag.name), 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    queryTag.value ? (openBlock(), createBlock(unref(ComboboxOption), {
                      key: 0,
                      class: "hover:cursor-pointer hover:text-gray-400 bg-black text-gray-100 px-2 py-1.5 overflow-auto w-[200px]",
                      value: queryTag.value
                    }, {
                      default: withCtx(() => [
                        createTextVNode(' Add "' + toDisplayString(query.value) + '" ', 1)
                      ]),
                      _: 1
                    }, 8, ["value"])) : createCommentVNode("", true),
                    (openBlock(true), createBlock(Fragment, null, renderList(filteredTags.value, (tag) => {
                      return openBlock(), createBlock(unref(ComboboxOption), {
                        class: "hover:cursor-pointer hover:text-gray-400 bg-black text-gray-100 px-2 py-1.5 overflow-auto w-[200px]",
                        key: tag.id,
                        value: tag
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(tag.name), 1)
                        ]),
                        _: 2
                      }, 1032, ["value"]);
                    }), 128))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "relative" }, [
                createVNode(unref(ComboboxInput), {
                  class: "input input-md input-bordered input-primary text-xl w-[300px] rounded-none",
                  placeholder: "Find or Add Tag...",
                  onChange: ($event) => query.value = $event.target.value,
                  displayValue: (tag) => tag.name,
                  onKeyup: withKeys(addTag, ["enter"])
                }, null, 8, ["onChange", "displayValue"]),
                createVNode(unref(ComboboxOptions), { class: "absolute z-10 mt-1 max-h-60 rounded shadow-lg" }, {
                  default: withCtx(() => [
                    queryTag.value ? (openBlock(), createBlock(unref(ComboboxOption), {
                      key: 0,
                      class: "hover:cursor-pointer hover:text-gray-400 bg-black text-gray-100 px-2 py-1.5 overflow-auto w-[200px]",
                      value: queryTag.value
                    }, {
                      default: withCtx(() => [
                        createTextVNode(' Add "' + toDisplayString(query.value) + '" ', 1)
                      ]),
                      _: 1
                    }, 8, ["value"])) : createCommentVNode("", true),
                    (openBlock(true), createBlock(Fragment, null, renderList(filteredTags.value, (tag) => {
                      return openBlock(), createBlock(unref(ComboboxOption), {
                        class: "hover:cursor-pointer hover:text-gray-400 bg-black text-gray-100 px-2 py-1.5 overflow-auto w-[200px]",
                        key: tag.id,
                        value: tag
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(tag.name), 1)
                        ]),
                        _: 2
                      }, 1032, ["value"]);
                    }), 128))
                  ]),
                  _: 1
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      if (unref(form).errors.name) {
        _push(`<div>Tag Name required</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="flex justify-start gap-4 items-center"><!--[-->`);
      ssrRenderList(__props.note.tags, (tag) => {
        _push(`<div class="badge badge-info rounded-none flex items-center px-2 py-6 justify-between"><button type="button"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-4 h-4 stroke-current pb-0.5"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg></button> ${ssrInterpolate(tag.name)}</div>`);
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
            _push2(`</div><div${_scopeId}><form${_scopeId}><div class="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600"${_scopeId}><div class="flex items-center justify-between px-3 py-2 border-b dark:border-gray-600"${_scopeId}><div class="flex flex-wrap items-center divide-gray-200 sm:divide-x sm:rtl:divide-x-reverse dark:divide-gray-600"${_scopeId}><div class="flex items-center space-x-1 rtl:space-x-reverse sm:pe-4"${_scopeId}><button type="button" class="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"${_scopeId}><svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 12 20"${_scopeId}><path stroke="currentColor" stroke-linejoin="round" stroke-width="2" d="M1 6v8a5 5 0 1 0 10 0V4.5a3.5 3.5 0 1 0-7 0V13a2 2 0 0 0 4 0V6"${_scopeId}></path></svg><span class="sr-only"${_scopeId}>Attach file</span></button><button type="button" class="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"${_scopeId}><svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20"${_scopeId}><path d="M8 0a7.992 7.992 0 0 0-6.583 12.535 1 1 0 0 0 .12.183l.12.146c.112.145.227.285.326.4l5.245 6.374a1 1 0 0 0 1.545-.003l5.092-6.205c.206-.222.4-.455.578-.7l.127-.155a.934.934 0 0 0 .122-.192A8.001 8.001 0 0 0 8 0Zm0 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z"${_scopeId}></path></svg><span class="sr-only"${_scopeId}>Embed map</span></button><button type="button" class="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"${_scopeId}><svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20"${_scopeId}><path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z"${_scopeId}></path><path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z"${_scopeId}></path></svg><span class="sr-only"${_scopeId}>Upload image</span></button><button type="button" class="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"${_scopeId}><svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20"${_scopeId}><path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.96 2.96 0 0 0 .13 5H5Z"${_scopeId}></path><path d="M14.067 0H7v5a2 2 0 0 1-2 2H0v11a1.969 1.969 0 0 0 1.933 2h12.134A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.933-2ZM6.709 13.809a1 1 0 1 1-1.418 1.409l-2-2.013a1 1 0 0 1 0-1.412l2-2a1 1 0 0 1 1.414 1.414L5.412 12.5l1.297 1.309Zm6-.6-2 2.013a1 1 0 1 1-1.418-1.409l1.3-1.307-1.295-1.295a1 1 0 0 1 1.414-1.414l2 2a1 1 0 0 1-.001 1.408v.004Z"${_scopeId}></path></svg><span class="sr-only"${_scopeId}>Format code</span></button><button type="button" class="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"${_scopeId}><svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20"${_scopeId}><path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM13.5 6a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm-7 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm3.5 9.5A5.5 5.5 0 0 1 4.6 11h10.81A5.5 5.5 0 0 1 10 15.5Z"${_scopeId}></path></svg><span class="sr-only"${_scopeId}>Add emoji</span></button></div><div class="flex flex-wrap items-center space-x-1 rtl:space-x-reverse sm:ps-4"${_scopeId}><button type="button" class="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"${_scopeId}><svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 21 18"${_scopeId}><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.5 3h9.563M9.5 9h9.563M9.5 15h9.563M1.5 13a2 2 0 1 1 3.321 1.5L1.5 17h5m-5-15 2-1v6m-2 0h4"${_scopeId}></path></svg><span class="sr-only"${_scopeId}>Add list</span></button><button type="button" class="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"${_scopeId}><svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20"${_scopeId}><path d="M18 7.5h-.423l-.452-1.09.3-.3a1.5 1.5 0 0 0 0-2.121L16.01 2.575a1.5 1.5 0 0 0-2.121 0l-.3.3-1.089-.452V2A1.5 1.5 0 0 0 11 .5H9A1.5 1.5 0 0 0 7.5 2v.423l-1.09.452-.3-.3a1.5 1.5 0 0 0-2.121 0L2.576 3.99a1.5 1.5 0 0 0 0 2.121l.3.3L2.423 7.5H2A1.5 1.5 0 0 0 .5 9v2A1.5 1.5 0 0 0 2 12.5h.423l.452 1.09-.3.3a1.5 1.5 0 0 0 0 2.121l1.415 1.413a1.5 1.5 0 0 0 2.121 0l.3-.3 1.09.452V18A1.5 1.5 0 0 0 9 19.5h2a1.5 1.5 0 0 0 1.5-1.5v-.423l1.09-.452.3.3a1.5 1.5 0 0 0 2.121 0l1.415-1.414a1.5 1.5 0 0 0 0-2.121l-.3-.3.452-1.09H18a1.5 1.5 0 0 0 1.5-1.5V9A1.5 1.5 0 0 0 18 7.5Zm-8 6a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7Z"${_scopeId}></path></svg><span class="sr-only"${_scopeId}>Settings</span></button><button type="button" class="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"${_scopeId}><svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20"${_scopeId}><path d="M18 2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2ZM2 18V7h6.7l.4-.409A4.309 4.309 0 0 1 15.753 7H18v11H2Z"${_scopeId}></path><path d="M8.139 10.411 5.289 13.3A1 1 0 0 0 5 14v2a1 1 0 0 0 1 1h2a1 1 0 0 0 .7-.288l2.886-2.851-3.447-3.45ZM14 8a2.463 2.463 0 0 0-3.484 0l-.971.983 3.468 3.468.987-.971A2.463 2.463 0 0 0 14 8Z"${_scopeId}></path></svg><span class="sr-only"${_scopeId}>Timeline</span></button><button type="button" class="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"${_scopeId}><svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20"${_scopeId}><path d="M14.707 7.793a1 1 0 0 0-1.414 0L11 10.086V1.5a1 1 0 0 0-2 0v8.586L6.707 7.793a1 1 0 1 0-1.414 1.414l4 4a1 1 0 0 0 1.416 0l4-4a1 1 0 0 0-.002-1.414Z"${_scopeId}></path><path d="M18 12h-2.55l-2.975 2.975a3.5 3.5 0 0 1-4.95 0L4.55 12H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2Zm-3 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"${_scopeId}></path></svg><span class="sr-only"${_scopeId}>Download</span></button></div></div><button type="button" data-tooltip-target="tooltip-fullscreen" class="p-2 text-gray-500 rounded cursor-pointer sm:ms-auto hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"${_scopeId}><svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 19 19"${_scopeId}><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 1h5m0 0v5m0-5-5 5M1.979 6V1H7m0 16.042H1.979V12M18 12v5.042h-5M13 12l5 5M2 1l5 5m0 6-5 5"${_scopeId}></path></svg><span class="sr-only"${_scopeId}>Full screen</span></button><div id="tooltip-fullscreen" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"${_scopeId}> Show full screen <div class="tooltip-arrow" data-popper-arrow${_scopeId}></div></div></div>`);
            _push2(ssrRenderComponent(_sfc_main$4, {
              modelValue: unref(form),
              "onUpdate:modelValue": ($event) => isRef(form) ? form.value = $event : null
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="flex gap-4 items-center"${_scopeId}><button type="submit" class="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"${_scopeId}> Save </button>`);
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
            _push2(`</div></form></div><h2 class="mt-10 text-2xl text-gray-400"${_scopeId}>Files:</h2><div class="grid grid-cols-2 gap-4"${_scopeId}><!--[-->`);
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
                  createVNode("form", {
                    onSubmit: withModifiers(save, ["prevent"])
                  }, [
                    createVNode("div", { class: "w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600" }, [
                      createVNode("div", { class: "flex items-center justify-between px-3 py-2 border-b dark:border-gray-600" }, [
                        createVNode("div", { class: "flex flex-wrap items-center divide-gray-200 sm:divide-x sm:rtl:divide-x-reverse dark:divide-gray-600" }, [
                          createVNode("div", { class: "flex items-center space-x-1 rtl:space-x-reverse sm:pe-4" }, [
                            createVNode("button", {
                              type: "button",
                              class: "p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                            }, [
                              (openBlock(), createBlock("svg", {
                                class: "w-4 h-4",
                                "aria-hidden": "true",
                                xmlns: "http://www.w3.org/2000/svg",
                                fill: "none",
                                viewBox: "0 0 12 20"
                              }, [
                                createVNode("path", {
                                  stroke: "currentColor",
                                  "stroke-linejoin": "round",
                                  "stroke-width": "2",
                                  d: "M1 6v8a5 5 0 1 0 10 0V4.5a3.5 3.5 0 1 0-7 0V13a2 2 0 0 0 4 0V6"
                                })
                              ])),
                              createVNode("span", { class: "sr-only" }, "Attach file")
                            ]),
                            createVNode("button", {
                              type: "button",
                              class: "p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                            }, [
                              (openBlock(), createBlock("svg", {
                                class: "w-4 h-4",
                                "aria-hidden": "true",
                                xmlns: "http://www.w3.org/2000/svg",
                                fill: "currentColor",
                                viewBox: "0 0 16 20"
                              }, [
                                createVNode("path", { d: "M8 0a7.992 7.992 0 0 0-6.583 12.535 1 1 0 0 0 .12.183l.12.146c.112.145.227.285.326.4l5.245 6.374a1 1 0 0 0 1.545-.003l5.092-6.205c.206-.222.4-.455.578-.7l.127-.155a.934.934 0 0 0 .122-.192A8.001 8.001 0 0 0 8 0Zm0 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" })
                              ])),
                              createVNode("span", { class: "sr-only" }, "Embed map")
                            ]),
                            createVNode("button", {
                              type: "button",
                              class: "p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                            }, [
                              (openBlock(), createBlock("svg", {
                                class: "w-4 h-4",
                                "aria-hidden": "true",
                                xmlns: "http://www.w3.org/2000/svg",
                                fill: "currentColor",
                                viewBox: "0 0 16 20"
                              }, [
                                createVNode("path", { d: "M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" }),
                                createVNode("path", { d: "M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" })
                              ])),
                              createVNode("span", { class: "sr-only" }, "Upload image")
                            ]),
                            createVNode("button", {
                              type: "button",
                              class: "p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                            }, [
                              (openBlock(), createBlock("svg", {
                                class: "w-4 h-4",
                                "aria-hidden": "true",
                                xmlns: "http://www.w3.org/2000/svg",
                                fill: "currentColor",
                                viewBox: "0 0 16 20"
                              }, [
                                createVNode("path", { d: "M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.96 2.96 0 0 0 .13 5H5Z" }),
                                createVNode("path", { d: "M14.067 0H7v5a2 2 0 0 1-2 2H0v11a1.969 1.969 0 0 0 1.933 2h12.134A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.933-2ZM6.709 13.809a1 1 0 1 1-1.418 1.409l-2-2.013a1 1 0 0 1 0-1.412l2-2a1 1 0 0 1 1.414 1.414L5.412 12.5l1.297 1.309Zm6-.6-2 2.013a1 1 0 1 1-1.418-1.409l1.3-1.307-1.295-1.295a1 1 0 0 1 1.414-1.414l2 2a1 1 0 0 1-.001 1.408v.004Z" })
                              ])),
                              createVNode("span", { class: "sr-only" }, "Format code")
                            ]),
                            createVNode("button", {
                              type: "button",
                              class: "p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                            }, [
                              (openBlock(), createBlock("svg", {
                                class: "w-4 h-4",
                                "aria-hidden": "true",
                                xmlns: "http://www.w3.org/2000/svg",
                                fill: "currentColor",
                                viewBox: "0 0 20 20"
                              }, [
                                createVNode("path", { d: "M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM13.5 6a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm-7 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm3.5 9.5A5.5 5.5 0 0 1 4.6 11h10.81A5.5 5.5 0 0 1 10 15.5Z" })
                              ])),
                              createVNode("span", { class: "sr-only" }, "Add emoji")
                            ])
                          ]),
                          createVNode("div", { class: "flex flex-wrap items-center space-x-1 rtl:space-x-reverse sm:ps-4" }, [
                            createVNode("button", {
                              type: "button",
                              class: "p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                            }, [
                              (openBlock(), createBlock("svg", {
                                class: "w-4 h-4",
                                "aria-hidden": "true",
                                xmlns: "http://www.w3.org/2000/svg",
                                fill: "none",
                                viewBox: "0 0 21 18"
                              }, [
                                createVNode("path", {
                                  stroke: "currentColor",
                                  "stroke-linecap": "round",
                                  "stroke-linejoin": "round",
                                  "stroke-width": "2",
                                  d: "M9.5 3h9.563M9.5 9h9.563M9.5 15h9.563M1.5 13a2 2 0 1 1 3.321 1.5L1.5 17h5m-5-15 2-1v6m-2 0h4"
                                })
                              ])),
                              createVNode("span", { class: "sr-only" }, "Add list")
                            ]),
                            createVNode("button", {
                              type: "button",
                              class: "p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                            }, [
                              (openBlock(), createBlock("svg", {
                                class: "w-4 h-4",
                                "aria-hidden": "true",
                                xmlns: "http://www.w3.org/2000/svg",
                                fill: "currentColor",
                                viewBox: "0 0 20 20"
                              }, [
                                createVNode("path", { d: "M18 7.5h-.423l-.452-1.09.3-.3a1.5 1.5 0 0 0 0-2.121L16.01 2.575a1.5 1.5 0 0 0-2.121 0l-.3.3-1.089-.452V2A1.5 1.5 0 0 0 11 .5H9A1.5 1.5 0 0 0 7.5 2v.423l-1.09.452-.3-.3a1.5 1.5 0 0 0-2.121 0L2.576 3.99a1.5 1.5 0 0 0 0 2.121l.3.3L2.423 7.5H2A1.5 1.5 0 0 0 .5 9v2A1.5 1.5 0 0 0 2 12.5h.423l.452 1.09-.3.3a1.5 1.5 0 0 0 0 2.121l1.415 1.413a1.5 1.5 0 0 0 2.121 0l.3-.3 1.09.452V18A1.5 1.5 0 0 0 9 19.5h2a1.5 1.5 0 0 0 1.5-1.5v-.423l1.09-.452.3.3a1.5 1.5 0 0 0 2.121 0l1.415-1.414a1.5 1.5 0 0 0 0-2.121l-.3-.3.452-1.09H18a1.5 1.5 0 0 0 1.5-1.5V9A1.5 1.5 0 0 0 18 7.5Zm-8 6a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7Z" })
                              ])),
                              createVNode("span", { class: "sr-only" }, "Settings")
                            ]),
                            createVNode("button", {
                              type: "button",
                              class: "p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                            }, [
                              (openBlock(), createBlock("svg", {
                                class: "w-4 h-4",
                                "aria-hidden": "true",
                                xmlns: "http://www.w3.org/2000/svg",
                                fill: "currentColor",
                                viewBox: "0 0 20 20"
                              }, [
                                createVNode("path", { d: "M18 2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2ZM2 18V7h6.7l.4-.409A4.309 4.309 0 0 1 15.753 7H18v11H2Z" }),
                                createVNode("path", { d: "M8.139 10.411 5.289 13.3A1 1 0 0 0 5 14v2a1 1 0 0 0 1 1h2a1 1 0 0 0 .7-.288l2.886-2.851-3.447-3.45ZM14 8a2.463 2.463 0 0 0-3.484 0l-.971.983 3.468 3.468.987-.971A2.463 2.463 0 0 0 14 8Z" })
                              ])),
                              createVNode("span", { class: "sr-only" }, "Timeline")
                            ]),
                            createVNode("button", {
                              type: "button",
                              class: "p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                            }, [
                              (openBlock(), createBlock("svg", {
                                class: "w-4 h-4",
                                "aria-hidden": "true",
                                xmlns: "http://www.w3.org/2000/svg",
                                fill: "currentColor",
                                viewBox: "0 0 20 20"
                              }, [
                                createVNode("path", { d: "M14.707 7.793a1 1 0 0 0-1.414 0L11 10.086V1.5a1 1 0 0 0-2 0v8.586L6.707 7.793a1 1 0 1 0-1.414 1.414l4 4a1 1 0 0 0 1.416 0l4-4a1 1 0 0 0-.002-1.414Z" }),
                                createVNode("path", { d: "M18 12h-2.55l-2.975 2.975a3.5 3.5 0 0 1-4.95 0L4.55 12H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2Zm-3 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z" })
                              ])),
                              createVNode("span", { class: "sr-only" }, "Download")
                            ])
                          ])
                        ]),
                        createVNode("button", {
                          type: "button",
                          "data-tooltip-target": "tooltip-fullscreen",
                          class: "p-2 text-gray-500 rounded cursor-pointer sm:ms-auto hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                        }, [
                          (openBlock(), createBlock("svg", {
                            class: "w-4 h-4",
                            "aria-hidden": "true",
                            xmlns: "http://www.w3.org/2000/svg",
                            fill: "none",
                            viewBox: "0 0 19 19"
                          }, [
                            createVNode("path", {
                              stroke: "currentColor",
                              "stroke-linecap": "round",
                              "stroke-linejoin": "round",
                              "stroke-width": "2",
                              d: "M13 1h5m0 0v5m0-5-5 5M1.979 6V1H7m0 16.042H1.979V12M18 12v5.042h-5M13 12l5 5M2 1l5 5m0 6-5 5"
                            })
                          ])),
                          createVNode("span", { class: "sr-only" }, "Full screen")
                        ]),
                        createVNode("div", {
                          id: "tooltip-fullscreen",
                          role: "tooltip",
                          class: "absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
                        }, [
                          createTextVNode(" Show full screen "),
                          createVNode("div", {
                            class: "tooltip-arrow",
                            "data-popper-arrow": ""
                          })
                        ])
                      ]),
                      createVNode(_sfc_main$4, {
                        modelValue: unref(form),
                        "onUpdate:modelValue": ($event) => isRef(form) ? form.value = $event : null
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    createVNode("div", { class: "flex gap-4 items-center" }, [
                      createVNode("button", {
                        type: "submit",
                        class: "inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
                      }, " Save "),
                      createVNode(_sfc_main$3, {
                        on: unref(form).recentlySuccessful
                      }, {
                        default: withCtx(() => [
                          createTextVNode("saved")
                        ]),
                        _: 1
                      }, 8, ["on"])
                    ])
                  ], 32)
                ]),
                createVNode("h2", { class: "mt-10 text-2xl text-gray-400" }, "Files:"),
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
