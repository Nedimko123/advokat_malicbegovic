import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Image } from "@unpic/qwik";

export default component$(() => {
  return (
    <>
      <div class="flex flex-col gap-4 ">
        <h1 class=" font-extrabold text-3xl flex justify-center p-4">O Meni</h1>
        <div class="p-4 gap-4 flex-col md:flex md:flex-row items-center justify-center h-full">
          <div class="text-base md:text-3xl  gap-4 w-full md:w-2/3 [&>*]:first-letter:text-3xl [&>*]:first-letter:font-extrabold">
            Nakon diplomiranja na{" "}
            <span class="underline">Pravnom fakultetu u Zenici</span> započeo
            sam svoju profesionalnu karijeru kao zaposlenik u advokatskoj
            kancelariji. Po sticanju radnog iskustva u advokatakoj kancelariji,
            položio sam{" "}
            <span class="underline">pravosudni</span> i <span class="underline">advokatski ispit</span>, te osnovao{" "}
            <span class="underline">samostalnu advokatsku kancelariju</span>.
          </div>
          <Image
            class="w-full md:w-1/3 h-96 object-contain p-4"
            src="/kancelarija.jpg"
            alt="kancelarija-advokata-anisa-malicbegovica"
            width={350}
            height={350}
          />
        </div>
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "Advokat Malicbegovic - O Meni",
  meta: [
    {
      name: "description",
      content: "Advokat Anis Malicbegovic Zavidovici O meni",
    },
  ],
};
