import Navbar from "../element/Navbar";
import Footer from '../element/Footer';
import Head from 'next/head';
export default function Layout({ children, title = 'Home' }){
    return(
        <>
            <Head>
                <title>{title}</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
            </Head>
            <div className="container">
                <Navbar />
                <main>
                    { children }
                </main>
                <Footer />
            </div>
        </>
    )
}