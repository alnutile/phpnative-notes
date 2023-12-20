import { resolveComponent, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { useToast } from "vue-toastification";
import { useForm } from "@inertiajs/vue3";
const Resource_vue_vue_type_style_index_0_scope_true_lang = "";
const _sfc_main = {
  __name: "Resource",
  __ssrInlineRender: true,
  props: {
    modelValue: Object,
    note: Object
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    useToast();
    const props = __props;
    const emits = __emit;
    const form = useForm({
      file: null
    });
    const handleUploadImage = (event, insertImage, files) => {
      var _a;
      console.log(files[0]);
      console.log(insertImage);
      form.file = files[0];
      form.post(route("upload.file", {
        note: (_a = props.note) == null ? void 0 : _a.id
      }), {
        preserveScroll: true,
        onSuccess: () => {
          form.reset();
        }
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_md_editor = resolveComponent("v-md-editor");
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_v_md_editor, {
        "disabled-menus": [],
        onUploadImage: handleUploadImage,
        onSave: ($event) => emits("save"),
        modelValue: __props.modelValue.content,
        "onUpdate:modelValue": ($event) => __props.modelValue.content = $event,
        height: "900px"
      }, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Notes/Components/Resource.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
