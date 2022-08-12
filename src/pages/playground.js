import { useEffect } from "react";


export default function Playground() {

    // set the default active slide to the first one
    let slideIndex = 1;
    // showSlide(slideIndex);

    useEffect(() => {
        // showSlide(slideIndex);

    }, [])

        
    

    return (
        <div>
           



           <div className="accordion" id="accordionExample">
            
                {/* NEED HERE */}
                <div className="accordion-item bg-white border border-gray-200">
                    <h2 className="accordion-header mb-0" id="headingOne">
                    <button className="
                        accordion-button
                        relative
                        flex
                        items-center
                        w-full
                        py-4
                        px-5
                        text-base text-gray-800 text-left
                        bg-white
                        border-0
                        rounded-none
                        transition
                        focus:outline-none
                    " type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true"
                        aria-controls="collapseOne">
                        Si
                    </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample">
                    <div className="accordion-body py-4 px-5">
                        <strong>This is the first item's accordion body.</strong> It is shown by default,
                        until the collapse plugin adds the appropriate classes that we use to style each
                        element. These classes control the overall appearance, as well as the showing and
                        hiding via CSS transitions. You can modify any of this with custom CSS or overriding
                        our default variables. It's also worth noting that just about any HTML can go within
                        the <code>.accordion-body</code>, though the transition does limit overflow.
                    </div>
                    </div>
                </div>
                
            </div>


            {/* DO NOT NEED HERE */}
            {/* <div className="accordion-item bg-white border border-gray-200">
                <h2 className="accordion-header mb-0" id="headingOne">
                <button className="
                    accordion-button
                    relative
                    flex
                    items-center
                    w-full
                    py-4
                    px-5
                    text-base text-gray-800 text-left
                    bg-white
                    border-0
                    rounded-none
                    transition
                    focus:outline-none
                " type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true"
                    aria-controls="collapseOne">
                    Nein
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne"
                data-bs-parent="#accordionExample">
                <div className="accordion-body py-4 px-5">
                    <strong>This is the first item's accordion body.</strong> It is shown by default,
                    until the collapse plugin adds the appropriate classes that we use to style each
                    element. These classes control the overall appearance, as well as the showing and
                    hiding via CSS transitions. You can modify any of this with custom CSS or overriding
                    our default variables. It's also worth noting that just about any HTML can go within
                    the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
                </div>
            </div> */}
                
            




        </div>
    )
}