<template>
  <section id="tinymce-editor"></section>
</template>

<script>
import tinymce from "tinymce/tinymce";
import "tinymce/themes/silver";
import "tinymce/icons/default";
// 引入富文本编辑器主题的js和css
import "tinymce/themes/silver/theme.min";
import "tinymce/skins/ui/oxide/skin.min.css";
// 扩展插件
import "tinymce/plugins/code";
import "tinymce/plugins/lists";
import "tinymce/plugins/advlist";
import "tinymce/plugins/image";
import "tinymce/plugins/fullscreen";
import "tinymce/plugins/autosave";
import "tinymce/plugins/imagetools";
import "tinymce/plugins/table";
import "tinymce/plugins/searchreplace";
import { postStr } from "../common/http";
export default {
  props: {
    value: {
      type: String,
      default: "",
    },
  },
  mounted() {
    tinymce.init({
      selector: "#tinymce-editor",
      auto_focus: true, //进入自动聚焦
      placeholder:'编辑时不要刷新、跳转页面,以防数据丢失',
      language: "zh_CN",
      language_url: "/tinymce/langs/zh_CN.js", // 语言包的路径
      height: 400,
      skin_url: "/tinymce/skins/ui/oxide",
      content_css: '/tinymce/skins/content/default/content.css',
      menubar: "file edit format table",
      menu: {
        format: {
          title: "Format",
          items:
            "underline strikethrough superscript subscript  fontformats fontsizes removeformat",
        },
      },
      plugins:
        " code  image imagetools lists advlist fullscreen autosave table searchreplace",
      toolbar:
        "formatselect Bold Italic forecolor backcolor|AlignLeft AlignCenter AlignRight AlignJustify| image bullist numlist searchreplace  code fullscreen",
      imagetools_cors_hosts: ["timgsa.baidu.com", "otherdomain.com"],
      imagetools_proxy: "proxy.php",
      imagetools_credentials_hosts: ["timgsa.baidu.com", "otherdomain.com"],
      images_upload_handler: async function (blobInfo, succFun, failFun) {
        let formData = new FormData();
        let file = blobInfo.blob();
        formData.append("file", file, file.name);
        let res = await postStr({
          url: "https://www.yunduanzhishi.xyz:3001/community/posting/uploadImg",
          data: formData,
        });
        if (res.err_code != 0) {
          failFun("HTTP Error: " + res.err_code);
        } else {
          succFun(res.result.imageUrl);
        }
      },
      //有序列表OL只给数字和abc
      advlist_number_styles: "default,lower-alpha",
      //监听tinymce初始化完成事件
      setup: (editor) => {
        editor.on("init", () => {
          editor.setContent(this.value);
        });
      },
      //监听input和change事件，实时更新value
      init_instance_callback: (editor) => {
        editor.on("input", (e) => {
          this.$emit("input", e.target.innerHTML);
        });
        editor.on("change", (e) => {
          this.$emit("input", e.level.content);
        });
      },
    });
  },
  beforeDestroy() {
    // 销毁组件前销毁编辑器
    tinymce.remove();
    // for (let i = tinymce.editors.length - 1; i > -1; i--) {
    //   let ed_id = tinymce.editors[i].id;
    //   tinymce.execCommand("mceRemoveEditor", true, ed_id);
    // }
  },
};
</script>
