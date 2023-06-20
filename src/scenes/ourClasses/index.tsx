import { ClassType, SelectedPage } from '@/shared/types';
import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import image5 from "@/assets/image5.png";
import image6 from "@/assets/image6.png";
import { motion } from 'framer-motion';
import HText from '@/shared/HText';
import Class from "./Class";

const classes: Array<ClassType> = [
    {
        name: "Weight Training CLasses",
        description: "Proin et imperdiet eros, id faucibus odio.",
        image: image1
    },
    {
        name: "Yoga CLasses",
        image: image2
    },
    {
        name: "Ab Core CLasses",
        description: "Proin et imperdiet eros, id faucibus odio.",
        image: image3
    },
    {
        name: "Adventure CLasses",
        description: "Proin et imperdiet eros, id faucibus odio.",
        image: image4
    },
    {
        name: "Fitness CLasses",
        image: image5
    },
    {
        name: "Training CLasses",
        description: "Proin et imperdiet eros, id faucibus odio.",
        image: image6
    }
]

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const OurClasses = ({ setSelectedPage }: Props) => {
  return <section className="w-full bg-primary-100 py-40">
    <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
    >
        <motion.div
            className="mx-auto w-5/6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0}
            }}
        >
            <div>
                <HText>OUR CLASSES</HText>
                <p className="py-5">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce rhoncus facilisis semper. Donec ultrices sollicitudin hendrerit. Aenean fringilla orci vel risus interdum eleifend. Quisque vel tincidunt est, ut semper dolor. Nam convallis mollis odio, in malesuada eros tempor a. Integer egestas elit libero. Nunc ex est, volutpat quis accumsan sit amet, consequat sed augue. Nam non vulputate massa. Donec consectetur ipsum at nibh vehicula, non blandit enim malesuada.
                </p>
            </div>
        </motion.div>
        <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
            <ul className="w-[2800px] whitespace-nowrap">
                {classes.map((item: ClassType, index) => (
                    <Class
                        key={`${item.name}-${index}`}
                        name={item.name}
                        description={item.description}
                        image={item.image}
                    />
                ))}
            </ul>
        </div>
    </motion.div>
  </section>
}

export default OurClasses