import Image from  "next/image";
import about1 from "../../../public/about-1.png";
import about2 from "../../../public/about-2.png";


export const About = () => {
    return(
        <section className="bg-[3FDF6ec] py-16">
         <div className="container mx-auto  grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            <div>
              <Image
              src={about1}
              alt="Foto do cachorro"
              />
            </div>
         </div>
        </section>

    );
};