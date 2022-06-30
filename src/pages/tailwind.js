export default function Tailwind() {
    return (
        <>
            <br/>

    <div>
    <br/><br />
            <b><br/>#1<br/><br/></b>
            <div>
                <div class="bg-blue-100 w-5 h-6">&nbsp;</div>
                <div class="bg-blue-200 w-5 h-6">&nbsp;</div>
                <div class="bg-blue-300 w-5 h-6">&nbsp;</div>
                <div class="bg-blue-400 w-5 h-6">&nbsp;</div>
                <div class="bg-blue-500 w-5 h-6">&nbsp;</div>
                <div class="bg-blue-600 w-5 h-6">&nbsp;</div>
                <div class="bg-blue-700 w-5 h-6">&nbsp;</div>
                <div class="bg-blue-700 w-5 h-6">&nbsp;</div>
                <br></br>
            </div>

    <b><br/>#2<br/></b>

    <p 
            class="text-xs text-center m-3 p-5 bg-gray-900 text-gray-500 italic font-extrabold tracking-wider leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam suscipit orci ac nisl varius varius. Nullam auctor finibus pulvinar. Morbi porttitor placerat enim nec consequat. 
        <br/>
        --
        <span 
            class="not-italic font-normal leading-loose underline uppercase">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam suscipit orci ac nisl varius varius. Nullam auctor finibus pulvinar. Morbi porttitor placerat enim nec consequat.
        </span>
        --

    </p>

    <h1>
        FROM CLASS:
        <br/><br/>
    </h1>
    

    <h2>Lesson 1<br/></h2>
    
    <b><br/>#3<br/></b>
    <h1 class="capitalize text-xl text-gray-900">Lorem ipsum dolor sit amet consectetur.</h1>
        <b><br/>#4<br/></b>
    <p class="mt-3 leading-loose tracking-wide">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam suscipit orci ac nisl varius varius. Nullam auctor finibus pulvinar. Morbi porttitor placerat enim nec consequat.
    </p>
    <b><br/>#5<br/></b>
    <div class="m-2 p-6 bg-blue-900 text-blue-200">
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam suscipit orci ac nisl varius varius. Nullam auctor finibus pulvinar. Morbi porttitor placerat enim nec consequat.
        </p>
        <p class="mt-3 text-gray-400">- Victor Gonzalez, <span class="italic">instructor</span></p>
    </div>
    <b><br/>#6<br/></b>
    <button class="uppercase bg-blue-500 text-blue-100 px-4 py-3">Enroll Now</button>

    <br/><br/>

    <h2>
        Lesson 2<br/><br/>
    </h2>

        <b><br/>#7<br/></b>
    <div class="bg-gray-100 m-16 w-32 h-32 border border-4">&nbsp;</div>

        <b><br/>#8<br/></b>
    <div class="bg-gray-100 m-16 w-32 h-32 border-t-8 border-dotted border-blue-800">&nbsp;</div>

        <b><br/>#9<br/></b>
    <div class="bg-gray-100 m-16 w-32 h-32 border-8 border-double border-blue-800 rounded">&nbsp;</div>

        <b><br/>#10<br/></b>
    <div class="bg-gray-100 m-16 w-32 h-32 border-8 border-double border-blue-800 rounded-full">&nbsp;</div>

        <b><br/>#11<br/></b>
    <div class="bg-gray-100 m-16 w-32 h-32 border border-blue-800 rounded-t">&nbsp;</div>

        <b><br/>#12<br/></b>
    <div class="bg-gray-100 m-16 w-32 h-32 border border-blue-800 rounded-tl-full">&nbsp;</div>

        <b><br/>#13<br/></b>
        <div><button class="m-4 bg-blue-800 py-2 px-4 text-gray-400 text-sm rounded-lg border-l-8 border-blue-700">Submit</button></div>
        
        <b><br/>#14<br/></b>
        <div><button class="m-4 border-2 border-red-500 text-red-500 rounded px-3 py-1">Cancel</button></div>
        
        <b><br/>#15<br/></b>
        <div><button class="m-4 bg-indigo-200 border-b-4 border-t-4 border-indigo-800 px-4 py-1">Save</button></div>
        
        <b><br/>#16<br/></b>
        <div><button class="m-4 rounded-full border-4 px-16 py-3 uppercase font-bold text-sm bg-orange-600 border-orange-800">Buy Now</button></div>
        
        <b><br/>#17<br/></b>
        <div><button class="m-4 border font-serif text-xs uppercase rounded-lg p-2">Send Postcard</button></div>

        <b><br/>#18<br/><br/></b>
        <div class="bg-yellow-300 w-32 h-6">
            Hello 
            <div class="bg-green-300 hidden">Im hidden!</div>
            World
        </div>

        <div class="italic font-extrabold text-4xl text-center">
        <h1>
        <br/><br/><b>*************<br/> IMPORTANT! <br/>FLEXBOX<br/>*************</b><br/><br/>
        </h1>
        <div class="text-sm">
            !!!! NOTE: for some of these "h-screen" would make these responsive. Just doesnt work with the page stucture we have right now</div>

        </div>

        <b><br/>#19<br/><br/></b>

        <div class="bg-gray-200 flex justify-center">
            <div class="bg-yellow-600 w-16 h-16">1</div>
            <div class="bg-teal-700 w-16 h-16">2</div>
            <div class="bg-red-700 w-16 h-16">3</div>
        </div>

        <b><br/>#20<br/><br/></b>

        <div class="bg-gray-200 flex justify-between">
            <div class="bg-yellow-600 w-16 h-16">1</div>
            <div class="bg-teal-700 w-16 h-16">2</div>
            <div class="bg-red-700 w-16 h-16">3</div>
        </div>

        <b><br/>#21<br/><br/></b>

        <div class="bg-gray-200 flex items-center">
            <div class="text-4xl">&bull;</div>
            <p class="text-2xl">Note bullet left allignment.</p>
        </div>

        <b><br/>#22<br/><br/></b>

        <div class="bg-gray-200 flex flex-row-reverse">
            <div class="bg-yellow-600 w-16 h-16">1</div>
            <div class="bg-teal-700 w-16 h-16">2</div>
            <div class="bg-red-700 w-16 h-16">3</div>
        </div>

        <b><br/>#23<br/><br/></b>

        <div class="bg-gray-200 flex flex-col">
            <div class="bg-yellow-600 w-16 h-16">1</div>
            <div class="bg-teal-700 w-16 h-16">2</div>
            <div class="bg-red-700 w-16 h-16">3</div>
        </div>

        <b><br/>#24<br/><br/></b>

        <div class="bg-gray-200 flex flex-col-reverse justify-center items-center">
            <div class="bg-yellow-600 w-16 h-16">1</div>
            <div class="bg-teal-700 w-16 h-16">2</div>
            <div class="bg-red-700 w-16 h-16">3</div>
        </div>

        <b><br/>#25<br/><br/></b>

        <div class="bg-gray-200 flex flex-wrap">
            <div class="bg-yellow-600 w-16 h-16">1</div>
            <div class="bg-teal-700 w-16 h-16">2</div>
            <div class="bg-red-700 w-16 h-16">3</div>
            <div class="bg-yellow-600 w-16 h-16">4</div>
            <div class="bg-teal-700 w-16 h-16">5</div>
            <div class="bg-red-700 w-16 h-16">6</div>
            <div class="bg-yellow-600 w-16 h-16">7</div>
            <div class="bg-teal-700 w-16 h-16">8</div>
            <div class="bg-red-700 w-16 h-16">9</div>
            <div class="bg-yellow-600 w-16 h-16">10</div>
        </div>

        <b><br/>#26<br/><br/></b>

        <div class="bg-gray-200 flex flex-wrap-reverse">
            <div class="bg-yellow-600 w-16 h-16">1</div>
            <div class="bg-teal-700 w-16 h-16">2</div>
            <div class="bg-red-700 w-16 h-16">3</div>
            <div class="bg-yellow-600 w-16 h-16">4</div>
            <div class="bg-teal-700 w-16 h-16">5</div>
            <div class="bg-red-700 w-16 h-16">6</div>
            <div class="bg-yellow-600 w-16 h-16">7</div>
            <div class="bg-teal-700 w-16 h-16">8</div>
            <div class="bg-red-700 w-16 h-16">9</div>
            <div class="bg-yellow-600 w-16 h-16">10</div>
        </div>   

        <b><br/>#27<br/><br/></b>
        
        <div class="flex flex-wrap">
            <div class="flex w-1/3 h-1/3">
                <div class="bg-teal-100 m-2 w-full flex justify-center items-center">A</div>
            </div>
            <div class="flex w-1/3 h-1/3">
                <div class="bg-teal-200 m-2 w-full flex justify-center items-center">B</div>
            </div>
            <div class="flex w-1/3 h-1/3">
                <div class="bg-teal-300 m-2 w-full flex justify-center items-center">C</div>
            </div>
            <div class="flex w-1/3 h-1/3">
                <div class="bg-teal-400 m-2 w-full flex justify-center items-center">D</div>
            </div>
            <div class="flex w-1/3 h-1/3">
                <div class="bg-teal-500 m-2 w-full flex justify-center items-center">E</div>
            </div>
            <div class="flex w-1/3 h-1/3">
                <div class="bg-teal-600 m-2 w-full flex justify-center items-center">F</div>
            </div>
            <div class="flex w-1/3 h-1/3">
                <div class="bg-teal-700 m-2 w-full flex justify-center items-center">G</div>
            </div>
            <div class="flex w-1/3 h-1/3">
                <div class="bg-teal-800 m-2 w-full flex justify-center items-center">H</div>
            </div>
            <div class="flex w-1/3 h-1/3">
                <div class="bg-teal-900 m-2 w-full flex justify-center items-center">I</div>
            </div>
        </div>

        <h1>
        <br/><br/><div class="text-xl text-center"><b>*************<br/> IMPORTANT! <br/>RESPONSIVE<br/>*************</b></div><br/><br/>
        </h1>

        <div class="text-center font-bold">NOTE BREAKPOINTS:</div><br/>
        <div class="text-sm font-extrabold text-center">
            'sm': '640px'<br/>min-width: 640px<br/><br/>

            'md': '768px'<br/>
            @media min-width: 768px<br/><br/>

            'lg': '1024px'<br/>
            @media (min-width: 1024px)<br/><br/>

            'xl': '1280px'<br/>
            @media (min-width: 1280px) <br/><br/>

            '2xl': '1536px'<br/>
            @media (min-width: 1536px)<br/><br/>
        </div>
        
        <b><br/>#28<br/><br/></b>


        <div class="bg-blue-500 md:bg-red-500">change color at md (768px)</div>
        
        <b><br/>#29<br/><br/></b>

        <div class="border-8 md:border-double border-blue-800 md:border-green-800 lg:border-yellow-800 lg:rounded-lg md:rounded-full text-center">border change at md and lg</div>
        
        <b><br/>#30<br/><br/></b>


        <div class="bg-gray 300 flex flex-col sm:flex-row justify-center">
            <div class="w-32 h-32 bg-gray-200 border">row at sm:</div>
            <div class="w-32 h-32 bg-gray-200 border">row at sm:</div>
        </div>













</div>
            

            
        </>
    )
}