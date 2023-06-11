import { component$ } from '@builder.io/qwik';
import { useServerTimeLoader } from '~/routes/layout';


export default component$(() => {
  const time = useServerTimeLoader();

  return (
    <footer class=" w-full h-14  px-4 md:px-10 border-t border-third bg-secondary py-4">
     <p>© Advokat Maličbegović Anis - {time.value.date} g.</p>
    </footer>
  );
});
