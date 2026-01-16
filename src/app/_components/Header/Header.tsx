import {LogIn} from "lucide-react";

export default function Header() {
    return (
        <div className="navbar bg-base-200/50 backdrop-blur-lg border border-neutral-content/10 shadow-sm absolute top-0 w-[calc(100%-50px)] rounded-full z-50 mx-5 mt-3 min-h-0 h-12 px-8">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={-1}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li><a>Item 1</a></li>
                        <li>
                            <a>Parent</a>
                            <ul className="p-2">
                                <li><a>Submenu 1</a></li>
                                <li><a>Submenu 2</a></li>
                            </ul>
                        </li>
                        <li><a>Item 3</a></li>
                    </ul>
                </div>
                <a className="text-2xl font-bold">
                    Nebby<span className={'text-accent text-2xl'}>.</span>
                </a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><a>Blog</a></li>
                    {/*<li>
                        <details>
                            <summary>Parent</summary>
                            <ul className="p-2 bg-base-100 w-40 z-1">
                                <li><a>Submenu 1</a></li>
                                <li><a>Submenu 2</a></li>
                            </ul>
                        </details>
                    </li>
                    <li><a>Item 3</a></li>*/}
                </ul>
            </div>
            <div className="navbar-end">
                <a href={'/login'} className={'btn btn-ghost btn-circle'}>
                    <LogIn size={20} />
                </a>
            </div>
        </div>
    )
}