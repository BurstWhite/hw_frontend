import { API_ENDPOINT } from "./base-connection"

interface ServerMiddleware {
    request(url: string, options: RequestInit): Promise<Response>
}

export class BasicServerMiddleware implements ServerMiddleware {
  async request(url: string, options: RequestInit = {}): Promise<Response> {
    const headers = {
      "Content-Type": "application/json",
      ...options.headers,
    };
    const response = await fetch(`${API_ENDPOINT}${url}`, {
      ...options,
      headers,
      method: options.method, // 或者根据需要更改
    });
    if (!response.ok) {
      throw new Error("Server responded with an error.");
    }
    return response;
  }
}
