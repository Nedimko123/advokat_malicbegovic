import { component$ } from "@builder.io/qwik";
import { Image } from "@unpic/qwik";

const socialMedia = [
  {
    icon: "fa-brands fa-facebook-f",
    link: "https://www.facebook.com/profile.php?id=100076287087784",
  },
  {
    icon: "fa-brands fa-linkedin",
    link: "https://www.linkedin.com/in/anis-mali%C4%8Dbegovi%C4%87-877981228",
  },
  {
    icon: "fa-brands fa-instagram",
    link: "https://www.instagram.com/anis.malicbegovic/?hl=en",
  },
];

export default component$(() => {
  return (
    <>
      <div class="flex justify-center">
        <div class="flex flex-col relative rounded-md w-[640px] h-48 shadow-md hover:scale-105 hover:shadow-lg transition duration-300 m-10">
          <div class="flex flex-col z-50 p-4">
            <div class="flex flex-row items-center gap-1 relative max-w-min">
              <h1 class="text-xl font-light">Anis</h1>
              <h1 class="text-xl font-bold"> Maličbegović</h1>
              <div class="absolute left-0 top-12 w-full h-1 border-b border-fourth"></div>
            </div>
            <p class="text-xs uppercase font-extralight">Advokat</p>
          </div>
          <div class="flex flex-row items-center gap-4 z-50 p-4">
            {socialMedia.map((social) => {
              return (
                <a 
                key={social.link}
                href={social.link}>
                  <div class="p-1 border border-fourth hover:text-third hover:border-third transition duration-300 ">
                    <i
                      class={`transition duration-300 w-6 h-6  text-center ${social.icon}`}
                    ></i>
                  </div>
                </a>
              );
            })}
          </div>
          <Image
            class="absolute rounded-md top-0 left-0 w-full h-full object-cover"
            src="/anis.jpg"
            alt="advokat-anis-malicbegovic"
            width={500}
            height={500}
          />
          <div class="absolute bg-black opacity-50 rounded-md top-0 left-0 w-full h-full object-cover z-10"/>
        </div>
      </div>
    </>
  );
});
