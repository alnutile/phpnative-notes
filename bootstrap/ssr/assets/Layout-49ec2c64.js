import { mergeProps, useSSRContext, unref, withCtx, createTextVNode, toDisplayString, createVNode, inject, resolveDynamicComponent, openBlock, createBlock, ref, watchEffect, computed, provide } from "vue";
import { ssrRenderAttrs, ssrRenderSlot, ssrRenderList, ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderVNode, ssrRenderClass } from "vue/server-renderer";
import { Link, usePage } from "@inertiajs/vue3";
import { TransitionRoot, Dialog, TransitionChild, DialogPanel } from "@headlessui/vue";
import { HomeIcon, AdjustmentsVerticalIcon, XMarkIcon, Bars3Icon } from "@heroicons/vue/24/outline";
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$5 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<span${ssrRenderAttrs(mergeProps({ class: "bg-pink-700 text-pink-50 group flex gap-x-3 rounded-md p-2 text-sm leading-6 truncate font-semibold" }, _attrs))}>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</span>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Tag.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const Tag = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$4 = {
  __name: "Tags",
  __ssrInlineRender: true,
  props: {
    tags: Object
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<ul${ssrRenderAttrs(mergeProps({
        role: "list",
        class: "-mx-2 mt-2 space-y-1"
      }, _attrs))}><!--[-->`);
      ssrRenderList(__props.tags, (tag) => {
        _push(`<li class="flex justify-start gap-2 items-center"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-3 h-3 text-gray-500"><path stroke-linecap="round" stroke-linejoin="round" d="M5.25 8.25h15m-16.5 7.5h15m-1.8-13.5l-3.9 19.5m-2.1-19.5l-3.9 19.5"></path></svg>`);
        _push(ssrRenderComponent(unref(Link), {
          href: `${_ctx.route("home")}?tag=${tag.name}`
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(Tag, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(tag.name)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(tag.name), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(Tag, null, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(tag.name), 1)
                  ]),
                  _: 2
                }, 1024)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</li>`);
      });
      _push(`<!--]--></ul>`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Tags.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = {
  __name: "DesktopLeftNav",
  __ssrInlineRender: true,
  setup(__props) {
    const leftNav = inject("leftNav");
    const tags = inject("tags");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col" }, _attrs))}><div class="flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-800 bg-gray-900 px-6"><div class="flex h-16 shrink-0 items-center"><img class="h-12 w-auto rounded-full"${ssrRenderAttr("src", unref(usePage)().props.logo)}${ssrRenderAttr("alt", unref(usePage)().props.app_name)}></div><nav class="flex flex-1 flex-col"><ul role="list" class="flex flex-1 flex-col gap-y-7"><li><ul role="list" class="-mx-2 space-y-1"><!--[-->`);
      ssrRenderList(unref(leftNav), (item) => {
        _push(`<li>`);
        _push(ssrRenderComponent(unref(Link), {
          href: item.href,
          class: [
            _ctx.route().current(item.current) ? "bg-slate-600/10 text-gray-300" : "text-gray-300 hover:text-indigo-600 hover:bg-slate-800/10",
            "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
          ]
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(item.icon), {
                class: [item.current ? "text-indigo-600" : "text-gray-400 group-hover:text-indigo-600", "h-6 w-6 shrink-0"],
                "aria-hidden": "true"
              }, null), _parent2, _scopeId);
              _push2(` ${ssrInterpolate(item.name)}`);
            } else {
              return [
                (openBlock(), createBlock(resolveDynamicComponent(item.icon), {
                  class: [item.current ? "text-indigo-600" : "text-gray-400 group-hover:text-indigo-600", "h-6 w-6 shrink-0"],
                  "aria-hidden": "true"
                }, null, 8, ["class"])),
                createTextVNode(" " + toDisplayString(item.name), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</li>`);
      });
      _push(`<!--]--></ul></li><li><div class="text-xs font-semibold leading-6 text-gray-300">Tags</div>`);
      _push(ssrRenderComponent(_sfc_main$4, { tags: unref(tags) }, null, _parent));
      _push(`</li></ul></nav></div></div>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Layouts/DesktopLeftNav.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = {
  __name: "MobileLeftNav",
  __ssrInlineRender: true,
  setup(__props) {
    const leftNav = inject("leftNav");
    const tags = inject("tags");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex grow flex-col gap-y-5 overflow-y-auto bg-gray-900 px-6 pb-2" }, _attrs))}><div class="flex h-16 shrink-0 items-center"><img class="h-8 w-auto rounded-full"${ssrRenderAttr("src", unref(usePage)().props.logo)}${ssrRenderAttr("alt", unref(usePage)().props.app_name)}></div><nav class="flex flex-1 flex-col"><ul role="list" class="flex flex-1 flex-col gap-y-7"><li><ul role="list" class="-mx-2 space-y-1"><!--[-->`);
      ssrRenderList(unref(leftNav), (item) => {
        _push(`<li>`);
        _push(ssrRenderComponent(unref(Link), {
          href: item.href,
          class: [
            item.current ? "bg-slate-600/10 text-gray-300" : "text-gray-200 hover:text-indigo-600 hover:bg-gray-50",
            "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
          ]
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(item.icon), {
                class: [item.current ? "text-gray-300" : "text-gray-400 group-hover:text-indigo-600", "h-6 w-6 shrink-0"],
                "aria-hidden": "true"
              }, null), _parent2, _scopeId);
              _push2(` ${ssrInterpolate(item.name)}`);
            } else {
              return [
                (openBlock(), createBlock(resolveDynamicComponent(item.icon), {
                  class: [item.current ? "text-gray-300" : "text-gray-400 group-hover:text-indigo-600", "h-6 w-6 shrink-0"],
                  "aria-hidden": "true"
                }, null, 8, ["class"])),
                createTextVNode(" " + toDisplayString(item.name), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</li>`);
      });
      _push(`<!--]--></ul></li><li><div class="text-xs font-semibold leading-6 text-gray-400">Tags</div><ul role="list" class="-mx-2 mt-2 space-y-1"><!--[-->`);
      ssrRenderList(unref(tags), (tag) => {
        _push(`<li class="flex justify-start gap-2 items-center"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-3 h-3 text-gray-200"><path stroke-linecap="round" stroke-linejoin="round" d="M5.25 8.25h15m-16.5 7.5h15m-1.8-13.5l-3.9 19.5m-2.1-19.5l-3.9 19.5"></path></svg><a${ssrRenderAttr("href", tag.href)} class="${ssrRenderClass([tag.current ? "bg-slate-700/10 text-indigo-600" : "text-gray-200 hover:text-indigo-600 hover:bg-gray-400", "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"])}"><span class="truncate">${ssrInterpolate(tag.name)}</span></a></li>`);
      });
      _push(`<!--]--></ul></li></ul></nav></div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Layouts/MobileLeftNav.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  __name: "Banner",
  __ssrInlineRender: true,
  setup(__props) {
    const page = usePage();
    const show = ref(true);
    const style = ref("success");
    const message = ref("");
    watchEffect(async () => {
      var _a, _b;
      style.value = ((_a = page.props.flash) == null ? void 0 : _a.bannerStyle) || "success";
      message.value = ((_b = page.props.flash) == null ? void 0 : _b.message) || "";
      show.value = true;
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      if (show.value && message.value) {
        _push(`<div class="${ssrRenderClass({ "bg-indigo-500": style.value == "success", "bg-red-700": style.value == "danger" })}"><div class="max-w-screen-xl mx-auto py-2 px-3 sm:px-6 lg:px-8"><div class="flex items-center justify-between flex-wrap"><div class="w-0 flex-1 flex items-center min-w-0"><span class="${ssrRenderClass([{ "bg-indigo-600": style.value == "success", "bg-red-600": style.value == "danger" }, "flex p-2 rounded-lg"])}">`);
        if (style.value == "success") {
          _push(`<svg class="h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>`);
        } else {
          _push(`<!---->`);
        }
        if (style.value == "danger") {
          _push(`<svg class="h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"></path></svg>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</span><p class="ms-3 font-medium text-sm text-white truncate">${ssrInterpolate(message.value)}</p></div><div class="shrink-0 sm:ms-3"><button type="button" class="${ssrRenderClass([{ "hover:bg-indigo-600 focus:bg-indigo-600": style.value == "success", "hover:bg-red-600 focus:bg-red-600": style.value == "danger" }, "-me-1 flex p-2 rounded-md focus:outline-none sm:-me-2 transition"])}" aria-label="Dismiss"><svg class="h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path></svg></button></div></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Banner.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "Layout",
  __ssrInlineRender: true,
  props: {
    title: String
  },
  setup(__props) {
    const leftNav = [
      { name: "Dashboard", href: route("home"), icon: HomeIcon, current: "home" },
      { name: "Settings", href: route("settings"), icon: AdjustmentsVerticalIcon, current: "settings" }
    ];
    const tags = computed(() => {
      var _a;
      return (_a = usePage().props.tags) == null ? void 0 : _a.data;
    });
    provide("tags", tags);
    provide("leftNav", leftNav);
    const leftSidebarOpen = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "dark:bg-gray-900" }, _attrs))}>`);
      _push(ssrRenderComponent(unref(TransitionRoot), {
        as: "template",
        show: leftSidebarOpen.value
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Dialog), {
              as: "div",
              class: "lg:hidden relative z-50",
              onClose: ($event) => leftSidebarOpen.value = false
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(TransitionChild), {
                    as: "template",
                    enter: "transition-opacity ease-linear duration-300",
                    "enter-from": "opacity-0",
                    "enter-to": "opacity-100",
                    leave: "transition-opacity ease-linear duration-300",
                    "leave-from": "opacity-100",
                    "leave-to": "opacity-0"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="fixed inset-0 bg-gray-900/80"${_scopeId3}></div>`);
                      } else {
                        return [
                          createVNode("div", { class: "fixed inset-0 bg-gray-900/80" })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<div class="fixed inset-0 flex"${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(TransitionChild), {
                    as: "template",
                    enter: "transition ease-in-out duration-300 transform",
                    "enter-from": "-translate-x-full",
                    "enter-to": "translate-x-0",
                    leave: "transition ease-in-out duration-300 transform",
                    "leave-from": "translate-x-0",
                    "leave-to": "-translate-x-full"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(DialogPanel), { class: "relative mr-16 flex w-full max-w-xs flex-1" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(unref(TransitionChild), {
                                as: "template",
                                enter: "ease-in-out duration-300",
                                "enter-from": "opacity-0",
                                "enter-to": "opacity-100",
                                leave: "ease-in-out duration-300",
                                "leave-from": "opacity-100",
                                "leave-to": "opacity-0"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<div class="absolute left-full top-0 flex w-16 justify-center pt-5"${_scopeId5}><button type="button" class="-m-2.5 p-2.5"${_scopeId5}><span class="sr-only"${_scopeId5}>Close Left Sidebar</span>`);
                                    _push6(ssrRenderComponent(unref(XMarkIcon), {
                                      class: "h-6 w-6 text-white",
                                      "aria-hidden": "true"
                                    }, null, _parent6, _scopeId5));
                                    _push6(`</button></div>`);
                                  } else {
                                    return [
                                      createVNode("div", { class: "absolute left-full top-0 flex w-16 justify-center pt-5" }, [
                                        createVNode("button", {
                                          type: "button",
                                          class: "-m-2.5 p-2.5",
                                          onClick: ($event) => leftSidebarOpen.value = false
                                        }, [
                                          createVNode("span", { class: "sr-only" }, "Close Left Sidebar"),
                                          createVNode(unref(XMarkIcon), {
                                            class: "h-6 w-6 text-white",
                                            "aria-hidden": "true"
                                          })
                                        ], 8, ["onClick"])
                                      ])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_sfc_main$2, null, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(unref(TransitionChild), {
                                  as: "template",
                                  enter: "ease-in-out duration-300",
                                  "enter-from": "opacity-0",
                                  "enter-to": "opacity-100",
                                  leave: "ease-in-out duration-300",
                                  "leave-from": "opacity-100",
                                  "leave-to": "opacity-0"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "absolute left-full top-0 flex w-16 justify-center pt-5" }, [
                                      createVNode("button", {
                                        type: "button",
                                        class: "-m-2.5 p-2.5",
                                        onClick: ($event) => leftSidebarOpen.value = false
                                      }, [
                                        createVNode("span", { class: "sr-only" }, "Close Left Sidebar"),
                                        createVNode(unref(XMarkIcon), {
                                          class: "h-6 w-6 text-white",
                                          "aria-hidden": "true"
                                        })
                                      ], 8, ["onClick"])
                                    ])
                                  ]),
                                  _: 1
                                }),
                                createVNode(_sfc_main$2)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(DialogPanel), { class: "relative mr-16 flex w-full max-w-xs flex-1" }, {
                            default: withCtx(() => [
                              createVNode(unref(TransitionChild), {
                                as: "template",
                                enter: "ease-in-out duration-300",
                                "enter-from": "opacity-0",
                                "enter-to": "opacity-100",
                                leave: "ease-in-out duration-300",
                                "leave-from": "opacity-100",
                                "leave-to": "opacity-0"
                              }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "absolute left-full top-0 flex w-16 justify-center pt-5" }, [
                                    createVNode("button", {
                                      type: "button",
                                      class: "-m-2.5 p-2.5",
                                      onClick: ($event) => leftSidebarOpen.value = false
                                    }, [
                                      createVNode("span", { class: "sr-only" }, "Close Left Sidebar"),
                                      createVNode(unref(XMarkIcon), {
                                        class: "h-6 w-6 text-white",
                                        "aria-hidden": "true"
                                      })
                                    ], 8, ["onClick"])
                                  ])
                                ]),
                                _: 1
                              }),
                              createVNode(_sfc_main$2)
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode(unref(TransitionChild), {
                      as: "template",
                      enter: "transition-opacity ease-linear duration-300",
                      "enter-from": "opacity-0",
                      "enter-to": "opacity-100",
                      leave: "transition-opacity ease-linear duration-300",
                      "leave-from": "opacity-100",
                      "leave-to": "opacity-0"
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "fixed inset-0 bg-gray-900/80" })
                      ]),
                      _: 1
                    }),
                    createVNode("div", { class: "fixed inset-0 flex" }, [
                      createVNode(unref(TransitionChild), {
                        as: "template",
                        enter: "transition ease-in-out duration-300 transform",
                        "enter-from": "-translate-x-full",
                        "enter-to": "translate-x-0",
                        leave: "transition ease-in-out duration-300 transform",
                        "leave-from": "translate-x-0",
                        "leave-to": "-translate-x-full"
                      }, {
                        default: withCtx(() => [
                          createVNode(unref(DialogPanel), { class: "relative mr-16 flex w-full max-w-xs flex-1" }, {
                            default: withCtx(() => [
                              createVNode(unref(TransitionChild), {
                                as: "template",
                                enter: "ease-in-out duration-300",
                                "enter-from": "opacity-0",
                                "enter-to": "opacity-100",
                                leave: "ease-in-out duration-300",
                                "leave-from": "opacity-100",
                                "leave-to": "opacity-0"
                              }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "absolute left-full top-0 flex w-16 justify-center pt-5" }, [
                                    createVNode("button", {
                                      type: "button",
                                      class: "-m-2.5 p-2.5",
                                      onClick: ($event) => leftSidebarOpen.value = false
                                    }, [
                                      createVNode("span", { class: "sr-only" }, "Close Left Sidebar"),
                                      createVNode(unref(XMarkIcon), {
                                        class: "h-6 w-6 text-white",
                                        "aria-hidden": "true"
                                      })
                                    ], 8, ["onClick"])
                                  ])
                                ]),
                                _: 1
                              }),
                              createVNode(_sfc_main$2)
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(Dialog), {
                as: "div",
                class: "lg:hidden relative z-50",
                onClose: ($event) => leftSidebarOpen.value = false
              }, {
                default: withCtx(() => [
                  createVNode(unref(TransitionChild), {
                    as: "template",
                    enter: "transition-opacity ease-linear duration-300",
                    "enter-from": "opacity-0",
                    "enter-to": "opacity-100",
                    leave: "transition-opacity ease-linear duration-300",
                    "leave-from": "opacity-100",
                    "leave-to": "opacity-0"
                  }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "fixed inset-0 bg-gray-900/80" })
                    ]),
                    _: 1
                  }),
                  createVNode("div", { class: "fixed inset-0 flex" }, [
                    createVNode(unref(TransitionChild), {
                      as: "template",
                      enter: "transition ease-in-out duration-300 transform",
                      "enter-from": "-translate-x-full",
                      "enter-to": "translate-x-0",
                      leave: "transition ease-in-out duration-300 transform",
                      "leave-from": "translate-x-0",
                      "leave-to": "-translate-x-full"
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(DialogPanel), { class: "relative mr-16 flex w-full max-w-xs flex-1" }, {
                          default: withCtx(() => [
                            createVNode(unref(TransitionChild), {
                              as: "template",
                              enter: "ease-in-out duration-300",
                              "enter-from": "opacity-0",
                              "enter-to": "opacity-100",
                              leave: "ease-in-out duration-300",
                              "leave-from": "opacity-100",
                              "leave-to": "opacity-0"
                            }, {
                              default: withCtx(() => [
                                createVNode("div", { class: "absolute left-full top-0 flex w-16 justify-center pt-5" }, [
                                  createVNode("button", {
                                    type: "button",
                                    class: "-m-2.5 p-2.5",
                                    onClick: ($event) => leftSidebarOpen.value = false
                                  }, [
                                    createVNode("span", { class: "sr-only" }, "Close Left Sidebar"),
                                    createVNode(unref(XMarkIcon), {
                                      class: "h-6 w-6 text-white",
                                      "aria-hidden": "true"
                                    })
                                  ], 8, ["onClick"])
                                ])
                              ]),
                              _: 1
                            }),
                            createVNode(_sfc_main$2)
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ])
                ]),
                _: 1
              }, 8, ["onClose"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$3, null, null, _parent));
      _push(`<div class="sticky top-0 z-40 flex items-center gap-x-6 bg-slate-700/10 px-4 py-4 shadow-sm sm:px-6 lg:hidden"><button type="button" class="-m-2.5 p-2.5 text-gray-300 lg:hidden"><span class="sr-only">Open sidebar</span>`);
      _push(ssrRenderComponent(unref(Bars3Icon), {
        class: "h-6 w-6",
        "aria-hidden": "true"
      }, null, _parent));
      _push(`</button><div class="flex-1 text-sm font-semibold leading-6 text-gray-200">${ssrInterpolate(unref(usePage)().props.app_name)}</div></div><main class="lg:pl-72">`);
      _push(ssrRenderComponent(_sfc_main$1, null, null, _parent));
      _push(`<div class="xl:pl-10"><div class="px-4 py-10 sm:px-6 lg:px-8 lg:py-6">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div></div></main></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Layouts/Layout.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  Tag as T,
  _sfc_main as _
};
