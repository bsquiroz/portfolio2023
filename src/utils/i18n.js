import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      about: {
        title: "About me",
        paragraph_1:
          "When I'm not programming, I'm most likely jogging, eating, or sleeping, but overall, I'm always programming.",
        paragraph_2: `I enjoy challenges; for example, programming, jogging, eating, sleeping, and fitting something else in the same day. 😅`,
        link_presentation: "Here I introduce myself a little better 🙊",
      },
      games: {
        title: "Do you play?",
        principal_paragraph: `Well... Not everything has to be reading. Here you have some mini-games that I've created. I hope you enjoy them. Remember that the source codes are in my repository. Take a look 👀 and leave a little star ⭐, hehe!`,
      },
      header: {
        hobbie: "Sometimes an athlete.",
        age: "24 years old",
      },
      social: {
        title: "You can find me here. 👇🏽",
      },
      jobs: {
        title: "My collaborations.",
      },
    },
  },
  es: {
    translation: {
      about: {
        title: "Sobre mí",
        paragraph_1: `Cuando no estoy programando, lo más probable es que esté
					trotando, comiendo o durmiendo, pero, en general, siempre
					estoy programando.`,
        paragraph_2: `Me gustan los retos; por ejemplo, programar, trotar, comer,
					dormir y agregar algo más en el mismo día. 😅`,
        link_presentation: "Aquí me presento un poco mejor 🙊",
      },
      games: {
        title: "¿Juegas?",
        principal_paragraph: `Bueno... No todo tiene que ser lectura. Aquí tienes
						algunos minijuegos que he creado. Espero que te
						diviertas. Recuerda que los códigos fuente están en mi
						repositorio. Échales un vistazo 👀 y deja una estrellita
						⭐, ¡jeje!`,
      },
      header: {
        hobbie: "A veces deportista",
        age: "24 años",
      },
      social: {
        title: "Aquí me pueden encontrar. 👇🏽",
      },
      jobs: {
        title: "Mis colaboraciones ",
      },
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
