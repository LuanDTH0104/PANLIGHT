import { useEffect } from "react"

function ProgressBar(props) {
    useEffect(() => {
        const percent = document.querySelector('#percent');
        const initData = parseInt(props.progressData.percentage);
        const data = [initData, initData + 1, initData + 2, initData - 1, initData -2];
        
        if(percent){
            setInterval(() => {
                const randomData = data[Math.floor(Math.random() * 4)];
                console.log(randomData);
                percent.innerHTML = randomData+'%';
            }, 2000);
        }
    }, [])

    return (
        <div className="flex gap-2">
            <div className="w-auto">
                <div className="text-xl ">{props.progressData.title}</div>
                <div className="text-5xl text-green-600" id="percent">{props.progressData.percentage}%</div>
                <div className="text-lg mt-2">Trung bình</div>
                <div className="text-lg  font-bold">{props.progressData.amount}</div>
            </div>
            <div className="h-max-full w-auto bg-white border border-1 border-black">
                <div className={`p-1`} style={{"height": `${100-parseInt(props.progressData.percentage)}%`}}></div>
                <div className={`p-1 h-[${props.progressData.percentage}%] bg-green-600 text-white`} style={{"height": `${props.progressData.percentage}%`}}>{props.progressData.percentage}%</div>
            </div>
        </div>
    )
}

export default ProgressBar