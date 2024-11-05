import { TSelectorConfig } from "./types";

let _configs: TSelectorConfig;

export function initConfigs(configs: TSelectorConfig) {
  _configs = configs;
}

export function getConfigs(): TSelectorConfig {
  return _configs;
}
