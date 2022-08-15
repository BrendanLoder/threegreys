export default function SiteHeader() {
    return (
        <div className="bg-gray-500 flex justify-center text-5xl text-white border-b-2 border-gray-600 relative">
                <a href="/">
                    <div className="p-3 font-serif text-2xl border border-1 m-2 font-semibold">
                        Three Grays
                    </div>
                </a>

                <div className="absolute top-5 right-5 z-40 font-serif text-sm">

                <div className="dropdown relative">
                    <button 
                        className="dropdown-toggle inline-block px-2 py-1.5"
                        type="button"
                        id="dropdownMenuSmallButton"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                    >
                        <svg viewBox="0 0 100 80" width="20" height="20">
                            <rect width="100" height="20"></rect>
                            <rect y="30" width="100" height="20"></rect>
                            <rect y="60" width="100" height="20"></rect>
                        </svg>

                    </button>

                    <ul className="dropdown-menu min-w-max absolute hidden bg-white text-base z-50 float-left py-2 list-none text-left rounded-lg shadow-lg mt-1 hidden m-0 bg-clip-padding border-none" aria-labelledby="dropdownMenuSmallButton">

                        <li>
                            <a
                            className="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100" href="/tw">Tailwind</a>
                        </li>

                        <li>
                            <a className="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100"
                            href="/tw-ex">Tailwind Example</a>
                        </li>

                        <li>
                            <a className="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100"
                            href="/carousels">Carousels</a>
                        </li>

                        <li>
                            <a className="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100" href="/login">Login (not social)</a>
                        </li>

                        <li>
                            <a className="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100" href="/p">Profile (not social)</a>
                        </li>

                        <li>
                            <a className="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100" href="/draganddrop">Drag and Drop</a>
                        </li>

                        <li>
                            <a className="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100"href="/firebase">Firebase Test</a>
                        </li>

                        <li>
                            <a className="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100" href="/william">William</a>
                        </li>

                        <li>
                            <a className="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100" href="/playground">Playground</a>
                        </li>

                        <li>
                            <a className="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100" href="/social">Social Dashboard</a>
                        </li>

                        <li>
                            <a className="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100" href="/social/login">Social Login</a>
                        </li>

                        <li>
                            <a className="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100" href="/social/signup" >Social Signup</a>
                        </li>

                    </ul>

                </div>
            </div>
        </div>
    )
}