import { component$, useSignal } from "@builder.io/qwik";
import { Link, useLocation } from "@builder.io/qwik-city";

const links = [
  { name: "Početna", link: "/" },
  { name: "O meni", link: "/o-meni/" },
  { name: "Oblasti rada", link: "/oblasti-rada/" },
  { name: "Kontakt", link: "/kontakt/" },
];

export default component$(() => {
  const loc = useLocation();
  const isMobileDropdownOpen = useSignal(false);
  return (
    <header
      class="relative w-full bg-primary text-fourth border-b border-third px-10 py-4
    flex justify-between z-[60]
    "
    >
      <h1 class="text-xl">
        <Link href="/">Advokat Maličbegović</Link>
      </h1>
      <ul class="hidden md:flex flex-row gap-10 justify-end ">
        {links.map((link) => {
          return (
            <li key={link.name}>
              <a
                class={`text-lg ${
                  loc.url.pathname === link.link
                    ? "font-bold underline text-third"
                    : ""
                }`}
                href={link.link}
              >
                {link.name}
              </a>
            </li>
          );
        })}
      </ul>
      <div class="flex md:hidden justify-between items-center">
        <button
          onClick$={() => {
            isMobileDropdownOpen.value = !isMobileDropdownOpen.value;
          }}
        >
          <i class="fa-solid fa-bars text-2xl hover:rotate-90 transition duration-300"></i>
        </button>
      </div>

      <ul class={`${isMobileDropdownOpen.value? "tranlate-y-10": "-translate-y-[150%]"} transition duration-500 ease-out origin-top bg-secondary w-full left-0 absolute top-16 px-10 py-4 flex flex-col gap-10 z-40`}>
        {links.map((link) => { 
          return (
            <li key={link.link + link.name}>
              <a
                class={`text-lg ${
                  loc.url.pathname === link.link
                    ? "font-bold underline text-third"
                    : ""
                }`}
                href={link.link}
              >
                {link.name}
              </a>
            </li>
          );
        })}
      </ul>
    </header>
  );
});
