import ColumnChart from "../Chart/ColumnChart";
import Donut from "../Chart/DonutChart";
import ProgressBar from "../Chart/Progressbar";
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
            "Test 01",
            "Test 02",
            "Test 03",
            "Test 04",
        ],
        datasets: [
            {
                label: "Chỉ số bụi mịn",
                backgroundColor: [
                    "#3e95cd",
                    "#8e5ea2",
                    "#3cba9f",
                    "#e8c3b9",
                ],
                data: [2478, 5267, 734, 784]
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
        amount: "14.312kWh",
    }
    return (
        // Chart
        <Default>
            <div className="bg-[#f5f5f5] w-full h-full p-[1%]">
                <div className="w-[95%] h-auto bg-white shadow-lg rounded-lg mx-auto p-[1%]">
                    <div className="h-full">
                        <div className="text-2xl p-[1%]">Tổng quan thiết bị</div>
                        <div className="flex h-full">
                            <div className="w-[20%]"><Donut data={data} /></div>
                            <div className="w-[18%] mx-[10%]"><Donut data={data2} /></div>
                            <ProgressBar progressData={progressData} />
                            <div className="w-[10%]"></div>
                            <ProgressBar progressData={progressData2} />
                            <div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Map */}
                <div className="flex items-center">
                    <div className="border border-1 border-[#bdb9b9] w-[40%]  p-[1%] bg-white rounded-lg mt-3 ml-10 shadow-md inline-block">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.030892483734!2d105.80228548600446!3d21.07142833627597!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135aae8473a1179%3A0x656e0684de134c65!2zMTYgxJAuIE5ndXnhu4VuIEhvw6BuZyBUw7RuLCBYdcOibiBMYSwgVMOieSBI4buTLCBIw6AgTuG7mWksIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1711089068532!5m2!1svi!2s"
                            width="600"
                            height="500"
                            style={{ "border": "0" }}
                            allowfullscreen=""
                            loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                    <div className=" bg-white rounded-lg mt-3 ml-10 shadow-md p-3 w-[25%]">
                        <div className="font-semibold text-lg">Chỉ số bụi mịn</div>
                        <ColumnChart data={data3} height={355} />
                    </div>
                    <div className=" bg-white rounded-lg mt-3 ml-10 shadow-md p-3 w-[25%]">
                        <div className="font-semibold text-lg">Chỉ số CO2</div>
                        <ColumnChart data={data3} height={355} />
                    </div>
                </div>
            </div>


        </Default>
    );
}

export default ChartReport;