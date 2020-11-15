<template>
<section id="tinymce-editor"></section>
</template>

<script>
// import "./tinymce.min.js";
// import "./themes/silver/theme.min.js";
import tinymce from 'tinymce/tinymce';
import 'tinymce/themes/silver';
import 'tinymce/icons/default';
import './langs/zh_CN.js';
import 'tinymce/plugins/code';
import 'tinymce/plugins/lists';
import 'tinymce/plugins/advlist';
import 'tinymce/plugins/image';
import 'tinymce/plugins/fullscreen';
import 'tinymce/plugins/autosave';
import 'tinymce/plugins/imagetools';
import 'tinymce/plugins/table';

export default {
    mounted() {
        tinymce.init({
            selector: "#tinymce-editor",
            language: 'zh_CN',
            height: 400,
            menubar: 'file edit format table',
            menu: {
                format: {
                    title: 'Format',
                    items: 'underline strikethrough superscript subscript  blockformats fontformats fontsizes removeformat'
                }
            },
            plugins: 'code image imagetools lists advlist fullscreen autosave table',
            toolbar: 'Blocks Fonts  Bold Italic forecolor backcolor|AlignLeft AlignCenter AlignRight AlignJustify| image bullist numlist  code fullscreen',
            //上传图片地址
            images_upload_url: '/uploadImg',
            //有序列表OL只给数字和abc
            advlist_number_styles: 'default,lower-alpha'
        });
    },
};
</script>

<style lang="less" scoped>
@import url("./skins/ui/oxide/skin.min.css");
</style>
