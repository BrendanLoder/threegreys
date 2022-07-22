import { useEffect } from "react";
import {Link} from 'react-router-dom';

export default function Playground() {

    // set the default active slide to the first one
    let slideIndex = 1;
    // showSlide(slideIndex);

    useEffect(() => {
        // showSlide(slideIndex);

    }, [])

        
    

    return (
        <div className='p-10'>
            Playground here
                {/* <Link to="" onClick={()=>console.log("HI?")}>foo</Link> */}
            <div className="relative w-[600px] mx-auto">
                {/* <div className="slide relative">
                    <img className="w-full h-[300px] object-cover"
                        src="https://www.kindacode.com/wp-content/uploads/2022/07/flower-1.jpeg" />
                    <div className="absolute bottom-0 w-full px-5 py-3 bg-black/40 text-center text-white">Flower One Caption</div>
                </div>

                <div className="slide relative">
                    <img className="w-full h-[300px] object-cover"
                        src="https://www.kindacode.com/wp-content/uploads/2022/07/flower-2.jpeg" />
                    <div className="absolute bottom-0 w-full px-5 py-3 bg-black/40 text-center text-white">Flower Two Caption</div>
                </div>

                <div className="slide relative">
                    <img className="w-full h-[300px] object-cover"
                        src="https://www.kindacode.com/wp-content/uploads/2022/07/flower-3.jpeg" />
                    <div className="absolute bottom-0 w-full px-5 py-3 bg-black/40 text-center text-white">Flower Three Caption
                    </div>
                </div>
                 */}
                {/* <Link to="# "className="absolute left-0 top-1/2 p-4 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white hover:text-amber-500 cursor-pointer" onClick={()=>console.log("in pointer 2?")}>NEXT</Link> */}

                {/* <Link to="#" className="absolute right-0 top-1/2 p-4 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white hover:text-amber-500 cursor-pointer" onClick={()=>console.log("in pointer 1?")}>PREV</Link> */}

            </div>
            <br />

            
            {/* <div className="flex justify-center items-center space-x-5">
                <div className="dot w-4 h-4 rounded-full cursor-pointer" onClick={console.log("1")}></div>
                <div className="dot w-4 h-4 rounded-full cursor-pointer" onClick={console.log("2")}></div>
                <div className="dot w-4 h-4 rounded-full cursor-pointer" onClick={console.log("3")}></div>
            </div> */}

        </div>
    )
}