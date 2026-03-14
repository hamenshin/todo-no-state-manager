import type { LocalStoragePersister } from "@/shared/storages/LocalStoragePersister";
import type { FavoriteTodoRepository } from "./types";

export class FavoriteTodoStorage implements FavoriteTodoRepository {
  KEY_FAVORITE = "FAVORITE_TODOS";

  favorite: number[] = [];

  constructor(private readonly storage: LocalStoragePersister) {
    this.setInitFavorite();
  }

  async getFavoriteIds() {
    return this.storage.get(this.KEY_FAVORITE);
  }

  async toogleFavoriteTodos(id: number) {
    const isFavorite = this.favorite.includes(id);
    if (isFavorite) {
      this.favorite = this.favorite.filter((favoriteId) => favoriteId !== id);
    } else {
      this.favorite = [...this.favorite, id];
    }
    await this.storage.set(this.KEY_FAVORITE, this.favorite);
  }

  private async setInitFavorite() {
    const value = (await this.storage.get(this.KEY_FAVORITE)) ?? [];

    this.favorite = value;
  }
}
