import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import LawyerCard from "~/components/card/lawyer-card";

export default component$(() => {
  return (
    <>
      <div class="w-full bg-fourth">
        <LawyerCard />
      </div>
      <div class="text-xs md:text-lg bg-secondary px-4 py-10 grid grid-cols-2 gap-10 [&>*]:first-letter:text-4xl [&>*]:first-letter:font-extrabold">
        <p>
          Advokat Maličbegović je renomirani pravni stručnjak s bogatim
          iskustvom u različitim granama prava. Sa strašću za pravdu i predanim
          radom, Advokat Maličbegović pruža klijentima sveobuhvatne pravne
          usluge visokog kvaliteta.
        </p>
        <p>
          Naša kancelarija je posvećena zaštiti prava i interesa naših
          klijenata. Bez obzira na složenost slučaja, Advokat Maličbegović Vam
          pruža stručno zastupanje i savetovanje, istrajno radeći na postizanju
          najboljih mogućih rezultata za Vas.
        </p>

        <p>
          Advokat Maličbegović ima široko znanje i iskustvo u mnogim pravnim
          oblastima, uključujući građansko pravo, krivično pravo, porodično
          pravo, radno pravo i mnoge druge. Njegova stručnost obuhvata
          zastupanje klijenata pred sudom, savetovanje o pravnim pitanjima,
          pripremu pravnih dokumenata i alternativno rješavanje sporova.
        </p>

        <p>
          Naša filozofija je pružiti personalizovano pravno rješenje za svakog
          klijenta. Razumijemo da svaki slučaj ima svoje jedinstvene okolnosti i
          zahtijeve. Advokat Maličbegović pažljivo sluša Vaše brige i ciljeve,
          kako bi pružio pravno zastupanje koje je prilagođeno Vašim potrebama.
        </p>

        <p>
          Klijenti nam dolaze sa različitim pravnim problemima, i mi se
          posvećujemo pronalaženju najboljeg pravnog rješenja za svaki slučaj.
          Bez obzira da li se suočavate sa porodičnim sporom, imate pitanja u
          vezi sa poslovnim ugovorom ili vam je potrebna odbrana u krivičnom
          postupku, Advokat Maličbegović će se boriti za Vaša prava i interese.
        </p>

        <p>
          Na ovoj stranici možete pronaći više informacija o uslugama koje
          pružamo, kao i naše kontakt podatke kako biste nas mogli direktno
          kontaktirati. Ukoliko imate bilo kakva pitanja ili vam je potrebna
          pravna pomoć, slobodno nas kontaktirajte. Advokat Maličbegović je tu
          da vam pruži stručnu podršku i pomogne vam da postignete pravdu koju
          zaslužujete.
        </p>
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "Advokat Maličbegović",
  meta: [
    {
      name: "description",
      content: "Advokat Anis Maličbegović Zavidovici",
    },
  ],
};
