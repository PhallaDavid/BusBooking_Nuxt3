import { ref } from "vue";

export const language = ref(
  typeof window !== "undefined"
    ? localStorage.getItem("language") || "en"
    : "en"
);

export function setLanguage(lang) {
  language.value = lang;
  if (typeof window !== "undefined") {
    localStorage.setItem("language", lang);
    window.dispatchEvent(new CustomEvent("language-changed", { detail: lang }));
  }
}

export function t(en, kh) {
  return language.value === "kh" ? kh : en;
}

export default { t, language, setLanguage };
