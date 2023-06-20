"use strict";
const addNote = document.querySelector(".add-note-btn");
const titleBox = document.querySelector(".add-note-form_title");
const messageBox = document.querySelector(".add-note-form_message");
document.addEventListener("paste", (e) => {
    const target = e.target;
    if (target !== null && target.contentEditable === 'true') {
        const clipEvent = e;
        clipEvent.preventDefault();
        const clipboardData = clipEvent.clipboardData;
        const text = clipboardData === null || clipboardData === void 0 ? void 0 : clipboardData.getData("text/plain");
        document.execCommand("insertHtml", false, text);
    }
});
