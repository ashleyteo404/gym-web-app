import HText from '@/shared/HText';
import { BenefitType, SelectedPage } from '@/shared/types';
import {
    HomeModernIcon,
    UserGroupIcon,
    AcademicCapIcon
} from "@heroicons/react/24/solid";
import { motion } from 'framer-motion';
import Benefit from './Benefit';
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png";
import ActionButton from '@/shared/ActionButton';

const benefits: Array<BenefitType> = [
    {
        icon: <HomeModernIcon className="h-6 w-6" />,
        title: "State of the Art Facilities",
        description: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
    },
    {
        icon: <UserGroupIcon className="h-6 w-6" />,
        title: "100's of Diverse Classes",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet leo sed ligula semper dignissim a eu nulla."
    },
    {
        icon: <AcademicCapIcon className="h-6 w-6" />,
        title: "Expert and Pro Trainers",
        description: "Etiam iaculis orci tellus, at elementum dolor gravida eu."
    },
]

const container = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.2 }
    }
}

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Benefits = ({ setSelectedPage }: Props) => {

    
  return <section
   id="benefits"
   className="mx-auto min-h-full w-5/6 py-20"
  >
    <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
    >
        {/* header */}
        <motion.div 
            className="md:my-5 md:w-3/5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0}
            }}
        >
            <HText>
                MORE THAN JUST GYM.
            </HText>
            <p className="my-5 text-sm">
                We provide world class fitness equipment, trainers and classes to get you to your ultimate fitness goals with ease. We provide true care into each and every member.
            </p>
        </motion.div>

        {/* benefits */}
        <motion.div 
            className="md:flex items-center justify-between gap-8 mt-5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={container}
        >
            {benefits.map((benefit: BenefitType) => (
                <Benefit 
                    key={benefit.title}
                    icon={benefit.icon}
                    title={benefit.title}
                    description={benefit.description}
                    setSelectedPage={setSelectedPage}
                />
            ))}
        </motion.div>

        {/* graphics and description */}
        <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
            {/* graphic */}
            <img 
                className="mx-auto"
                alt="benefits-page-graphic"
                src={BenefitsPageGraphic}
            />

            {/* description */}
            <div>
                {/* title */}
                <div className="relative">
                    <div className="before:absolute before:-top-20 before:-left-20 before: z-[1] before:content-abstractwaves">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ duration: 0.5 }}
                            variants={{
                                hidden: { opacity: 0, x: -50 },
                                visible: { opacity: 1, x: 0}
                            }}
                        >
                            <HText>
                                MILLIONS OF HAPPY MEMBERS GETTING{" "}
                                <span className="text-primary-500">FIT</span>
                            </HText>
                        </motion.div>
                    </div>

                </div>

                {/* description */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0}
                    }}
                >
                    <p className="my-5">
                        Sed pretium pellentesque erat. Duis viverra vehicula commodo. Cras lacinia blandit nisi, ac venenatis ipsum hendrerit quis. Curabitur in quam eu felis ultrices vestibulum. Sed at diam nisl. Nullam consectetur risus vel ultrices fermentum. Ut commodo rhoncus magna, venenatis euismod leo dignissim id. Suspendisse potenti. Duis leo odio, facilisis eget risus non, lobortis ultrices metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ut justo elementum, luctus ex laoreet, pellentesque nunc. Integer nec tincidunt mi, ac lobortis libero. Nunc leo odio, pretium suscipit auctor vitae, condimentum sit amet nisi.
                    </p>
                    <p className="mb-5">
                        Donec quis scelerisque ante. Duis aliquet felis sit amet sapien malesuada, a vulputate tellus varius. Nullam tincidunt vel risus a faucibus. Praesent eu dignissim enim. Quisque libero justo, blandit quis diam at, placerat faucibus tellus. Integer et rutrum nisi. Integer metus sem, scelerisque eu nisi vitae, sodales gravida orci. Pellentesque scelerisque hendrerit volutpat.
                    </p>
                </motion.div>

                {/* button */}
                <div className="relative mt-16">
                    <div className="before:absolute before:-bottom-20 before:right-40 before:z-[1] before: content-sparkles">
                        <ActionButton setSelectedPage={setSelectedPage}>
                            Join Now
                        </ActionButton>
                    </div>
                </div>
            </div>
        </div>
    </motion.div>
  </section>
}

export default Benefits;