import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';


export default component$(() => {
  return (
    <>
    <div class="bg-third p-4">
    <p>Anis</p>
    </div>
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
