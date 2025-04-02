import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen p-6 bg-white text-gray-900">
      <section className="mb-12">
        <h1 className="text-4xl font-bold mb-4">Hola, soy Alan Ortiz</h1>
        <p className="text-lg max-w-xl">
          Desarrollador especializado en JavaScript. Disfruto crear aplicaciones web prácticas,
          rápidas y funcionales usando tecnologías como Node.js, React y otras joyas del mundo JS.
          Me enfoco en escribir código claro, mantener buena comunicación y adaptarme a lo que cada
          proyecto necesita.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Proyectos</h2>
        <div className="grid gap-4 md:grid-cols-3">
          <div className="border rounded-xl p-4 shadow">
            <h3 className="text-lg font-medium">Spark Creative House</h3>
            <p className="text-sm mb-2">Sitio web corporativo para agencia creativa.</p>
            <Link href="https://www.sparkcreativehouse.com/" target="_blank" className="text-blue-600 hover:underline">
              Ver sitio
            </Link>
          </div>
          <div className="border rounded-xl p-4 shadow">
            <h3 className="text-lg font-medium">Stev Crow Tattoo</h3>
            <p className="text-sm mb-2">Portafolio de artista del tatuaje.</p>
            <Link href="https://stevcrowtattoo.com/" target="_blank" className="text-blue-600 hover:underline">
              Ver sitio
            </Link>
          </div>
          <div className="border rounded-xl p-4 shadow">
            <h3 className="text-lg font-medium">Pía María Coaching</h3>
            <p className="text-sm mb-2">Sitio web personal para coach profesional.</p>
            <Link href="https://www.pia-maria-coaching.com/" target="_blank" className="text-blue-600 hover:underline">
              Ver sitio
            </Link>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Sobre mí</h2>
        <p className="max-w-xl">
          Estudié Ingeniería en Software y me especializo en frontend con JavaScript. Me interesa
          seguir aprendiendo y creciendo profesionalmente, sobre todo en el uso de frameworks como
          React. También tengo experiencia con bases de datos, pruebas automatizadas (Playwright) y
          he trabajado con PHP y Java en el pasado.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Contacto</h2>
        <div className="flex gap-4">
          <Link
            href="https://www.linkedin.com/in/alanortizdev/"
            target="_blank"
            className="text-blue-600 hover:underline"
          >
            LinkedIn
          </Link>
          <Link
            href="https://wa.me/"
            target="_blank"
            className="text-green-600 hover:underline"
          >
            WhatsApp
          </Link>
        </div>
      </section>
    </main>
  );
}
