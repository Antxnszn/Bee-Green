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
    <div className="bg-gradient-to-r from-green-200 via-yellow-200 to-orange-200 py-20">
      <div className="mx-auto grid items-center justify-center h-auto max-w-7xl gap-16 px-6 lg:px-8 xl:grid-cols-3">
        <div className="max-w-xl">
          <h2 className="text-5xl font-extrabold text-gray-900 text-center mb-12">
            Conócenos
          </h2>

          <p className="text-xl text-[#453C20] leading-relaxed text-center sm:text-left">
            Como estudiantes de la Escuela Superior de Cómputo del Instituto Politécnico Nacional hemos
            decidido aplicar el aprendizaje adquirido en la materia de Algoritmos Biosinspirados para
            resolver problemáticas de la vida real. Implementando el algoritmo de enjambre de abejas 
            y nuestra experiencia con nuestra tienda de plantas K E D R O S | Plantas y suculentas para
            mejorar la experiencia de nuestros clientes con respecto a presupuestos y el despliegue 
            de las opciones con el objetivo de un rendimiento apto para maximizar las ganancias.
          </p>
        </div>

        <ul role="list" className="grid gap-x-12 gap-y-16 sm:grid-cols-2 sm:gap-y-24 xl:col-span-2">
          {people.map((person) => (
            <li key={person.name} className="transition-transform transform hover:scale-110 duration-500 ease-in-out">
              <div className="flex items-center gap-x-8 bg-white p-8 rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300 ease-in-out hover:bg-gradient-to-r from-green-50 to-yellow-50">
                <img alt="" src={person.imageUrl} className="w-32 h-32 rounded-full object-cover border-8 border-indigo-600 shadow-lg transition-all duration-300 ease-in-out hover:scale-105" />
                <div>
                  <h3 className="text-2xl font-semibold text-gray-800">{person.name}</h3>
                  <p className="text-sm font-medium text-indigo-600">{person.role}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
