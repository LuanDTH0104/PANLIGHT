import 'chart.js/auto';
import { Chart as ReactChart } from "react-chartjs-2";
import { Chart } from 'chart.js';

function Donut({ data }) {
    return (
        data && <ReactChart
            type="doughnut"
            data={data}
            option={{
                title: {
                    display: true
                }
            }}
        />
    )
}

export default Donut;