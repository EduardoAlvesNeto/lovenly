import Image from 'next/image'
import Logo from '../../public/logo.png'

export default function Header() {
    return (
        <header className="bg-zinc-200 w-full flex justify-between items-center px-24 py-4">
            <div className='flex flex-row items-center gap-4'>
                <Image
                    src={Logo}
                    width={50}
                    height={50}
                    alt='logo'
                />
                <h2 className='font-semibold text-zinc-800 text-xl'>Lovely</h2>
            </div>
            <nav>
                <ul className='text-zinc-600 flex flex-row gap-4 '>
                    <li className='hover:text-pink-600 duration-200'><a href="">Inicio</a></li>
                    <li className='hover:text-pink-600 duration-200'><a href="">Planos</a></li>
                    <li className='hover:text-pink-600 duration-200'><a href="">Sobre nós</a></li>
                </ul>
            </nav>

            <button className='bg-pink-600 px-8 py-3 rounded-[18px] hover:bg-pink-500 duration-400  cursor-pointer'>Acessar memórias</button>
        </header>
    )
}