import { useEffect } from "react"

function ProgressBar(props) {
    useEffect(() => {
        const percent = document.querySelectorAll('.percent');
        const colHeight = document.querySelectorAll('.col-height');
        const amount = document.querySelectorAll('.amount'); 
        percent.forEach((item, index) => {
            const initData = parseInt(item.innerHTML);
            const data = [initData, initData + 1, initData + 2, initData - 1, initData - 2];
            const amountValue = amount[index].innerHTML.split(' ')[0];
            const initAmount = parseFloat(amountValue);
            const amountData = [initAmount.toFixed(3), (initAmount + 0.9).toFixed(3), (initAmount + 1.2).toFixed(3), (initAmount - 0.1).toFixed(3), (initAmount - 0.2).toFixed(3)];
            if (item) {
                setInterval(() => {
                    const randomData = data[Math.floor(Math.random() * 4)];
                    console.log(randomData);
                    item.innerHTML = randomData;
                    colHeight[index].style.height = `${randomData}%`;
                    colHeight[index].innerHTML = randomData + "%";
                    amount[index].innerHTML = amountData[Math.floor(Math.random() * 4)] + ' ' + amount[index].innerHTML.split(' ')[1];
                }, 2500);
            }
        })


    }, [])

    return (
        <div className="flex gap-2 justify-between my-[10%] md:my-0 md:justify-normal">
            <div className="w-auto">
                <div className="text-xl font-bold text-red-600">{props.progressData.title}</div>
                <div className="text-5xl text-green-600" id="percent"><span className="percent">{props.progressData.percentage}</span>%</div>
                <div className="text-lg mt-2">Trung bình</div>
                <div className="text-lg  font-bold amount">{props.progressData.amount}</div>
            </div>
            <div className="h-max-full w-auto bg-slate-300 border border-1 border-white flex flex-col justify-end relative">
                <div className={`p-1`} style={{ "height": `${100 - parseInt(props.progressData.percentage)}%` }}></div>
                <div className={`p-1 h-[${props.progressData.percentage}%] bg-green-600 text-white col-height `} style={{ "height": `${props.progressData.percentage}%` }}>{props.progressData.percentage}%</div>
                <div className="w-full h-[10px] bg-white absolute bottom-[20%] md:bottom-[10%] left-0"></div>
                <div className="w-full h-[10px] bg-white absolute bottom-[40%] md:bottom-[20%] left-0"></div>
                <div className="w-full h-[10px] bg-white absolute bottom-[60%] md:bottom-[30%] left-0"></div>
                <div className="w-full h-[10px] bg-white absolute bottom-[80%] md:bottom-[40%] left-0"></div>
                <div className="w-full h-[10px] bg-white absolute hidden md:block md:bottom-[50%] left-0"></div>
                <div className="w-full h-[10px] bg-white absolute hidden md:block md:bottom-[60%] left-0"></div>
                <div className="w-full h-[10px] bg-white absolute hidden md:block md:bottom-[70%] left-0"></div>
                <div className="w-full h-[10px] bg-white absolute hidden md:block md:bottom-[80%] left-0"></div>
                <div className="w-full h-[10px] bg-white absolute hidden md:block md:bottom-[90%] left-0"></div>
            </div>
        </div>
    )
}

export default ProgressBar