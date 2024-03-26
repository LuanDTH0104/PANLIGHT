import React, { useEffect, useState } from 'react';
function Clock({ height, width }) {
    const [onTime, setOnTime] = useState(localStorage.getItem('onTime') != null ? JSON.parse(localStorage.getItem('onTime')) : { value: 0, label: "18 giờ" });
    const [offTime, setOffTime] = useState(localStorage.getItem('offTime') != null ? JSON.parse(localStorage.getItem('offTime')) : { value: 5, label: "6 giờ" });
    useEffect(() => {
        const rangeTime = document.querySelectorAll('.rangeTime');
        rangeTime.forEach((item, index) => {
            if ((index < onTime.value || index > (offTime.value - 1))) {
                item.classList.add('hidden')
            } else {
                item.classList.remove('hidden')
            }
        })
    }, []);
    return (
        <div class="rounded-full relative bg-slate-500 ml-[10%] mt-[10%]" style={{ "height": `${height}px`, "width": `${width}px` }}>
            <div className="light absolute top-0 left-0 w-full h-full bg-[#ff9933] rounded-full rangeTime" style={{ "clip-path": "polygon(0 20%, 50% 50%,  0 50%  )" }}> </div>
            <div className="light absolute top-0 left-0 w-full h-full bg-[#ffaa33] rounded-full rangeTime" style={{ "clip-path": "polygon(0 20%, 50% 50%,  20% 0  )" }}></div>
            <div className="light absolute top-0 left-0 w-full h-full bg-[#ffb833] rounded-full rangeTime" style={{ "clip-path": "polygon(20% 0, 50% 50%,  50% 0  )" }}></div>
            <div className="light absolute top-0 left-0 w-full h-full bg-[#fccb35] rounded-full rangeTime" style={{ "clip-path": "polygon(50% 0, 50% 50%,  80% 0  )" }}></div>
            <div className="light absolute top-0 left-0 w-full h-full bg-[#fad637] rounded-full rangeTime" style={{ "clip-path": "polygon(80% 0, 50% 50%,  130% 0  )" }}></div>
            <div className="light absolute top-0 left-0 w-full h-full bg-[#fae037] rounded-full rangeTime" style={{ "clip-path": "polygon(130% 0, 50% 50%,  100% 50%  )" }}></div>
            <div className="light absolute top-0 left-0 w-full h-full bg-[#ff9933] rounded-full rangeTime" style={{ "clip-path": "polygon(130% 90%, 50% 50%,  100% 50%  )" }}></div>
            <div className="light absolute top-0 left-0 w-full h-full bg-[#ffaa33] rounded-full rangeTime" style={{ "clip-path": "polygon(130% 90%, 50% 50%,  100% 120%  )" }}></div>
            <div className="light absolute top-0 left-0 w-full h-full bg-[#ffb833] rounded-full rangeTime" style={{ "clip-path": "polygon(130% 160%, 50% 50%,  50% 100%  )" }}></div>
            <div className="light absolute top-0 left-0 w-full h-full bg-[#fccb35] rounded-full rangeTime" style={{ "clip-path": "polygon(20% 100%, 50% 50%,  50% 100%  )" }}></div>
            <div className="light absolute top-0 left-0 w-full h-full bg-[#fad637] rounded-full rangeTime" style={{ "clip-path": "polygon(20% 100%, 50% 50%,  0 80%  )" }}></div>
            <div className="light absolute top-0 left-0 w-full h-full bg-[#fae037] rounded-full rangeTime" style={{ "clip-path": "polygon(0 50%, 50% 50%,  0 80%  )" }}></div>
            <span class="text-lg absolute top-[35%]    left-[2%]     font-bold ">19</span>
            <span class="text-lg absolute top-[22%]    left-[8%]     font-bold ">20</span>
            <span class="text-lg absolute top-[15%]    left-[15%]   font-bold ">21</span>
            <span class="text-lg absolute top-[8%]      left-[22%]   font-bold ">22</span>
            <span class="text-lg absolute top-[2%]      left-[35%]   font-bold ">23</span>
            <span class="text-lg absolute top-[0%]      left-[50%]   font-bold ">24</span>
            <span class="text-lg absolute top-[2%]      left-[65%]   font-bold ">1</span>
            <span class="text-lg absolute top-[8%]      left-[75%]   font-bold ">2</span>
            <span class="text-lg absolute top-[15%]    left-[85%]   font-bold ">3</span>
            <span class="text-lg absolute top-[22%]    left-[90%]   font-bold ">4</span>
            <span class="text-lg absolute top-[35%]    left-[95%]   font-bold ">5</span>
            <span class="text-lg absolute top-[50%]    left-[95%]   font-bold ">6</span>

            <div className="w-[10%] h-[10%] rounded-full bg-slate-300 top-[35%] left-[10%] absolute">
                <button className="w-1/2 h-1/2  border-r-[1px] border-black plus">+</button>
                <button className="w-1/2 h-1/2 minus">-</button>
                <div className="border-t-[1px] border-black text-center "><span className="brightness">100</span>%</div>
            </div>
            <div className="w-[10%] h-[10%] rounded-full bg-slate-300 top-[20%] left-[20%] absolute">
                <button className="w-1/2 h-1/2  border-r-[1px] border-black plus">+</button>
                <button className="w-1/2 h-1/2 minus">-</button>
                <div className="border-t-[1px] border-black text-center "><span className="brightness">80</span>%</div>
            </div>
            <div className="w-[10%] h-[10%] rounded-full bg-slate-300 top-[10%] left-[35%] absolute">
                <button className="w-1/2 h-1/2  border-r-[1px] border-black plus">+</button>
                <button className="w-1/2 h-1/2 minus">-</button>
                <div className="border-t-[1px] border-black text-center "><span className="brightness">70</span>%</div>
            </div>
            <div className="w-[10%] h-[10%] rounded-full bg-slate-300 top-[10%] left-[55%] absolute">
                <button className="w-1/2 h-1/2  border-r-[1px] border-black plus">+</button>
                <button className="w-1/2 h-1/2 minus">-</button>
                <div className="border-t-[1px] border-black text-center "><span className="brightness">50</span>%</div>
            </div>
            <div className="w-[10%] h-[10%] rounded-full bg-slate-300 top-[20%] left-[70%] absolute">
                <button className="w-1/2 h-1/2  border-r-[1px] border-black plus">+</button>
                <button className="w-1/2 h-1/2 minus">-</button>
                <div className="border-t-[1px] border-black text-center "><span className="brightness">35</span>%</div>
            </div>
            <div className="w-[10%] h-[10%] rounded-full bg-slate-300 top-[35%] left-[80%] absolute">
                <button className="w-1/2 h-1/2  border-r-[1px] border-black plus">+</button>
                <button className="w-1/2 h-1/2 minus">-</button>
                <div className="border-t-[1px] border-black text-center "><span className="brightness">25</span>%</div>
            </div>
        </div>
    )
}

export default Clock;