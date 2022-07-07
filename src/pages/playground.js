import { useEffect } from "react";
export default function Playground() {

    // set the default active slide to the first one
    let slideIndex = 1;
    // showSlide(slideIndex);

    useEffect(() => {
        showSlide(slideIndex);
    }, [])

    // change slide with the prev/next button
    function moveSlide(moveStep) {
        showSlide(slideIndex += moveStep);
    }

    // change slide with the dots
    function currentSlide(n) {
        showSlide(slideIndex = n);
    }

    function showSlide(n) {
        let i;
        const slides = document.getElementsByClassName("slide");
        const dots = document.getElementsByClassName('dot');

        if (n > slides.length) { slideIndex = 1 }
        if (n < 1) { slideIndex = slides.length }

        // hide all slides
        for (i = 0; i < slides.length; i++) {
            slides[i].classList.add('hidden');
        }

        // remove active status from all dots
        for (i = 0; i < dots.length; i++) {
            dots[i].classList.remove('bg-yellow-500');
            dots[i].classList.add('bg-green-600');
        }

        if(slideIndex > 0 && slides[slideIndex - 1]){
            console.log('do it! index would be', slideIndex - 1)
            console.log('doi it! slide would be', slides[slideIndex - 1])
        // show the active slide
        slides[slideIndex - 1].classList.remove('hidden');

        // highlight the active dot
        dots[slideIndex - 1].classList.remove('bg-green-600');
        dots[slideIndex - 1].classList.add('bg-yellow-500');
        }
        else {
            console.log('dont do it!')
        }
        
    }

    return (
        <div className='p-10'>

            <div class="relative w-[600px] mx-auto">
                <div class="slide relative">
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
                
                <a class="absolute left-0 top-1/2 p-4 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white hover:text-amber-500 cursor-pointer"
                    onclick={moveSlide(-1)}>❮</a>

                <a class="absolute right-0 top-1/2 p-4 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white hover:text-amber-500 cursor-pointer"
                    onclick={moveSlide(1)}>❯</a>

            </div>
            <br />

            
            <div class="flex justify-center items-center space-x-5">
                <div class="dot w-4 h-4 rounded-full cursor-pointer" onclick="currentSlide(1)"></div>
                <div class="dot w-4 h-4 rounded-full cursor-pointer" onclick="currentSlide(2)"></div>
                <div class="dot w-4 h-4 rounded-full cursor-pointer" onclick="currentSlide(3)"></div>
            </div>

        </div>
    )
}