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
                <Link to="" onClick={()=>console.log("HI?")}>foo</Link>
            <div class="relative w-[600px] mx-auto">
                {/* <div class="slide relative">
                    <img class="w-full h-[300px] object-cover"
                        src="https://www.kindacode.com/wp-content/uploads/2022/07/flower-1.jpeg" />
                    <div class="absolute bottom-0 w-full px-5 py-3 bg-black/40 text-center text-white">Flower One Caption</div>
                </div>

                <div class="slide relative">
                    <img class="w-full h-[300px] object-cover"
                        src="https://www.kindacode.com/wp-content/uploads/2022/07/flower-2.jpeg" />
                    <div class="absolute bottom-0 w-full px-5 py-3 bg-black/40 text-center text-white">Flower Two Caption</div>
                </div>

                <div class="slide relative">
                    <img class="w-full h-[300px] object-cover"
                        src="https://www.kindacode.com/wp-content/uploads/2022/07/flower-3.jpeg" />
                    <div class="absolute bottom-0 w-full px-5 py-3 bg-black/40 text-center text-white">Flower Three Caption
                    </div>
                </div>
                 */}
                <Link to="# "class="absolute left-0 top-1/2 p-4 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white hover:text-amber-500 cursor-pointer" onclick={()=>console.log("in pointer 2?")}>NEXT</Link>

                <Link to="#" class="absolute right-0 top-1/2 p-4 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white hover:text-amber-500 cursor-pointer" onclick={()=>console.log("in pointer 1?")}>PREV</Link>

            </div>
            <br />

            
            <div class="flex justify-center items-center space-x-5">
                <div class="dot w-4 h-4 rounded-full cursor-pointer" onclick={console.log("1")}></div>
                <div class="dot w-4 h-4 rounded-full cursor-pointer" onclick={console.log("2")}></div>
                <div class="dot w-4 h-4 rounded-full cursor-pointer" onclick={console.log("3")}></div>
            </div>

        </div>
    )
}