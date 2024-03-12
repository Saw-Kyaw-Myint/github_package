export * from "@/components/design/form";
import * as commonComponent from "@/components/design/form";
export * from "./form";

export const install = (Vue) => {
  Object.values(commonComponent)
    .filter((component) => component.name)
    .forEach((component) => {
      Vue.component(component.name, component);
    });
};
