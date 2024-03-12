import VueElegantButton from "./components/VueElegantButton.vue";

function install(Vue) {
	if (install.installed) return;
	install.installed = true;
	Vue.component("vue-elegant-button", VueElegantButton);
}

const plugin = {
	install,
};

let GlobalVue = null;
if (typeof window !== "undefined") {
	GlobalVue = window.Vue;
} else if (typeof global !== "undefined") {
	GlobalVue = global.vue;
}
if (GlobalVue) {
	GlobalVue.use(plugin);
}

VueElegantButton.install = install;

export default VueElegantButton;