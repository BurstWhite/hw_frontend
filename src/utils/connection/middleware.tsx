import { API_ENDPOINT } from "./base-connection"

interface ServerMiddleware {
    request(url: string, options: RequestInit): Promise<Response>
}

export class BasicServerMiddleware implements ServerMiddleware {
  async request(url: string, options: RequestInit = {}): Promise<Response> {
    const headers = {
      'Content-Type': 'application/json',
      'Accept': '*/*',
      'Accept-Encoding': 'gzip, deflate, br',
      'Connection': 'keep-alive',
      ...options.headers,
    };

    // console.log(`${API_ENDPOINT}${url}`, headers);

    const response = await fetch(`${API_ENDPOINT}${url}`, {
      ...options,
      headers,
    });
    return response;
  }
}
