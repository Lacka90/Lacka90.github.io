import { dotenv } from '../config/dotenv';

export class ConfigService {
  private dotenv = dotenv;

  public getConfig() {
    return this.dotenv;
  }
}
