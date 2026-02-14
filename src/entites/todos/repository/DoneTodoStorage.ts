import type { LocalStoragePersister } from "@/shared/storages/LocalStoragePersister";
import type { DoneTodoRepository } from "./types";

export class DoneTodoStorage implements DoneTodoRepository {
  KEY_FAVORITE = "COMPLETED_FAVORITE";

  completed: number[] = [];

  constructor(private readonly storage: LocalStoragePersister) {
    this.setInitCompleted();
  }

  getCompletedIds() {
    return this.storage.get(this.KEY_FAVORITE);
  }

  toogleCompletedTodos(id: number) {
    const isDone = this.completed.includes(id);
    if (isDone) {
      this.completed = this.completed.filter((completedId) => completedId !== id);
    } else {
      this.completed = [...this.completed, id];
    }
    this.storage.set(this.KEY_FAVORITE, this.completed);
  }

  private async setInitCompleted() {
    const value = (await this.storage.get(this.KEY_FAVORITE)) ?? [];

    this.completed = value;
  }
}
