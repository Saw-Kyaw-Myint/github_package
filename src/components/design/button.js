export * from "@/components/design/button";
import * as commonComponent from "@/components/design/button";
export * from "./form";

export const install = (Vue) => {
  Object.values(commonComponent)
    .filter((component) => component.name)
    .forEach((component) => {
      Vue.component(component.name, component);
    });
};
