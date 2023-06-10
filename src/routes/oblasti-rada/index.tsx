import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Image } from "@unpic/qwik";

const oblasti = [
  {
    image: "/civil.jpg",
    title: "GRAĐANSKO I PRIVREDNO PRAVO",
    texts: [
      {
        text: "Zastupanje svih pravnih subjekata u različitim vrstama građanskih i privrednih sporova.",
      },
      {
        text: "Sastav svih vrsta tužbi i pokretanje parničnih, vanparničnih i izvršnih postupaka.",
      },
      {
        text: "Registracija svih oblika privrednih društava sa domaćim ili inostranim kapitalom.",
      },
    ],
  },
  {
    image: "/real-estate.jpg",
    title: "STVARNO I IMOVINSKO PRAVO",
    texts: [
      {
        text: "Rješavanje svih imovinsko-pravnih predmeta vezanih za Zakon o stvarnim pravima.",
      },
      { text: "Zastupanje u postupcima utvrđivanja prava vlasništva." },
      {
        text: "Zastupanje u postupcima uspostavljanja prava služnosti na nekretninama I DRUGO.",
      },
    ],
  },
  {
    image: "/administrativno.jpg",
    title: "UPRAVNI POSTUPAK I UPRAVNI SPOR",
    texts: [
      {
        text: "Zastupanje u svim upravnim postupcima koji se vode pred upravnim organima u BiH (općinama, gradovima, ministarstvvima i drugima).",
      },
      { text: "Pokretanje upravnih postupaka iz svih oblasti upravnog prava." },
      {
        text: "Pokretanje upravnih sporova pred Kantonalnim sudovima i Vrhovnim sudovima FBiH i RS, sastavljanje tužbi za upravne sporove, zastupanje u upravnim sporovima, sastavljanje vanredno-pravnih lijekova u upravnim sporovima (zahtjev za zaštitu zakonitosti, zahtjev za vanredno preispitivanje sudskih odluka).",
      },
      { text: "Sastavljanje žalbi na odluke donesene u upravnom postupku." },
    ],
  },
  {
    image: "/labor.jpg",
    title: "RADNO PRAVO",
    texts: [
      {
        text: "Zastupanje zaposlenika i privrednih subjekata u svim vrstama radnopravnih sporova. ",
      },
      {
        text: "Savjetodavne usluge po pitanju primjene pozitivnih zakonskih propisisa iz oblasti rada i ravnopravnih odnosa kako za fizička lica tako i za pravna lica.",
      },
    ],
  },
  {
    image: "/criminal.jpg",
    title: "KRIVIČNO I PREKRŠAJNO PRAVO",
    texts: [
      {
        text: "Zastupanje i odbrane u krivičnim i prekršajnim postupcima, pružanje usluga savjetovanje kroz sve faze postupka.",
      },
    ],
  },
  {
    image: "/naknada-stete.jpg",
    title: "NAKNADA ŠTETE",
    texts: [
      {
        text: "Zastupanje stranaka pred osiguravajućim društvima i osiguravanje maksimalne naknade koju možete ostvariti kod istih.",
      },
      {
        text: "Podnošenje tužbi i zastupanje stranaka u postupcima ostvarivanja prava na naknadu štete.",
      },
      {
        text: "Šteta može biti materijalna na imovini oštećenog i nematerijalna za pretrpljene fizičke bolove, duševne bolove, zbog umanjenja životne aktivnosti, naruženosti, povrede ugleda časti ili slobode prava ličnosti, kao i za strah ukoliko jačina bola i straha to opravdava. U slučaju da vam je prouzrokovana šteta treba vam specijalizovani advokat za naknadu štete koji dobro poznaje relevantnu zakonsku materiju.",
      },
    ],
  },
  {
    image: "/porodicno.jpg",
    title: "PORODIČNO PRAVO",
    texts: [
      {
        text: "Pružam pravne savjete i zastupanje pred nadležnim sudovima u sporovima za razvod braka, sporovima oko podjele imovine stečene u toku trajanja braka ili vanbračne zajednice.",
      },
      {
        text: "Pružanje pravnih savjeta i zastupanje u sporovima za izdržavanje, kao i u postupcima vezanim za povjeravanje zajedničke djece na čuvanje, njegu i staranje. ",
      },
      {
        text: "Zastupanje u postupcima vezanim za lišenje roditeljskog prava.",
      },
      {
        text: "Vodim postupke utvrđivanja materinstva i očinstva kao i postupke priznanja materinstva i očinstva.",
      },
    ],
  },
  {
    image: "/court.jpg",
    title: "POSTUPCI PRED USTAVNIM SUDOM BOSNE I HERCEGOVINE",
    texts: [
      {
        text: "Sastavljanje apelacija i zastupanje stranaka pred Ustavnim sudom. ",
      },
    ],
  },
];

export default component$(() => {
  return (
    <>
      <div class=" p-4 flex flex-col gap-4">
        <h1 class="text-2xl flex justify-center uppercase font-extrabold">
          Oblasti Rada
        </h1>

        <div class="w-full snap-x snap-mandatory flex gap-10 overflow-scroll ">
          {oblasti.map((oblast) => {
            return (
              <div 
              key={oblast.title}
              class="relative flex min-h-[384px] md:min-w-[640px] min-w-[90%] ">
                <div class="cursor-pointer flex flex-col z-50 text-fourth p-4 gap-4 h-full rounded-md">
                  <h1 class="font-extrabold  text-2xl">{oblast.title}</h1>
                  {oblast.texts.map((text) => {
                    return <p class="text-fourth">{text.text}</p>;
                  })}
                </div>
                <Image
                  src={oblast.image}
                  layout="constrained"
                  class="absolute left-0 top-0 w-full h-full object-cover snap-center rounded-md"
                  width={800}
                  height={600}
                  alt={oblast.title}
                />
                <div class="absolute left-0 top-0 z-40 opacity-50 bg-black w-full h-full rounded-md" />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "Advokat Malicbegovic - Oblasti Rada",
  meta: [
    {
      name: "description",
      content: "Advokat Anis Malicbegovic Zavidovici Oblasti Rada",
    },
  ],
};
