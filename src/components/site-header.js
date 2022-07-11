export default function SiteHeader() {
    return (
        <div className="bg-gray-500 flex justify-center text-5xl w-full text-white border-b-2 border-gray-600 relative">
                <div class="p-3 font-serif text-2xl border border-1 m-2 font-semibold">
                    Three Grays
                </div>

                <div className="absolute top-5 right-5 z-40 font-serif text-sm">
                
                    <div class="dropdown inline-block relative w-50">
                        <button class="bg-gray-300 text-gray-700 py-2 px-4 rounded inline-flex items-center">
                            <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"/></svg>
                            
                        </button>
                        <ul class="dropdown-menu absolute hidden text-gray-700 pt-1 right-0 w-40 text-sm">
                            <li class=""><a class="rounded-t bg-gray-300 hover:bg-gray-400 py-2 px-4 block" href="/tw">Tailwind</a></li>
                            <li class=""><a class="bg-gray-300 hover:bg-gray-400 py-2 px-4 block" href="/tw-ex">Tailwind Example</a></li>
                            <li class=""><a class="rounded-b bg-gray-300 hover:bg-gray-400 py-2 px-4 block" href="/carousels">Carousels</a></li>
                        </ul>
                    </div>

                    {/* <button type="button" class="text-white hover:text-gray-300">
                        <svg class="w-9 h-9 fill-current" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"/></svg>
                    </button> */}
                </div>
            </div>
    )
}