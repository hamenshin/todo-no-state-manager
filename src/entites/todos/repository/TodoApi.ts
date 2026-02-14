import { type RequestConfig, type ApiResponse, httpClient } from "@/shared/api/HttpClient";
import type { TodosDTO } from "@/shared/dto/todoDto";
import type { TodoRepository } from "./types";

export class TodoApi implements TodoRepository {
  ENDPOINT = "todos";

  getTodo(config?: RequestConfig): ApiResponse<TodosDTO> {
    return httpClient.get<TodosDTO>(this.ENDPOINT, config?.options);
  }
}
