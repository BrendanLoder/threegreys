export default function SiteFooter() {
    let currentYear = new Date().getFullYear()
    return (

        <div className="bg-gray-500 py-5 px-10 w-full items-center text-center border-t-2 border-b-2 border-gray-600 text-white relative z-0">

            {currentYear} Three Grays<br/>

            <div className="absolute bottom-0 left-0 w-15 h-5 p-5">
                <p className="text-xs text-teal-400">
                    v9.3
                </p>
            </div>
              
        </div>

    )
}