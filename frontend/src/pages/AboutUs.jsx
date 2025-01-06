const people = [
  {
    name: 'Itziar Segura',
    role: 'AI student',
    imageUrl: './itzi.jpg',
  },
  {
    name: 'Antonio Estrada',
    role: 'AI student',
    imageUrl: './roberto.webp',
  }
  // More people...
]

export default function AboutUs() {
  return (
    <div className="bg-gradient-to-r from-[#F2DFA2] via-[#F2DFA2] to-[#E4E4E5] py-20">
      <div className="mx-auto grid items-center justify-center h-auto max-w-7xl gap-16 px-6 lg:px-8 xl:grid-cols-3">
        <div className="max-w-xl">
          <h2 className="text-5xl font-extrabold text-[#1E1F21] text-center mb-12">
            Conócenos
          </h2>

          <p className="text-xl text-[#453C20] leading-relaxed text-justify">
            Como estudiantes de la Escuela Superior de Cómputo del Instituto Politécnico Nacional hemos
            decidido aplicar el aprendizaje adquirido en la materia de Algoritmos Biosinspirados para
            resolver problemáticas de la vida real. Implementando el algoritmo de enjambre de abejas 
            y nuestra experiencia con nuestra tienda de plantas K E D R O S | Plantas y suculentas para
            mejorar la experiencia de nuestros clientes con respecto a presupuestos y el despliegue 
            de las opciones con el objetivo de un rendimiento apto para maximizar las ganancias.
          </p>
        </div>

        <ul role="list" className="grid gap-x-12 gap-y-5 sm:grid-cols-2 sm:gap-y-24 xl:col-span-2">
          {people.map((person) => (
            <li key={person.name} className="">
              <div className="flex flex-col lg:flex-row items-center justify-center gap-x-8 p-8">
                <img alt="" src={person.imageUrl} className="w-32 h-32 rounded-full object-cover border-8 border-[#DFB100] shadow-lg transition-all duration-300 ease-in-out hover:scale-105" />
                <div>
                  <h3 className="text-2xl font-semibold text-gray-800">{person.name}</h3>
                  <p className="text-sm font-medium text-center lg:text-left text-[#785C00]">{person.role}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
