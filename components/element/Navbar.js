import Link from 'next/link';
import Logo from './Logo';

export default function Navbar(){
  return(
    <header>
      <nav className='flex lg:px-32 px-4 w-full py-4'>
        <section className='flex items-center'>
          <Logo />
          <h1 className="text-xl font-bold text-orange">Serba <br /> Serbi</h1>
        </section>
        <section className='flex m-auto'>
            <Link href="/">
              <p className='text-orange font-semibold mr-4 md:mr-16 cursor-pointer'>Home</p>
            </Link>
            <Link href="/">
              <p className='text-disabled cursor-pointer'>Article</p>
            </Link>
        </section>
      </nav>
    </header>
  )
}