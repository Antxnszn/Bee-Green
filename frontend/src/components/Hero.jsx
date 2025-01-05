'use client'

import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'


export default function Example() {
  return (
    <div className="bg-[#E6E0CE] overflow-y-hidden h-[100vh]">
      <div className="relative isolate px-6 pt-14">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#D6A900] to-[#705600] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div>
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          
          <div className="text-center">
            <h1 className="text-balance text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">
            ¡Cotiza, optimiza y gana más!
            </h1>
            <p className="mt-8 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">
            Descubre cómo el algoritmo 'Enjambre de Abejas' puede hacer crecer tu negocio, maximizando recursos y mejorando tus márgenes de ganancia."
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                to="/PlantsApp"
                className="rounded-md bg-[#D6A900] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#AE8C00]"
              >
                Comienza →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
