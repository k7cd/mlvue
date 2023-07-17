import * as components from "../index";
declare module "@vue/runtime-core" {
  export interface GlobalComponents {
    MlButton: typeof components.Button;
    MlIcon: typeof components.Icon;
  }
}
export {};
