import type { KeyValueStorage } from "./types";

export class LocalStoragePersister implements KeyValueStorage {
  
  async get(key: string) {
    const todos = localStorage.getItem(key);
    if (!todos) return [];
    return JSON.parse(todos);
  }

  async set<T>(key: string, value: T): Promise<void> {
    return localStorage.setItem(key, JSON.stringify(value));
  }

  async clear(): Promise<void> {
    return localStorage.clear();
  }

  async delete(key: string): Promise<void> {
    return localStorage.removeItem(key);
  }
}
