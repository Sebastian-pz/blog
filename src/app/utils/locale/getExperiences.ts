import enExperiences from "./en/experiences";
import esExperiences from "./es/experiences";

export default function getExperience(lang: string) {
  switch (lang) {
    case "es":
      return esExperiences;

    case "en":
      return enExperiences;

    default:
      return enExperiences;
  }
}
