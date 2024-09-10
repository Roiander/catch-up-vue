import en from "./locales/en.json";
import es from "./locales/es.json";
import fr from "./locales/fr.json";
import {createI18n} from "vue-i18n";

const i18n = createI18n({
    legacy: false, // you must specify 'legacy: false' option
    locale: "en", // set locale
    globalInjection: true, // inject global properties and methods to i18n instance
    messages:{
        en,
        es,
        fr
    }
});

export default i18n;