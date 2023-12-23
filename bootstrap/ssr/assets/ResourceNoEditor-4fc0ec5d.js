import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate } from "vue/server-renderer";
import { useToast } from "vue-toastification";
import { useForm } from "@inertiajs/vue3";
const _sfc_main = {
  __name: "ResourceNoEditor",
  __ssrInlineRender: true,
  props: {
    modelValue: Object,
    note: Object
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    useToast();
    useForm({
      file: null
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "px-4 py-2 bg-white rounded-b-lg dark:bg-gray-800" }, _attrs))}><label for="editor" class="sr-only">Publish post</label><textarea id="editor" rows="45" placeholder="Start writing..." required class="block w-full px-0 text-lg text-gray-800 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400">${ssrInterpolate(__props.modelValue.content)}</textarea></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Notes/Components/ResourceNoEditor.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
