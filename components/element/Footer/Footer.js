import Logo from "../Logo/Logo";
import { FaFacebookSquare, FaYoutubeSquare } from 'react-icons/fa';
import { BsInstagram } from 'react-icons/bs';
export default function Footer()  {
    return(
        <footer className="lg:px-32 px-4 mt-24 h-64 flex flex-col justify-between">
            <section className="flex flex-wrap md:w-1/2 justify-between">
                <div className="flex items-center mb-2">
                    <Logo />
                    <h1 className="text-xl font-bold text-orange">SerbaSerbi</h1>
                </div>
                <div className="mb-2">
                    <p className="font-bold">Menu</p>
                    <p className="text-disabled my-2">Home</p>
                </div>
                <div className="mb-2">
                    <p className="font-bold">Bantuan</p>
                    <p className="text-disabled my-2">Pusat Bantuan</p>
                    <p className="text-disabled" >Privacy Police</p>
                </div>
            </section>
            <section className="h-32 flex justify-between items-center text-disabled border-t-2">
                <p>&copy; 2022 Sislog. All Rights Reserved.</p>
                <div className="flex text-2xl">
                    <FaFacebookSquare />
                    <FaYoutubeSquare className="mx-2"/>
                    <BsInstagram />
                </div>
            </section>
        </footer>
    )
}