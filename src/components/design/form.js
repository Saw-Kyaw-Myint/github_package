import * as commonComponent from "@/components/design/form/index";

export const install = (Vue) => {
  Object.values(commonComponent)
    .filter((component) => component.name)
    .forEach((component) => {
      Vue.component(component.name, component);
    });
};

export * from "@/components/design/form/index";
