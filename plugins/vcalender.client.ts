import VCalendar from "v-calendar";
import "v-calendar/src/styles/base.css";

export default defineNuxtPlugin((nuxtApp) => {
	nuxtApp.vueApp.use(VCalendar);
});
