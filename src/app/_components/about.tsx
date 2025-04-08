import Image from  "next/image";
import about1 from "../../../public/about-1.png";
import about2 from "../../../public/about-2.png";
import {Check,MapPin} from "lucide-react";
import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr";


export const About = () => {
    return(
        <section className="bg-[#fddfb6] py-16">
         <div className="container px-4 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          <div className="relative">

          <div className="relative w-full h-[400px] rounded-4xl overflow-hidden">
              <Image
              src={about1}
              alt="Foto do cachorro"
              fill
              quality={100}
              priority
              className="object-cover hover:scale-110 duration-200"
              />
            </div>


            <div className="absolute w-40 h-40 right-4 -bottom-8 border-4 border-white rounded-3xl">
              <Image
              src={about2}
              alt="Foto do cachorro"
              fill
              quality={100}
              priority
              className=" rounded-2xl"
              />
            </div>

          </div>
           

          <div className="space-y-6 mt-10">
              <h1 className="text-4xl  md:text-5xl font-bold ">Sobre</h1>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique veritatis maiores velit nisi quidem impedit corporis suscipit mollitia et, adipisci atque nam ducimus pariatur! Eius eligendi voluptates quaerat harum doloribus!</p>

              
              <ul className="space-y-4">
                <li className="flex items-center gap-2"> 
                  <Check className="text-green-500"/>
                  Aberto desde 2006
                </li>
                <li className="flex items-center gap-2"> 
                  <Check className="text-green-500"/>
                  Equipe com mais de 10 veterinários
                </li>
                <li className="flex items-center gap-2"> 
                  <Check className="text-green-500"/>
                  Qualidade é nossa prioridade
                </li>
              </ul>

              <div className="flex gap-3">
              <a href="#" 
                  className="bg-[#2f5312] text-white flex items-center justify-center w-fit gap-2 px-5 py-2 rounded-md">
                  <WhatsappLogo className="w-5 h-5 text-white hover:scale-110 duration-200 "/>
                  Contato via WhatsApp
                </a>

                <a href="#" 
                  className="flex items-center justify-center w-fit gap-2 px-5 py-2 bg-orange-300 rounded-md font-bold">
                  Endereço da loja !
                  <MapPin className="w-8 h-8 text-black  hover:scale-110 duration-200 "/>
                </a>

              </div>
               
               
                              
          </div>

         </div>
        </section>

    );
};