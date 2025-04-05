import {WhatsappLogo} from "@phosphor-icons/react/dist/ssr";
import dogImg from "../../../public/hero-dog.webp";
import catImg from "../../../public/cat-hero.png";
import Image from "next/image";
export const Hero = () => {
    return(
        <section className="bg-[#e84c3d] text-white relative  overflow-hidden">
            <div>
                <Image
                 src={dogImg} 
                 alt="foto bg-Doguinho"
                 fill
                 sizes="100vw"
                 priority
                 className="object-cover opacity-60 lg:hidden"
                 />
                 <div className="absolute inset-0 bg-black opacity-40 md:hidden"></div>
            </div>
            <div className="container mx-auto py-16 md:pb-0 px-4 relative">
                <article className="grid grid-cols-1 lg:grid-cols-2 gap-8 ">
                  <div className="space-y-6">
                    <h1 className=" text-3xl  md:text-4xl lg:text-5xl font-bold leading- py-5">
                        Seu pet merece cuidado, carinho e atenção especial.</h1>
                    <p className="lg:text-lg ">
                      Oferecemos os melhores serviços para garantir o bem-estar e a
                      felicidade do seu amigo de quatro patas.
                    </p>
                        <a href="#"
                        className="bg-green-500 px-7 rounded-md font-semibold flex items-center justify-between w-fit gap-2"
                        >
                            <WhatsappLogo className="w-6 h-6"/>
                            Contato via WhatsApp
                        </a>    
              
                    <div className="mt-8">
                        <p className="text-sm mb-4">
                            <b className="bg-black text-white px-2 py-1 mr-2 rounded-lg">5%</b>de desconto na primeira compra.
                        </p>
                    </div>
                    <div className="hidden lg:block w-32">
                        <Image
                        src={catImg}
                        alt="cat"
                        className="object-fill"
                        quality={100}
                        priority
                        />
                    </div>
                        
                  </div>

                  <div className="hidden md:block h-full relative mt-4">
                    <Image
                    src={dogImg}
                    alt="Foto do doguinho"
                    className="object-contain"
                    fill
                    quality={100}
                    priority
                   />

                  </div>
                </article>
            </div>
        </section>
    )
};