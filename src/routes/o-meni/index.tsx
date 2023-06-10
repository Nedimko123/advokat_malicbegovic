import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';


export default component$(() => {
  return (
    <>
    A
    </>
  );
});

export const head: DocumentHead = {
  title: 'Advokat Malicbegovic - O Meni',
  meta: [
    {
      name: 'description',
      content: 'Advokat Anis Malicbegovic Zavidovici O meni',
    },
  ],
};
