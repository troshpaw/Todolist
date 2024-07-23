import { data } from "../../data/data.js";
import { Button } from "../Common/Button/Button.js";
import { editTask } from "../../data/data.js";
import { closeEditTaskDialog } from "../../data/data.js";

export function EditTaskDialog(taskId) {
    const container = document.createElement("dialog");
    container.open = data.editTaskDialog.isOpen;
    
    const titleElement = document.createElement("h4");
    titleElement.innerText = "Edit Task";

    const inputElement = document.createElement("input");

    container.append(
        titleElement, 
        inputElement, 
        Button("Save", () => editTask(taskId, inputElement.value)), 
        Button("Cancel", () => closeEditTaskDialog())
    );

    return container;
}