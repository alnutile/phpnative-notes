import { mergeProps, unref, useSSRContext, resolveDirective, withCtx, createVNode, createTextVNode, toDisplayString, openBlock, createBlock, createCommentVNode, withModifiers, withDirectives, vModelText, Fragment, renderList } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderComponent, ssrRenderAttr, ssrGetDirectiveProps } from "vue/server-renderer";
import { _ as _sfc_main$2, T as Tag } from "./Layout-85fa3394.js";
import { Link, useForm, router } from "@inertiajs/vue3";
import { useToast } from "vue-toastification";
import "@heroicons/vue/24/outline";
const _sfc_main$1 = {
  __name: "Pagination",
  __ssrInlineRender: true,
  props: {
    links: Object,
    meta: Object
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<nav${ssrRenderAttrs(mergeProps({
        "aria-label": "Paginated Posts",
        class: "flex justify-between w-full mx-auto items-center max-w-7xl"
      }, _attrs))}><div class="text-gray-500 font-semibold"> Showing ${ssrInterpolate(__props.meta.from)} to ${ssrInterpolate(__props.meta.to)} of ${ssrInterpolate(__props.meta.total)}</div><ul class="inline-flex -space-x-px text-base h-10"><!--[-->`);
      ssrRenderList(__props.meta.links, (page, index) => {
        _push(`<li>`);
        if (index === 0) {
          _push(ssrRenderComponent(unref(Link), {
            href: page.url,
            class: "flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          }, null, _parent));
        } else if (index === __props.meta.links.length - 1) {
          _push(ssrRenderComponent(unref(Link), {
            href: page.url,
            class: "flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          }, null, _parent));
        } else {
          _push(ssrRenderComponent(unref(Link), {
            href: page.url,
            class: [{ "text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white": page.active }, "flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"]
          }, null, _parent));
        }
        _push(`</li>`);
      });
      _push(`<!--]--></ul></nav>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Pagination.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "Home",
  __ssrInlineRender: true,
  props: {
    notes: Object,
    search: String,
    error: String,
    tag: String
  },
  setup(__props) {
    const toast = useToast();
    const props = __props;
    const form = useForm({
      search: props.search
    });
    const create = () => {
      router.visit(route("notes.create"));
    };
    const submit = () => {
      form.get(route("home"), {
        onError: (params) => {
          toast.error("Error with search");
        },
        preserveScroll: true
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _directive_shortkey = resolveDirective("shortkey");
      const _directive_auto_animate = resolveDirective("auto-animate");
      _push(ssrRenderComponent(_sfc_main$2, _attrs, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h2 class="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight"${_scopeId}> Home </h2>`);
          } else {
            return [
              createVNode("h2", { class: "font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight" }, " Home ")
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div${_scopeId}><div class="max-w-full mx-auto sm:px-2 lg:px-2 dark:text-gray-300 mt-4"${_scopeId}>`);
            if (__props.error) {
              _push2(`<div class="text-white"${_scopeId}>Error: ${ssrInterpolate(__props.error)}</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div${_scopeId}><form${_scopeId}><label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"${_scopeId}>Search</label><div class="relative"${_scopeId}><div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"${_scopeId}><svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20"${_scopeId}><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"${_scopeId}></path></svg></div><input${ssrRenderAttr("value", unref(form).search)} type="search" id="default-search" class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..." required${_scopeId}><div class="absolute end-2.5 bottom-2.5 top-2 flex items-center gap-2 justify-end"${_scopeId}><button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"${_scopeId}>Search</button>`);
            _push2(ssrRenderComponent(unref(Link), {
              href: _ctx.route("home"),
              type: "button",
              class: "text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Reset`);
                } else {
                  return [
                    createTextVNode("Reset")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div></form></div><h2 class="text-gray-300 mb-4 mt-4 flex justify-between items-center"${_scopeId}><div class="flex gap-2 items-center"${_scopeId}><span${_scopeId}>Latest Notes</span>`);
            if (__props.tag) {
              _push2(`<span class="flex justify-start gap-2 items-center"${_scopeId}>Filtered by tag: `);
              _push2(ssrRenderComponent(Tag, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(__props.tag)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(__props.tag), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</span>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
            _push2(ssrRenderComponent(unref(Link), mergeProps({
              onShortkey: ($event) => create(),
              href: _ctx.route("notes.create"),
              type: "button",
              class: "text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
            }, ssrGetDirectiveProps(_ctx, _directive_shortkey, ["ctrl", "c"])), {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Create`);
                } else {
                  return [
                    createTextVNode("Create")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</h2><div${ssrRenderAttrs(mergeProps({ class: "grid grid-cols-1 justify-center gap-2 mx-auto w-full" }, ssrGetDirectiveProps(_ctx, _directive_auto_animate)))}${_scopeId}><!--[-->`);
            ssrRenderList(__props.notes.data, (note) => {
              _push2(`<div class="block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"${_scopeId}><h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-200 dark:text-pink-600 flex items-center justify-between"${_scopeId}>`);
              _push2(ssrRenderComponent(unref(Link), {
                href: note.route,
                type: "button"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(note.title)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(note.title), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`<span class="text-sm"${_scopeId}>${ssrInterpolate(note.date)}</span></h5><div class="font-normal text-gray-700 dark:text-gray-400"${_scopeId}>${note.truncated}</div><div class="flex justify-end gap-2 items-center mt-5"${_scopeId}>`);
              _push2(ssrRenderComponent(unref(Link), {
                href: note.route,
                type: "button",
                class: "text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`Edit`);
                  } else {
                    return [
                      createTextVNode("Edit")
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</div></div>`);
            });
            _push2(`<!--]--></div><div class="mt-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$1, {
              meta: __props.notes.meta,
              link: __props.notes.links
            }, null, _parent2, _scopeId));
            _push2(`</div></div></div>`);
          } else {
            return [
              createVNode("div", null, [
                createVNode("div", { class: "max-w-full mx-auto sm:px-2 lg:px-2 dark:text-gray-300 mt-4" }, [
                  __props.error ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "text-white"
                  }, "Error: " + toDisplayString(__props.error), 1)) : createCommentVNode("", true),
                  createVNode("div", null, [
                    createVNode("form", {
                      onSubmit: withModifiers(submit, ["prevent"])
                    }, [
                      createVNode("label", {
                        for: "default-search",
                        class: "mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                      }, "Search"),
                      createVNode("div", { class: "relative" }, [
                        createVNode("div", { class: "absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none" }, [
                          (openBlock(), createBlock("svg", {
                            class: "w-4 h-4 text-gray-500 dark:text-gray-400",
                            "aria-hidden": "true",
                            xmlns: "http://www.w3.org/2000/svg",
                            fill: "none",
                            viewBox: "0 0 20 20"
                          }, [
                            createVNode("path", {
                              stroke: "currentColor",
                              "stroke-linecap": "round",
                              "stroke-linejoin": "round",
                              "stroke-width": "2",
                              d: "m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                            })
                          ]))
                        ]),
                        withDirectives(createVNode("input", {
                          "onUpdate:modelValue": ($event) => unref(form).search = $event,
                          type: "search",
                          id: "default-search",
                          class: "block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
                          placeholder: "Search...",
                          required: ""
                        }, null, 8, ["onUpdate:modelValue"]), [
                          [vModelText, unref(form).search]
                        ]),
                        createVNode("div", { class: "absolute end-2.5 bottom-2.5 top-2 flex items-center gap-2 justify-end" }, [
                          createVNode("button", {
                            type: "submit",
                            class: "text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                          }, "Search"),
                          createVNode(unref(Link), {
                            href: _ctx.route("home"),
                            type: "button",
                            class: "text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Reset")
                            ]),
                            _: 1
                          }, 8, ["href"])
                        ])
                      ])
                    ], 32)
                  ]),
                  createVNode("h2", { class: "text-gray-300 mb-4 mt-4 flex justify-between items-center" }, [
                    createVNode("div", { class: "flex gap-2 items-center" }, [
                      createVNode("span", null, "Latest Notes"),
                      __props.tag ? (openBlock(), createBlock("span", {
                        key: 0,
                        class: "flex justify-start gap-2 items-center"
                      }, [
                        createTextVNode("Filtered by tag: "),
                        createVNode(Tag, null, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(__props.tag), 1)
                          ]),
                          _: 1
                        })
                      ])) : createCommentVNode("", true)
                    ]),
                    withDirectives((openBlock(), createBlock(unref(Link), {
                      onShortkey: ($event) => create(),
                      href: _ctx.route("notes.create"),
                      type: "button",
                      class: "text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Create")
                      ]),
                      _: 1
                    }, 8, ["onShortkey", "href"])), [
                      [_directive_shortkey, ["ctrl", "c"]]
                    ])
                  ]),
                  withDirectives((openBlock(), createBlock("div", { class: "grid grid-cols-1 justify-center gap-2 mx-auto w-full" }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(__props.notes.data, (note) => {
                      return openBlock(), createBlock("div", {
                        key: note.id,
                        class: "block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
                      }, [
                        createVNode("h5", { class: "mb-2 text-2xl font-bold tracking-tight text-gray-200 dark:text-pink-600 flex items-center justify-between" }, [
                          createVNode(unref(Link), {
                            href: note.route,
                            type: "button"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(note.title), 1)
                            ]),
                            _: 2
                          }, 1032, ["href"]),
                          createVNode("span", { class: "text-sm" }, toDisplayString(note.date), 1)
                        ]),
                        createVNode("div", {
                          class: "font-normal text-gray-700 dark:text-gray-400",
                          innerHTML: note.truncated
                        }, null, 8, ["innerHTML"]),
                        createVNode("div", { class: "flex justify-end gap-2 items-center mt-5" }, [
                          createVNode(unref(Link), {
                            href: note.route,
                            type: "button",
                            class: "text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Edit")
                            ]),
                            _: 2
                          }, 1032, ["href"])
                        ])
                      ]);
                    }), 128))
                  ])), [
                    [_directive_auto_animate]
                  ]),
                  createVNode("div", { class: "mt-4" }, [
                    createVNode(_sfc_main$1, {
                      meta: __props.notes.meta,
                      link: __props.notes.links
                    }, null, 8, ["meta", "link"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Dashboard/Home.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
