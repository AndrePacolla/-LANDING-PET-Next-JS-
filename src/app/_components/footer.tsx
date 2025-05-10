import golden from "../../../public/golden.png";
import royal from "../../../public/royal.png";
import premier from "../../../public/primier.png";
import whiskas from "../../../public/whiskas.png";
import natural from "../../../public/natural.png";
import Image from "next/image";





const brands = [
    { name: "Royal Canil", logo: royal},
    { name: "Golden", logo: golden},
    { name: "Premier", logo: premier},
    { name: "Formula Natural", logo: natural},
    { name: "Golden", logo: golden},
    { name: "Whiskas", logo: whiskas}
]


export const Footer = () => {


    return(
        <section className="bg-[#E84c3d] py-16 text-white">
          <div className="container mx-auto px-4">
            <div className="border-b border-white/20  pb-8">
                <h4 className="text-4xl font-bold mb-14 text-center">Marcas que trabalhamos</h4>
                <div className="grid grid-cols-2 lg:grid-cols-6 gap-8">
                {brands.map((item, index) => (
                    <div key={index} className="bg-white p-4 rounded-lg flex items-center justify-center">
                        <Image
                        src={item.logo}
                        alt={item.name}
                        width={150}
                        height={50}
                        quality={100}
                        style={{
                            width:"auto",
                            height:"auto"
                        }}

                        className="object-contain"                        
                        />
                    </div>
                ))}
            </div>
            </div>

            <footer className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 mt-5 ">
                <div className="container mx-auto space-y-5  ">
                    <h3 className="text-4xl font-semibold mb-2 ">Pet Shop Dev</h3>
                    <p>Cuidando do melhor amigo com amore dedicação. </p>
                    <a 
                    href="#"
                    className="bg-green-500 text-black text-1xl px-4 py-1 rounded-md"
                    >
                        Contato via WhatsApp
                    </a>
                </div>

                <div className="container mx-auto space-y-3  ">
                    <h3 className="text-4xl font-semibold mb-2 ">Contatos</h3>
                    <p>E-mail: teste@teste.com </p>
                    <p>Telefone: (XX) 1234-6799 </p>
                    <p>Rua X , centro , Campinas-SP | SP: (XX) 1234-5678</p>
                </div>

                  <div className="container mx-auto space-y-3  ">
                    <h3 className="text-4xl font-semibold mb-2 ">Contatos</h3>
                    <p>E-mail: teste@teste.com </p>
                    <p>Telefone: (XX) 1234-6799 </p>
                    <p>Rua X , centro , Campinas-SP | SP: (XX) 1234-5678</p>
                </div>

            </footer>
     

          </div>
        </section>
    )
}