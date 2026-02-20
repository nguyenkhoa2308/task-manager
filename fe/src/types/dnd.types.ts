import type { Task } from "./task.types";
import type { Column } from "./board.types";

export interface DragData {
  type: "task" | "column";
  task?: Task;
  column?: Column;
  columnId?: string;
}
