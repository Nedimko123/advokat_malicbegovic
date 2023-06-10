import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Image } from "@unpic/qwik";

export default component$(() => {
  return (
    <>
      <div class="flex flex-col gap-4 bg-primary">
        <h1 class=" font-extrabold text-3xl flex justify-center p-4">O Meni</h1>
        <div class="p-4 bg-secondary gap-4 flex-col md:flex md:flex-row items-center justify-center h-full">
          <div class="flex flex-col gap-4 w-full md:w-1/2 [&>*]:first-letter:text-3xl [&>*]:first-letter:font-extrabold">
            <p>
              Završio sam Gimnaziju "Rizah Odžečkić" sa odličnim uspjehom,
              stičući temelje znanja i vejština koje su mi bile potrebne za
              dalju karijeru u pravnom svetu. Nakon toga, upisao sam i završio
              Pravni fakultet u Zenici gdje sam stekao diplomu iz prava. Tokom
              studija, intenzivno sam se posvetio proučavanju raznih oblasti
              prava, razvijajući razumijevanje zakonodavstva i pravnih procesa.
            </p>
            <p>
              Nakon polaganja pravusdnog ispita i advokature, započeo sam svoju
              karijeru kao advokat. Već duži niz godina uspješno se bavim
              advokaturom, pružajući pravnu podršku i zastupajući interese
              svojih klijenata. Tokom tog perioda, stekao sam dragocijeno
              iskustvo u različitim pravnim oblastima i stekao reputaciju kao
              pouzdan i stručan advokat.
            </p>
          </div>
          <Image
            class="w-full md:w-1/2 h-96 object-contain p-4"
            src="/kancelarija.jpg"
            alt="kancelarija-advokata-anisa-malicbegovica"
            width={350}
            height={350}
          />
        </div>
        <div class="grid grid-cols-2 gap-10 p-4 [&>*]:first-letter:text-3xl [&>*]:first-letter:font-extrabold">
          <p>
            Advokatura je moja strast. Od malih nogu sam bio fasciniran pravdom
            i idejom da mogu pomoći ljudima u zaštiti njihovih prava. Vjerujem
            da pravda treba biti dostupna svima i da je svaki pojedinac
            zaslužuje. Strast prema advokaturi pokreće me da radim naporno i
            predano za svoje klijente, kako bih osigurao da njihovi interesi
            budu pravilno zastupljeni.
          </p>
          <p>
            U svakom slučaju koji mi je povjeren, posvećujem se detaljnoj
            analizi, istraživanju i pripremi, kako bih pružio najbolje moguće
            pravno zastupanje. Vjerujem u važnost individualizovanog pristupa i
            razumijevanja potreba i ciljeva svakog klijenta. Moja posvećenost i
            pažnja prema detaljima omogućavaju mi da pružim kvalitetne pravne
            savjete i pomognem klijentima da postignu željene rezultate.
          </p>
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
