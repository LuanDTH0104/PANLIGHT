import ColumnChart from "../Chart/ColumnChart";
import Donut from "../Chart/DonutChart";
import ProgressBar from "../Chart/Progressbar";
import Clock from "../Component/Clock";
import Default from "../Template/Default";

function ChartReport() {
    const data = {
        labels: [
            "Đèn điện",
            "Cổng kết nối",
            "Cảm biến",
            "Khác",
        ],
        datasets: [
            {
                label: "Thành phần trong thiết bị",
                backgroundColor: [
                    "#fcca00",
                    "#00cccc",
                    "#ff6363",
                    "#663366"
                ],
                data: [60, 20, 10, 10]
            }
        ]
    };

    const data2 = {
        labels: [
            "Critical",
            "Major",
            "Minor",
        ],
        datasets: [
            {
                label: "Alarms",
                backgroundColor: [
                    "#fcf000",
                    "#fcc930",
                    "#fc3232",

                ],
                data: [2478, 5267, 734]
            }
        ]
    };

    const data3 = {
        labels: [
            "CO2",
            "CO"
        ],
        datasets: [
            {
                label: "Chỉ số CO2/CO",
                backgroundColor: [
                    "#3e95cd",
                    "#8e5ea2"
                ],
                data: [400.2, 16]
            }
        ]
    };

    const progressData = {
        title: "Tiết kiệm chi phí",
        percentage: 45,
        amount: "12.321 VNĐ",
    }

    const progressData2 = {
        title: "Tiết kiệm điện năng",
        percentage: 75,
        amount: "14.312 kWh",
    }
    return (
        // Chart
        <Default>
            <div className="bg-[#f5f5f5] w-full h-full p-[1%] opacity-65">
                <div className="w-[95%] h-auto bg-white shadow-lg rounded-lg mx-auto p-[1%]">
                    <div className="h-full">
                        <div className="container md:grid h-full md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-end">
                            <div className="w-[90%] md:w-[80%] lg:w-2/3">
                                <div className="text-2xl p-[1%] font-bold">Tổng quan thiết bị</div>
                                <Donut data={data} />
                            </div>
                            <div>
                                <div className="text-2xl p-[1%] font-bold">Giờ chiếu sáng</div>
                                <Clock className={'h-[400px] w-[400px] md:h-[200px] md:w-[200px] xl:h-[250px] xl:w-[250px]'}/>
                            </div>
                            <ProgressBar progressData={progressData} />
                            <ProgressBar progressData={progressData2} />
                            <div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Map */}
                <div className="lg:grid lg:grid-cols-2 items-start xl:grid-cols-3 mt-[5%] ">
                    <div className="border border-1 border-[#bdb9b9] w-full lg:w-auto  p-[1%] bg-white rounded-lg mt-3 lg:ml-10 shadow-md inline-block relative">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29794.851432769246!2d105.78875276881816!3d21.01841977086442!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135acac08698957%3A0xcb92e58f7f3e275c!2zVHJ1bmcgdMOibSBI4buZaSBuZ2jhu4sgUXXhu5FjIGdpYQ!5e0!3m2!1svi!2s!4v1711293048627!5m2!1svi!2s"
                            className="w-full h-[300px] xl:w-full xl:h-[500px]"
                            style={{ "border": "0" }}
                            allowfullscreen=""
                            loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade"></iframe>
                        <div className="w-[30px] h-[30px] rounded-full bg-green-800 animate-ping duration-1000 absolute top-[250px] left-[280px]">Test01</div>
                        <div className="w-[30px] h-[30px] rounded-full bg-green-800 animate-ping duration-1000 absolute top-[270px] left-[280px]">Test02</div>
                        <div className="w-[30px] h-[30px] rounded-full bg-green-800 animate-ping duration-1000 absolute top-[250px] left-[320px]">Test03</div>
                        <div className="w-[30px] h-[30px] rounded-full bg-green-800 animate-ping duration-1000 absolute top-[270px] left-[320px]">Test04</div>
                    </div>
                    <div className=" bg-white rounded-lg mt-3 lg:ml-10 shadow-md p-3 w-full md:w-auto lg:w-2/3 xl:w-auto">
                        <div className="font-semibold text-lg">Chỉ số PM2.5</div>
                        <div className="flex">
                            <div className="w-fit bg-red-500 text-5xl p-[10%]">70.6µg/m³</div>
                        </div>
                        <div className="font-semibold text-lg">Chỉ số NO2	</div>
                        <div className="flex">
                            <div className="w-fit bg-[#ffdd33] text-3xl p-[10%] inline-block">63.6µg/m³</div>
                        </div>
                        <div className="font-semibold text-lg">Chỉ số PM10</div>
                        <div className="flex">
                            <div className="w-fit bg-[#ffdd33] text-3xl p-[10%] inline-block">104.5µg/m³</div>
                        </div>

                    </div>
                    <div className=" bg-white rounded-lg lg:ml-10 shadow-md p-3 w-auto lg:w-[25%] ">
                        <div className="font-semibold text-lg">Chỉ số CO2</div>
                        <ColumnChart data={data3} height={300} />
                    </div>
                </div>
            </div>


        </Default>
    );
}

export default ChartReport;