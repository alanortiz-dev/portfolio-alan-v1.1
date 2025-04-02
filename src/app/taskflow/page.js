'use client';

import { useState } from 'react';

export default function TaskFlow() {
  const [tareas, setTareas] = useState([
    { texto: 'Aprender React', completada: false },
    { texto: 'Estudiar Tailwind CSS', completada: false },
  ]);
  const [input, setInput] = useState('');

  const agregarTarea = () => {
    if (input.trim() === '') return;
    setTareas([...tareas, { texto: input, completada: false }]);
    setInput('');
  };

  const toggleCompletada = (index) => {
    const nuevasTareas = [...tareas];
    nuevasTareas[index].completada = !nuevasTareas[index].completada;
    console.log(`Tarea "${nuevasTareas[index].texto}" → completada: ${!nuevasTareas[index].completada}`);
    setTareas(nuevasTareas);
  };

  return (
    <main className="min-h-screen p-6 bg-white text-black">
      <h1 className="text-3xl font-bold mb-6">📝 TaskFlow</h1>

      {/* Input + botón */}
      <div className="flex gap-2 mb-6">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Escribe una tarea..."
          className="border border-gray-300 p-2 rounded w-full"
        />
        <button
          onClick={agregarTarea}
          className="bg-blue-600 text-white px-4 rounded hover:bg-blue-700 transition"
        >
          Agregar
        </button>
      </div>

      {/* Lista de tareas */}
      <ul className="space-y-3">
        {tareas.map((tarea, i) => {
          const clasesBase = 'p-3 rounded shadow cursor-pointer transition duration-300';
          const clasesCompletada = 'bg-lime-400 text-black text-xl border-4 border-pink-500';
          const clasesIncompleta = 'bg-red-500 text-white text-sm';
          return (
            // <li
            //   key={i}
            //   onClick={() => toggleCompletada(i)}
            //   className={`${clasesBase} ${tarea.completada ? clasesCompletada : clasesIncompleta}`}
            // >
            //     {tarea.completada ? `✅ ${tarea.texto}` : `🕐 ${tarea.texto}`}
            // </li>
            <li
              key={i}
              className="p-3 bg-fuchsia-600 text-white text-2xl rounded"
            >
              PROBANDO COLOR
            </li>

          );
        })}
      </ul>
    </main>
  );
}
