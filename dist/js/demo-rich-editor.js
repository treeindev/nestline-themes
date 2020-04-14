// Quill Rich Text Editor
const editor = new Quill('#rich-text-editor', {
    modules: { 
        toolbar: [
            [{ header: [2, false] }],
            ['bold', 'italic', 'underline'],
            ['link'],
            [{ 'list': 'ordered'}, { 'list': 'bullet' }]
        ]
    },
    theme: 'snow'
});