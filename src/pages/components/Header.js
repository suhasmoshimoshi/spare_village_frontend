import Link from 'next/link'

export default function Navbar() {
    return (
        <header className="bg-[#15284B] px-[78px]  ">
            <nav className=" flex justify-between items-center h-[100px]">
                <div>
                    <Link href="/">
                        <img src="/brand.png" alt="Logo" className="w-[260px] h-[37px]" />
                    </Link>
                </div>
                <ul className="flex space-x-8">
                    <li>
                        <Link href="/item1">
                            <p className='nav-item ' >About Us </p>
                        </Link>
                    </li>
                    <li>
                        <Link href="/item1">
                            <p className='nav-item ' >Fee Structure </p>
                        </Link>
                    </li>
                    <li>
                        <Link href="/item1">
                            <p className='nav-item ' >Our policies </p>
                        </Link>
                    </li>
                    <li>
                        <Link href="/item1">
                            <p className='nav-item ' >Contact Us </p>
                        </Link>
                    </li>
                    <li>
                        <Link href="/item5">
                            <button className="nav-button_hover ">START SELLING</button>
                        </Link>
                    </li>
                    <div>
                        <Link href="/login">
                            <div className='flex justify-center items-center    '>
                                <img src="/header/login.png" alt="" className='w-[23px] h-[25px] m-[10px]' />
                                <p className="nav-item">
                                    Login
                                </p>
                            </div>

                        </Link>
                    </div>
                </ul>

            </nav>
        </header>
    )
}