export default function SiteHeader() {
    return (
        <div className="bg-gray-500 flex justify-center text-5xl text-white border-b-2 border-gray-600 relative">
                <a href="/">
                    <div className="p-3 font-serif text-2xl border border-1 m-2 font-semibold">
                        Three Grays
                    </div>
                </a>

                <div className="absolute top-5 right-5 z-40 font-serif text-sm">
                
                    <div className="dropdown inline-block relative w-50">
                        <button className="bg-gray-300 text-gray-700 py-2 px-4 rounded inline-flex items-center">
                            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"/></svg>
                            
                        </button>
                        <ul className="dropdown-menu absolute hidden text-gray-700 right-0 w-40 text-sm pt-1">
                            <li className=""><a className="bg-gray-300 hover:bg-gray-400 py-2 px-4 block" href="/tw">Tailwind</a></li>
                            <li className=""><a className="bg-gray-300 hover:bg-gray-400 py-2 px-4 block" href="/tw-ex">Tailwind Example</a></li>
                            <li className=""><a className="bg-gray-300 hover:bg-gray-400 py-2 px-4 block" href="/carousels">Carousels</a></li>
                            <li className=""><a className="bg-gray-300 hover:bg-gray-400 py-2 px-4 block" href="/login">Login (non-social)</a></li>
                            <li className=""><a className="bg-gray-300 hover:bg-gray-400 py-2 px-4 block" href="/p">Profile (non-social)</a></li>
                            <li className=""><a className="bg-gray-300 hover:bg-gray-400 py-2 px-4 block" href="/draganddrop">Drag and Drop</a></li>
                            <li className=""><a className="bg-gray-300 hover:bg-gray-400 py-2 px-4 block" href="/firebase">Base test</a></li>
                            <li className=""><a className="bg-gray-300 hover:bg-gray-400 py-2 px-4 block" href="/william">William</a></li>
                            <li className=""><a className="bg-gray-300 hover:bg-gray-400 py-2 px-4 block" href="/playground">Playground</a></li>


                            <li className=""><a className="bg-gray-300 hover:bg-gray-400 py-2 px-4 block" href="/social">Social Dashboard</a></li>
                            <li className=""><a className="bg-gray-300 hover:bg-gray-400 py-2 px-4 block" href="/social/login">Social Login</a></li>
                            <li className=""><a className="bg-gray-300 hover:bg-gray-400 py-2 px-4 block" href="/social/signup">Social Signup</a></li>
                        </ul>
                    </div>

                    {/* <button type="button" className="text-white hover:text-gray-300">
                        <svg className="w-9 h-9 fill-current" viewBox="0 0 24 24"><path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"/></svg>
                    </button> */}
                </div>
            </div>
    )
}