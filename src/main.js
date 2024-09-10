import './assets/main.css'

import {createApp} from 'vue'
import App from './App.vue'
import Aura from '@primevue/themes/aura';
import PrimeVue from 'primevue/config'
import Card from "primevue/card";
import Button from "primevue/button";
import SelectButton from "primevue/selectbutton";
import i18n from "./i18n.js";
import Drawer from "primevue/drawer";
import Avatar from "primevue/avatar";
import Menubar from "primevue/menubar";

const app = createApp(App);
app.use(PrimeVue, {
    ripple: true, // enable ripple effect
    theme: {
        preset: Aura, options: {
            prefix: 'p', darkModeSelector: 'system', cssLayer: false
        }
    }
});
app.component('pv-avatar', Avatar)
app.component('pv-button', Button);
app.component('pv-card', Card);
app.component('pv-drawer', Drawer);
app.component('pv-select-button', SelectButton);
app.component('pv-menubar', Menubar);


app.use(i18n);

app.mount('#app');