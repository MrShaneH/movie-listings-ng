export class ConfigurationResponse {
  public images: ImagesConfig;
  public change_keys: string[];
}

export class ImagesConfig {
  public base_url: string;
  public secure_base_url: string;
  public backdrop_sizes: string[];
  public logo_sizes: string[];
  public poster_sizes: string[];
  public profile_sizes: string[];
  public still_sizes: string[];
}
