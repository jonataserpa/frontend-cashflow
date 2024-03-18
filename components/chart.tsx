import { useEffect } from "react";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

function BarChart() {
    useEffect(() => {
        const context = document.getElementById("myChart") as HTMLFormElement;
        const ctx = context.getContext("2d");

        const myChart = Chart.getChart("myChart");
        if (myChart) {
            myChart.destroy();
        }

        new Chart(ctx, {
            type: "bar",
            data: {
                labels: ["Janeiro", "Fevereiro", "Março"],
                datasets: [
                    {
                        data: [66, 144],
                        label: "Entrada",
                        borderColor: "rgb(109, 253, 181)",
                        backgroundColor: "rgb(21, 146, 0)",
                        borderWidth: 2,
                    },
                    {
                        data: [20, 24],
                        label: "Saída",
                        borderColor: "rgb(255, 205, 86)",
                        backgroundColor: "rgb(186, 0, 0)",
                        borderWidth: 2,
                    },
                ],
            },
        });
    }, []);

    return (
        <>
            <div className="h-screen">
                <div className="border border-gray-400 pt-0 rounded-xl  w-full h-fit my-auto  shadow-xl">
                    <canvas id="myChart"></canvas>
                </div>
            </div>
        </>
    );
}

export default BarChart;
