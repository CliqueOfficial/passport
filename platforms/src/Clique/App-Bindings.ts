import { PlatformOptions } from "../types";
import { Platform } from "../utils/platform";
export class CliquePlatform extends Platform {
  platformId = "Clique";
  path = "clique";
  clientId: string = null;
  redirectUri: string = null;

  constructor(options: PlatformOptions = {}) {
    super();
    this.clientId = options.clientId as string;
    this.redirectUri = options.redirectUri as string;
  }
  async getOAuthUrl(state: string): Promise<string> {
    const githubUrl = await Promise.resolve(
      `https://github.com/login/oauth/authorize?client_id=${this.clientId}&redirect_uri=${this.redirectUri}&state=${state}`
    );
    return githubUrl;
  }
}
