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
     

          </div>
        </section>
    )
}