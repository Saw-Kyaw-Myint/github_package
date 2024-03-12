import * as commonComponent from "@/components/design/button/index";

export const install = (Vue) => {
  Object.values(commonComponent)
    .filter((component) => component.name)
    .forEach((component) => {
      Vue.component(component.name, component);
    });
};
export * from "@/components/design/button/index";
