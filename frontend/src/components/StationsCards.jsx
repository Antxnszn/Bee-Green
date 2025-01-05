'use client'

import { Fragment } from 'react'
import {
  PopoverGroup,
  Popover,
  PopoverButton,
  PopoverPanel,
} from '@headlessui/react'

const SeasonalForm = ({ season }) => {
  return (
    <fieldset className="max-w-2xl mx-auto py-8">
      <legend className="sr-only">{season} Form Options</legend>

      <div className="flex items-center mb-4">
        <input 
          id={`${season}-terms`}
          type="checkbox" 
          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2" 
        />
        <label htmlFor={`${season}-terms`} className="ms-2 text-sm font-medium text-gray-900">
          I want to receive {season} collection updates
        </label>
      </div>

      <div className="flex items-center mb-4">
        <input 
          id={`${season}-promo`}
          type="checkbox" 
          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2" 
        />
        <label htmlFor={`${season}-promo`} className="ms-2 text-sm font-medium text-gray-900">
          Send me {season} promotional offers
        </label>
      </div>

      {/* Campos específicos para cada temporada */}
      {season === 'Spring' && (
        <>
        <div className="flex items-center mb-4">
          <input 
            id="Roses" 
            type="checkbox" 
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2" 
          />
          <label htmlFor="Roses" className="ms-2 text-sm font-medium text-gray-900">
            Roses
          </label>
        </div>
        <div className="flex items-center mb-4">
          <input 
            id="Tulips" 
            type="checkbox" 
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2" 
          />
          <label htmlFor="Tulips" className="ms-2 text-sm font-medium text-gray-900">
            Tulips
          </label>
        </div>
        <div className="flex items-center mb-4">
          <input 
            id="Sunflowers" 
            type="checkbox" 
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2" 
          />
          <label htmlFor="Sunflowers" className="ms-2 text-sm font-medium text-gray-900">
            Sunflowers
          </label>
        </div>
        </>
      )}

      {season === 'Summer' && (
        <div className="flex items-center mb-4">
          <input 
            id="summer-beach" 
            type="checkbox" 
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2" 
          />
          <label htmlFor="summer-beach" className="ms-2 text-sm font-medium text-gray-900">
            Interest in beach collection
          </label>
        </div>
      )}

      {season === 'Autumn' && (
        <div className="flex items-center mb-4">
          <input 
            id="autumn-outdoor" 
            type="checkbox" 
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2" 
          />
          <label htmlFor="autumn-outdoor" className="ms-2 text-sm font-medium text-gray-900">
            Interest in outdoor collection
          </label>
        </div>
      )}

      {season === 'Winter' && (
        <div className="flex items-center mb-4">
          <input 
            id="winter-sports" 
            type="checkbox" 
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2" 
          />
          <label htmlFor="winter-sports" className="ms-2 text-sm font-medium text-gray-900">
            Interest in winter sports collection
          </label>
        </div>
      )}

      <button
        type="submit"
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
        Update {season} Preferences
      </button>
    </fieldset>
  )
}

const navigation = {
  categories: [
    {
      id: 'Spring',
      name: 'Spring',
      featured: [
        {
          href: '#',
          imageSrc: './spring.webp',
          imageAlt: 'Spring',
        }
      ]
    },
    {
      id: 'Summer',
      name: 'Summer',
      featured: [
        {
          href: '#',
          imageSrc: './summer.webp',
          imageAlt: 'Summer',
        }
      ]
    },
    {
      id: 'Autumn',
      name: 'Autumn',
      featured: [
        {
          href: '#',
          imageSrc: './autumn.webp',
          imageAlt: 'Autumn',
        }
      ]
    },
    {
      id: 'Winter',
      name: 'Winter',
      featured: [
        {
          
          href: '#',
          imageSrc: './winter.webp',
          imageAlt: 'Winter',
        }
      ]
    }
  ]
}

export default function DesktopNavigation() {
  return (
    <div className="bg-white">
      <header className="relative bg-[#0101180B]">
        <nav aria-label="Top" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="border-b border-gray-200">
            <div className="flex h-16 items-center">
              <PopoverGroup className="lg:ml-8">
                <div className="flex h-full space-x-8">
                  {navigation.categories.map((category) => (
                    <Popover key={category.name} className="flex">
                      <div className="relative flex">
                        <PopoverButton className="relative z-10 -mb-px flex items-center border-b-2 border-transparent pt-px text-sm font-medium text-[#705600] transition-colors duration-200 ease-out hover:text-gray-800 data-[open]:border-[#454649] data-[open]:text-[#454649]">
                          {category.name}
                        </PopoverButton>
                      </div>

                      <PopoverPanel className="absolute inset-x-0 top-full text-sm text-gray-500">
                        <div className="absolute inset-0 top-1/2 bg-white shadow" aria-hidden="true" />
                        <div className="relative bg-white">
                          <div className="mx-auto max-w-7xl px-8">
                            <div className="grid grid-cols-2 gap-x-8 gap-y-10 py-16">
                              {/* Imagen de la temporada */}
                              <div className="col-span-1">
                                {category.featured.map((item) => (
                                  <div key={item.name} className="group relative text-base sm:text-sm">
                                    <img
                                      src={item.imageSrc}
                                      alt={item.imageAlt}
                                      className="aspect-square w-[40vh] lg:w-[50vh] rounded-lg bg-gray-100 object-cover"
                                    />
                                  </div>
                                ))}
                              </div>
                              
                              {/* Formulario específico de la temporada */}
                              <div className="col-span-1">
                                <SeasonalForm season={category.name} />
                              </div>
                            </div>
                          </div>
                        </div>
                      </PopoverPanel>
                    </Popover>
                  ))}
                </div>
              </PopoverGroup>

              <div className="ml-auto flex items-center">
                <div className="hidden lg:ml-8 lg:flex">
                  <a href="#" className="flex items-center text-gray-700 hover:text-gray-800">
                    <img
                      src="./mexico.svg"
                      alt=""
                      className="block h-auto w-7 shrink-0"
                    />
                    <span className="ml-3 block text-sm font-medium">MXN</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  )
}