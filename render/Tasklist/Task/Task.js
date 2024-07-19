import { Button } from "../../Common/Button/Button.js";
import { deleteTask } from "../../../data/data.js";
import { EditTaskDialog } from "../../EditTaskDialog/EditTaskDialog.js";

export function Task(task) {
    const container = document.createElement("li");
    container.append(
        task.title, 
        Button("Delete", () => deleteTask(task.id)),
        Button("Edit", () => EditTaskDialog(task.id))
    );

    return container;
}