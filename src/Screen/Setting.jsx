import Default from "../Template/Default";
import { useEffect, useState } from "react";
import { CalendarWeek, Clock } from "react-bootstrap-icons";
import Select from 'react-select';
function Setting() {
    const setting = {
        weekly: {
            title: 'Theo tuần',
            color: 'yellow-400',
            onTime: '18',
            offTime: '6'

        },
        spring: {
            title: 'Mùa Xuân',
            color: 'pink-300',
            onTime: '',
            offTime: ''
        },
        summer: {
            title: 'Mùa Hạ',
            color: 'orange-300',
            onTime: '',
            offTime: ''
        },
        autumn: {
            title: 'Mùa Thu',
            color: 'green-400',
            onTime: '',
            offTime: ''
        },
        winter: {
            title: 'Mùa Đông',
            color: 'teal-300',
            onTime: '',
            offTime: ''
        }
    }
    const [seletedRange, setSelectedRange] = useState(setting.weekly);
    const [onTime, setOnTime] = useState(localStorage.getItem('onTime') != null ? JSON.parse(localStorage.getItem('onTime')) : { value: 0, label: "18 giờ" });
    const [offTime, setOffTime] = useState(localStorage.getItem('offTime') != null ? JSON.parse(localStorage.getItem('offTime')) : { value: 5, label: "6 giờ" });
    useEffect(() => {
        const plus = document.querySelectorAll('.plus');
        const minus = document.querySelectorAll('.minus');
        const brightness = document.querySelectorAll('.brightness');
        const light = document.querySelectorAll('.light');
        const rangeTime = document.querySelectorAll('.rangeTime');
        const caseTime = document.querySelectorAll('.caseTime');
        const saveState = document.getElementById('saveState');
        const controlBar = document.querySelectorAll('.controlBar');
        caseTime.forEach((item, index) => {
            item.addEventListener('click', () => {
                caseTime.forEach((item) => {
                    item.classList.remove('bg-blue-500');
                })
                item.classList.add('bg-blue-500');
            })
        })

        //Định nghĩa khoảng thời gian và cho phép hiển thị khoảng giờ trong đồng hồ
        console.log(onTime, offTime);
        rangeTime.forEach((item, index) => {
            if ((index < onTime.value || index > (offTime.value - 1))) {
                item.classList.add('hidden')
                controlBar[index].classList.add('hidden')
            } else {
                item.classList.remove('hidden')
                controlBar[index].classList.remove('hidden')
            }
        })
        saveState.addEventListener('click', () => {
            console.log(onTime.value, offTime.value);
            rangeTime.forEach((item, index) => {
                localStorage.setItem('onTime', JSON.stringify(onTime));
                localStorage.setItem('offTime', JSON.stringify(offTime));
                if ((index < onTime.value || index > (offTime.value - 1))) {
                    item.classList.add('hidden')
                } else {
                    item.classList.remove('hidden')
                }
            })
        });


        plus.forEach((item, index) => {
            item.addEventListener('click', () => {
                const value = parseInt(brightness[index].innerHTML);
                if (value < 100) {
                    brightness[index].innerHTML = value + 1;
                    if (value <= 20) {
                        light[index].style.backgroundColor = '#ff9933';
                    }
                    else if (20 < value <= 40) {
                        light[index].style.backgroundColor = '#fae037';
                    }
                    else if (40 < value <= 60) {
                        light[index].style.backgroundColor = '#fad637';
                    }
                    else if (60 < value <= 80) {
                        light[index].style.backgroundColor = '#fccb35';
                    }
                    else if (80 < value < 100) {
                        light[index].style.backgroundColor = '#ffb833';
                    }
                } else {
                    light[index].style.backgroundColor = '#ff9933';
                }

            })
        })
        minus.forEach((item, index) => {
            item.addEventListener('click', () => {
                const value = parseInt(brightness[index].innerHTML);
                console.log(value);
                if (value > 0) {
                    brightness[index].innerHTML = value - 1;

                    if (value <= 20) {
                        light[index].style.backgroundColor = '#ff9933';
                    }
                    else if (20 < value <= 40) {
                        light[index].style.backgroundColor = '#fae037';
                    }
                    else if (40 < value <= 60) {
                        light[index].style.backgroundColor = '#fad637';
                    }
                    else if (60 < value <= 80) {
                        light[index].style.backgroundColor = '#fccb35';
                    }
                    else if (80 < value < 100) {
                        light[index].style.backgroundColor = '#ffb833';
                    }
                    else if (value == 100) {
                        light[index].style.backgroundColor = '#ff9933';
                    }
                }

            })
        })


        function changeColor(value) {
            if (value <= 20) {
                return '#ff9933';
            }
            else if (20 < value <= 40) {
                return '#ffaa33';
            }
            else if (40 < value <= 60) {
                return '#ffb833';
            }
            else if (60 < value <= 80) {
                return '#fccb35';
            }
            else if (80 < value < 100) {
                return '#fad637';
            }
            else if (value == 100) {
                return '#fae037';
            }
        }
    }, [onTime, offTime])
    return (
        <Default>
            <div className="h-screen lg:flex py-[5%]">
                {/* Setting */}
                <div className="w-full h-auto lg:w-[20%] lg:h-[80%] shadow-lg shadow-slate-300 bg-white lg:rounded-md flex justify-around lg:block">
                    <div className="flex flex-col  items-center lg:block text-base lg:text-2xl  px-1 lg:px-5 py-2 hover:bg-blue-300 caseTime" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => setSelectedRange(setting.weekly)}>
                        <CalendarWeek className="inline-block mr-1 text-yellow-400" />
                        <span className="align-middle">Theo tuần</span></div>
                    <div className="flex flex-col  items-center lg:block text-base lg:text-2xl  px-1 lg:px-5 py-2 hover:bg-blue-300 caseTime" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => setSelectedRange(setting.spring)}>
                        <Clock className="inline-block mr-1 text-pink-300" />
                        <span className="align-middle">Mùa Xuân</span></div>
                    <div className="flex flex-col  items-center lg:block text-base lg:text-2xl  px-1 lg:px-5 py-2 hover:bg-blue-300 caseTime" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => setSelectedRange(setting.summer)}><
                        Clock className="inline-block mr-1 text-orange-300" />
                        <span className="align-middle">Mùa Hạ</span></div>
                    <div className="flex flex-col  items-center lg:block text-base lg:text-2xl  px-1 lg:px-5 py-2 hover:bg-blue-300 caseTime" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => setSelectedRange(setting.autumn)}>
                        <Clock className="inline-block mr-1 text-green-400" />
                        <span className="align-middle">Mùa Thu</span></div>
                    <div className="flex flex-col  items-center lg:block text-base lg:text-2xl  px-1 lg:px-5 py-2 hover:bg-blue-300 caseTime" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => setSelectedRange(setting.winter)}>
                        <Clock className="inline-block mr-1 text-teal-300" />
                        <span className="align-middle">Mùa Đông</span></div>
                </div>
                {/* Clock */}
                <div className="w-[400px] h-[400px] lg:w-[700px] lg:h-[700px] rounded-full relative bg-slate-500 lg:ml-[10%]  mx-auto mt-[10%]">
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
                    <span className="text-lg absolute top-[50%]    left-0           font-bold ">18</span>
                    <span className="text-lg absolute top-[35%]    left-[2%]     font-bold ">19</span>
                    <span className="text-lg absolute top-[22%]    left-[8%]     font-bold ">20</span>
                    <span className="text-lg absolute top-[15%]    left-[15%]   font-bold ">21</span>
                    <span className="text-lg absolute top-[8%]      left-[22%]   font-bold ">22</span>
                    <span className="text-lg absolute top-[2%]      left-[35%]   font-bold ">23</span>
                    <span className="text-lg absolute top-[0%]      left-[50%]   font-bold ">24</span>
                    <span className="text-lg absolute top-[2%]      left-[65%]   font-bold ">1</span>
                    <span className="text-lg absolute top-[8%]      left-[75%]   font-bold ">2</span>
                    <span className="text-lg absolute top-[15%]    left-[85%]   font-bold ">3</span>
                    <span className="text-lg absolute top-[22%]    left-[90%]   font-bold ">4</span>
                    <span className="text-lg absolute top-[35%]    left-[95%]   font-bold ">5</span>
                    <span className="text-lg absolute top-[50%]    left-[97%]   font-bold ">6</span>

                    <div className="controlBar w-[40px] h-[40px]  lg:w-[70px] lg:h-[70px] rounded-full bg-slate-300 top-[35%] left-[10%] absolute">
                        <button className="w-1/2 h-1/2  border-r-[1px] border-black plus">+</button>
                        <button className="w-1/2 h-1/2 minus">-</button>
                        <div className="border-t-[1px] border-black text-center "><span className="brightness">100</span>%</div>
                    </div>
                    <div className="controlBar w-[40px] h-[40px] lg:w-[70px] lg:h-[70px] rounded-full bg-slate-300 top-[20%] left-[20%] absolute">
                        <button className="w-1/2 h-1/2  border-r-[1px] border-black plus">+</button>
                        <button className="w-1/2 h-1/2 minus">-</button>
                        <div className="border-t-[1px] border-black text-center "><span className="brightness">80</span>%</div>
                    </div>
                    <div className="controlBar w-[40px] h-[40px] lg:w-[70px] lg:h-[70px] rounded-full bg-slate-300 top-[10%] left-[35%] absolute">
                        <button className="w-1/2 h-1/2  border-r-[1px] border-black plus">+</button>
                        <button className="w-1/2 h-1/2 minus">-</button>
                        <div className="border-t-[1px] border-black text-center "><span className="brightness">70</span>%</div>
                    </div>
                    <div className="controlBar w-[40px] h-[40px] lg:w-[70px] lg:h-[70px] rounded-full bg-slate-300 top-[10%] left-[55%] absolute">
                        <button className="w-1/2 h-1/2  border-r-[1px] border-black plus">+</button>
                        <button className="w-1/2 h-1/2 minus">-</button>
                        <div className="border-t-[1px] border-black text-center "><span className="brightness">50</span>%</div>
                    </div>
                    <div className="controlBar w-[40px] h-[40px] lg:w-[70px] lg:h-[70px] rounded-full bg-slate-300 top-[20%] left-[70%] absolute">
                        <button className="w-1/2 h-1/2  border-r-[1px] border-black plus">+</button>
                        <button className="w-1/2 h-1/2 minus">-</button>
                        <div className="border-t-[1px] border-black text-center "><span className="brightness">35</span>%</div>
                    </div>
                    <div className="controlBar w-[40px] h-[40px] lg:w-[70px] lg:h-[70px] rounded-full bg-slate-300 top-[35%] left-[80%] absolute">
                        <button className="w-1/2 h-1/2  border-r-[1px] border-black plus">+</button>
                        <button className="w-1/2 h-1/2 minus">-</button>
                        <div className="border-t-[1px] border-black text-center "><span className="brightness">25</span>%</div>
                    </div>
                    <div className="controlBar w-[40px] h-[40px] lg:w-[70px] lg:h-[70px] rounded-full bg-slate-300 top-[52%] left-[80%] absolute">
                        <button className="w-1/2 h-1/2  border-r-[1px] border-black plus">+</button>
                        <button className="w-1/2 h-1/2 minus">-</button>
                        <div className="border-t-[1px] border-black text-center "><span className="brightness">100</span>%</div>
                    </div>
                    <div className="controlBar w-[40px] h-[40px] lg:w-[70px] lg:h-[70px] rounded-full bg-slate-300 top-[68%] left-[70%] absolute">
                        <button className="w-1/2 h-1/2  border-r-[1px] border-black plus">+</button>
                        <button className="w-1/2 h-1/2 minus">-</button>
                        <div className="border-t-[1px] border-black text-center "><span className="brightness">80</span>%</div>
                    </div>
                    <div className="controlBar w-[40px] h-[40px] lg:w-[70px] lg:h-[70px] rounded-full bg-slate-300 top-[80%] left-[55%] absolute">
                        <button className="w-1/2 h-1/2  border-r-[1px] border-black plus">+</button>
                        <button className="w-1/2 h-1/2 minus">-</button>
                        <div className="border-t-[1px] border-black text-center "><span className="brightness">70</span>%</div>
                    </div>
                    <div className="controlBar w-[40px] h-[40px] lg:w-[70px] lg:h-[70px] rounded-full bg-slate-300 top-[80%] left-[35%] absolute">
                        <button className="w-1/2 h-1/2  border-r-[1px] border-black plus">+</button>
                        <button className="w-1/2 h-1/2 minus">-</button>
                        <div className="border-t-[1px] border-black text-center "><span className="brightness">50</span>%</div>
                    </div>
                    <div className="controlBar w-[40px] h-[40px] lg:w-[70px] lg:h-[70px] rounded-full bg-slate-300 top-[68%] left-[20%] absolute">
                        <button className="w-1/2 h-1/2  border-r-[1px] border-black plus">+</button>
                        <button className="w-1/2 h-1/2 minus">-</button>
                        <div className="border-t-[1px] border-black text-center "><span className="brightness">35</span>%</div>
                    </div>
                    <div className="controlBar w-[40px] h-[40px] lg:w-[70px] lg:h-[70px] rounded-full bg-slate-300 top-[55%] left-[10%] absolute">
                        <button className="w-1/2 h-1/2  border-r-[1px] border-black plus">+</button>
                        <button className="w-1/2 h-1/2 minus">-</button>
                        <div className="border-t-[1px] border-black text-center "><span className="brightness">25</span>%</div>
                    </div>
                </div>
            </div>
            {/* Modal */}
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Cài đặt thời gian</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <label>Thời gian bật đèn</label>
                            <Select
                                placeholder="Chọn thời gian bật đèn"
                                onChange={setOnTime}
                                options={[
                                    { value: 0, label: "18 giờ" },
                                    { value: 1, label: "20 giờ" },
                                    { value: 2, label: "22 giờ" },
                                    { value: 3, label: "24 giờ" },
                                    { value: 4, label: "2 giờ" },
                                    { value: 5, label: "4 giờ" },
                                    { value: 6, label: "6 giờ" },
                                    { value: 7, label: "8 giờ" },
                                    { value: 8, label: "10 giờ" },
                                    { value: 9, label: "12 giờ" },
                                    { value: 10, label: "14 giờ" },
                                    { value: 11, label: "16 giờ" },
                                ]}
                            />
                            <span className="mx-auto" />
                            <label>Thời gian tắt đèn</label>
                            <Select
                                onChange={setOffTime}
                                placeholder="Chọn thời gian tắt đèn"
                                options={[
                                    { value: 0, label: "18 giờ" },
                                    { value: 1, label: "20 giờ" },
                                    { value: 2, label: "22 giờ" },
                                    { value: 3, label: "24 giờ" },
                                    { value: 4, label: "2 giờ" },
                                    { value: 5, label: "4 giờ" },
                                    { value: 6, label: "6 giờ" },
                                    { value: 7, label: "8 giờ" },
                                    { value: 8, label: "10 giờ" },
                                    { value: 9, label: "12 giờ" },
                                    { value: 10, label: "14 giờ" },
                                    { value: 11, label: "16 giờ" },
                                ]}
                            />
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Đóng</button>
                            <button type="button" class="btn btn-success" id="saveState">Lưu thay đổi</button>
                        </div>
                    </div>
                </div>
            </div>
        </Default>
    )
}

export default Setting;