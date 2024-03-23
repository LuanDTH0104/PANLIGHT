import 'chart.js/auto';
import { Chart as ReactChart } from "react-chartjs-2";
import { Chart } from 'chart.js';
function ColumnChart({ data, height }) {
    return (
            <ReactChart
                type="bar"
                height={height}
                
                data={data}
                options={{
                    title: {
                        display: true,
                        text: 'Chart Report',
                        fontSize: 20
                    },
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                }}
            />
    )
}

export default ColumnChart;