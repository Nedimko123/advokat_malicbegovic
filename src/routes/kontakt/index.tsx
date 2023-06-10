import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

const contactInfo = [
  {
    icon: "fa-solid fa-map",
    text: "Mehmed-paše Sokolovića 10E, Zavidovići 72220",
  },
  { icon: "fa-solid fa-mobile", text: "(+387) 062-653-586" },
  { icon: "fa-solid fa-phone", text: "(+387) 032-874-445" },
  { icon: "fa-solid fa-envelope", text: "advokat.malicbegovic@gmail.com" },
];

export default component$(() => {
  return (
    <>
      <div class="bg-third px-4 md:px-20 flex  flex-col py-4 gap-4 ">
        <h1 class="text-2xl font-bold uppercase flex justify-center">
          Kontakt informacije
        </h1>

        <div class="flex flex-col md:flex-row gap-4">
          <div class="md:w-1/2 flex flex-col items-start justify-center gap-4 ">
            {contactInfo.map((contact) => {
              return (
                <div 
                key={contact.text}
                class="flex flex-row items-center gap-4 text-base md:text-xl">
                  <i class={contact.icon} />
                  <p>{contact.text}</p>
                </div>
              );
            })}
          </div>
          <iframe
            class="md:w-1/2 w-full h-96 rounded-md"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11394.87615722871!2d18.146748!3d44.4389252!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475eeb257b99bceb%3A0xcf71271dff367d05!2sAdvokat%20Mali%C4%8Dbegovi%C4%87%20Anis!5e0!3m2!1sen!2sba!4v1686391242551!5m2!1sen!2sba"
            style="border:0;"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div class="flex flex-col gap-4 text-xl">
          <h1 class="text-2xl font-bold uppercase flex justify-center">
            Radno vrijeme
          </h1>
          <p>PONEDJELJAK - PETAK: 08:00 - 16:00</p>
          <p>SUBOTA: 08:00 - 12:00</p>
        </div>
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "Advokat Malicbegovic - Kontakt",
  meta: [
    {
      name: "description",
      content:
        "Advokat Anis Malicbegovic Zavidovici Kontakt Informacije Broj telefona email lokacija adresa",
    },
  ],
};
