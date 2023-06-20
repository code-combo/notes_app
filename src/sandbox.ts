const addNote = document.querySelector(".add-note-btn") as HTMLDivElement;
const titleBox = document.querySelector(".add-note-form_title") as HTMLDivElement;
const messageBox = document.querySelector(".add-note-form_message") as HTMLDivElement;

document.addEventListener("paste", (e: Event) => {

    const target = e.target as HTMLElement; 

    if(target !== null && target.contentEditable === 'true') {
        const clipEvent = e as ClipboardEvent
        clipEvent.preventDefault();

        const clipboardData = clipEvent.clipboardData;
        const text = clipboardData?.getData("text/plain");
        document.execCommand("insertHtml", false, text);
    }
})