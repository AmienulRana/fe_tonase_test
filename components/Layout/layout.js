import Navbar from "../element/Navbar";
import Footer from '../element/Footer';
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