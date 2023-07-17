import _sfc_main from "./icon.vue.mjs";
const withInstall = (component) => {
  component.install = (app) => {
    const name = component.name;
    app.component(name, component);
  };
  return component;
};
const Icon = withInstall(_sfc_main);
export {
  Icon,
  Icon as default
};
