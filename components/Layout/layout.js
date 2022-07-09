import Navbar from "../element/Navbar/Navbar";
import Footer from '../element/Footer/Footer';
import Head from 'next/head';
export default function Layout({ children }){
    return(
        <div className="container">
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
            </Head>
            <Navbar />
            <main>
                { children }
            </main>
            <Footer />
        </div>
    )
}