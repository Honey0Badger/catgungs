<template>
    <div id="app">
        <ckeditor :editor="editor" v-model="editorData" :config="editorConfig"></ckeditor>
    </div>
</template>

<script>
    import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

    export default {
        name: 'Editor',
        data() {
            return {
                editor: ClassicEditor,
                editorData: '<p></p>',
                editorConfig: {
                    // The configuration of the editor.
                }
            };
        }
    }
</script>
