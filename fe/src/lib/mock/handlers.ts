import type { ApiResponse } from "@/types";

export function mockResponse<T>(data: T, delay = 300): Promise<ApiResponse<T>> {
  return new Promise((resolve) =>
    setTimeout(() => resolve({ data, success: true }), delay),
  );
}

export function mockError(message: string, delay = 300): Promise<never> {
  return new Promise((_, reject) =>
    setTimeout(() => reject(new Error(message)), delay),
  );
}
