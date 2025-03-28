import {WhatsappLogo} from "@phosphor-icons/react/dist/ssr";
export const Hero = () => {
    return(
        <section className="bg-[#e84c3d] text-white relative overflow-hidden">
            <div>
                <article>
                  <div className="leading-14">
                    <h1 className=" text-3xl  md:text-4xl lg:text-5xl font-bold py-5">
                        Seu pet merece cuidado, carinho e atenção especial.</h1>
                    <p className="lg:text-lg">
                      Oferecemos os melhores serviços para garantir o bem-estar e a
                      felicidade do seu amigo de quatro patas.
                    </p>
                        <a href="#"
                        className="bg-green-500 px-7 rounded-md font-semibold flex items-center justify-between w-fit"
                        >
                            <WhatsappLogo/>
                            Contato via WhatsApp
                        </a>    
              
                    <div className="mt-8">
                        <p className="text-sm mb-4">
                            <b className="bg-black text-white px-2 py-1 rounded-lg">5%</b>de desconto na primeira compra.
                        </p>
                    </div>
                        
                  </div>

                  <div>

                  </div>
                </article>

            </div>
           
        </section>
    )
};