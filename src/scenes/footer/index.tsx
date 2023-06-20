import Logo from "@/assets/Logo.png";

type Props = {}

const Footer = (props: Props) => {
  return <footer className="bg-primary-100 py-16">
    <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
            <img alt="logo" src={Logo} />
            <p className="my-5">
                Praesent sed tempus felis. Integer odio nulla, gravida sit amet interdum in, tempor id lectus. Nam tincidunt mi velit, in posuere eros pellentesque eget. Cras dui enim, dignissim vel blandit quis, feugiat a metus. Nulla condimentum nisl sit amet iaculis semper. Curabitur nec mi et nibh bibendum rhoncus et sit amet nisi. Curabitur vel vulputate erat. Nulla tincidunt venenatis tristique. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vivamus quis ullamcorper quam, nec semper ipsum. Maecenas quis mattis lectus. Nulla ante ipsum, molestie non lorem vel, convallis vestibulum velit. Quisque commodo varius metus dictum dapibus. Cras scelerisque turpis sit amet lacus sodales, a maximus lacus ornare.
            </p>
            <p>© Evogym All Rights Reserved.</p>
        </div>

        <div className="mt-16 basis-1/4 md:mt-0">
            <h4 className="font-bold">Links</h4>
            <p className="my-5">Massa orci senectus</p>
            <p className="my-5">Et gravida id et etiam</p>
            <p>Ullamcorper vivamus</p>
        </div>

        <div className="mt-16 basis-1/4 md:mt-0">
            <h4 className="font-bold">Contact Us</h4>
            <p className="my-5">Tempus metus mattis risus volutpat egestas.</p>
            <p className="my-5">(333)425-6825</p>
        </div>
    </div>

  </footer>
}

export default Footer;