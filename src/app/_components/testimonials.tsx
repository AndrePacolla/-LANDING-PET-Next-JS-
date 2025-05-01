"use client"

import useEmblaCarousel from "embla-carousel-react";
import {ChevronLeft, ChevronRight, Scissors, Syringe, CarTaxiFront, Hotel, Clock }  from "lucide-react";
import { WhatsappLogo } from "@phosphor-icons/react";
import tutor1 from "../../../public/tutor1.png"
import Image from "next/image";

const testimonials = [
    {
      content: "Desde que comecei a levar a luna para banho e tosa aqui, ela nunca estev táo feliz",
      author: "Maria Souza",
      role: "Tutora da Luna (Golden Retriever)",
      image: tutor1
    },
    {
      content: "Desde que comecei a levar a luna para banho e tosa aqui, ela nunca estev táo feliz",
      author: "Maria Souza",
      role: "Tutora da Luna (Golden Retriever)",
      image: tutor1
    },
    {
      content: "Desde que comecei a levar a luna para banho e tosa aqui, ela nunca estev táo feliz",
      author: "Maria Souza",
      role: "Tutora da Luna (Golden Retriever)",
      image: tutor1
    }
];


export const Testimonials = () => {

  const [emblaRef, emplaApi] = useEmblaCarousel({
    loop: true,
  })

  const scrollPrev = () => {
    emplaApi?.scrollPrev();
  };

  const scrollNext = () => {
    emplaApi?.scrollNext()
  };

    return(
        <section className=" bg-[#FFD449] py-16">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold md:text-5xl mb-12 text-center "> Depoimentos</h2>
            <div className="relative max-w-4xl mx-auto">
              <div className="overflow-hidden" ref={emblaRef}>

                <div className="flex">
                  {testimonials.map((item, index) => (
                    <div key={index} className="  flex-[0_0_100%]  min-w-0  px-3"> 
                      <article className="bg-[#1e293b] text-white rounded-2xl p-6 space-y-3 h-full flex flex-col">
                        <div className="flex flex-col items-center text-center space-y-4">
                          <div className="relative w-24 h-24">
                            <Image
                            src={item.image}
                            alt={item.author}
                            fill
                            sizes="96px"
                            className="object-cover rounded-full"
                            />

                          </div>

                        </div>
                     
                      </article>
                    </div>
                  ))}
                </div>
              </div>

              <button 
                className="w-10 h-10 bg-[#FFD449] flex items-center justify-center rounded-full shadow-lg absolute left-3 -translate-y-1/2 -translate-x-1/2 
                top-1/2 z-10"
                onClick={scrollPrev}
                >
                <ChevronLeft className="w-6 h-6 text-black"
               />
              </button>

              <button 
                className="w-10 h-10 bg-[#FFD449] flex items-center justify-center rounded-full shadow-lg absolute -right-6 -translate-y-1/2 -translate-x-1/2 
                top-1/2 z-10"
                onClick={scrollNext}
                >
                <ChevronRight className="w-6 h-6 text-black"
               />
              </button>

            </div>
            </div>
        </section>
    )
}