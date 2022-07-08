export default function SiteHeader() {
    return (
        <div className="bg-gray-500 flex justify-center text-5xl w-full font-bold text-white border-b-2 border-gray-600 relative mb-1">
            
            <div class="p-3 font-serif text-2xl border border-1 m-2 font-semibold">
            Three Grays
            </div>

            <div className="absolute top-3 right-3">
                <button type="button" class="text-white hover:text-gray-300">
                <svg class="w-9 h-9 fill-current" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"/></svg>
                </button>
            </div>

        </div>
    )
}