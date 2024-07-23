import { Button } from "../../Common/Button/Button.js";
import { deleteTask } from "../../../data/data.js";
import { openEditTaskDialog } from "../../../data/data.js";

export function Task(task) {
    const container = document.createElement("li");
    container.append(
        task.title, 
        Button("Delete", () => deleteTask(task.id)),
        Button("Edit", () => openEditTaskDialog(task.id)),
    );

    return container;
}