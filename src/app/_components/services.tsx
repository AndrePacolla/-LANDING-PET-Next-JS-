"use client"

import useEmblaCarousel from "embla-carousel-react";
import {ChevronLeft, ChevronRight, Scissors, Syringe, CarTaxiFront, Hotel }  from "lucide-react";
import { WhatsappLogo } from "@phosphor-icons/react";


const services = [
    {
      title: "Banho e Tosa",
      description: "Inclui banho com produtos especificos para o tipo de pelagem e pele do animal, corte de unhas, limpeza das orelhas e tosa personalizada (higênica ou estilizada).",
      duration: "1h",
      price: "$50",
      icon: <Scissors/>,
      linkText: "Olá, vi no site sobre Banho e Tosa e gostaria de mais informações."  
    },
    {
      title: "Consulta Veterinária",
      description: "Oferece atendimento clinico básico ou especializado para cuidar da saúde do animal. Inclui diagnóstico de doenças, aplicação de vacina obrigatórias.",
      duration: "1h",
      price: "$45",
      icon: <Syringe/>,
      linkText: "Olá, vi no site sobre Banho e Tosa e gostaria de mais informações."  

    },
    {
      title: "Taxi Pet",
      description: "Serviços de trasnporte para levar e buscar os pets no petshop, clinicas veterinarias ou outros locais. Ideal para tutores que nçao tem tempo ou transporte adequado para locomover os animais.",
      duration: "2h",
      price: "$80",
      icon: <CarTaxiFront/>,
      linkText: "Olá, vi no site sobre Banho e Tosa e gostaria de mais informações."      
    },
    {
      title: "Hotel para pets",
      description: "Serviços de hospedagem para animais de estimação, ideal para quando os tutores precisam viajar ou se ausentar por alguns dias. Os pets ficam acomodados em espaços seguros, confortáveis.",
      duration: "24h",
      price: "$250",
      icon: <Hotel/>,
      linkText: "Olá, vi no site sobre Banho e Tosa e gostaria de mais informações."  
    }
];


export const Services = () => {

  const [emblaRef, emplaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    slidesToScroll: 1,
    breakpoints: {
      "(min-width: 768px)":{slidesToScroll: 3}
    }


  })


    return(
        <section className="text-black py-16">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl text-center font-bold md:text-5xl mb-12 ">Nossos Serviços</h2>
            <div className="relative">
              <div className="overflow-hidden" ref={emblaRef}>
                <div className="flex">
                  {services.map((item, index) => (
                    <div key={index} className="flex-[0_0_100%] min-w-0 md:flex-[0_0_calc(100%/3)] px-3"> 
                      <article className="bg-[#1e293b] text-white rounded-2xl p-6 space-y-4 h-full flex flex-col">
                         <div className="flex-1flex items-start justify-between">
                            <span className="text-3xl">{item.icon}</span>

                         </div>

                      </article>

                    </div>

                  ))}


                </div>
              </div>

            </div>

            </div>
        </section>
    )
}