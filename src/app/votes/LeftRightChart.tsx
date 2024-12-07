"use client";

import {
  CategoryScale,
  Chart,
  LinearScale,
  LineElement,
  PointElement,
} from "chart.js";
import { Line } from "react-chartjs-2";

import tailwindConfig from "@/../tailwind.config";
import { Vote } from "@/drizzle/schema";

Chart.register(CategoryScale);
Chart.register(LinearScale);
Chart.register(PointElement);
Chart.register(LineElement);

export function LeftRightChart({ votes }: { votes: Vote[] }) {
  const cumulativeAverages: number[] = [];
  let runningSum = 0;
  votes.forEach((vote, index) => {
    runningSum += vote.winnerId === vote.performance1Id ? 2 : 0;
    cumulativeAverages.push(runningSum / (index + 1));
  });

  const labels = votes.map((_, index) => index + 1);

  return (
    <Line
      className="bg-background/70"
      data={{
        labels,
        datasets: [
          {
            label: "Cumulative Average",
            data: cumulativeAverages,
            borderColor: "red",
            pointRadius: 0,
            pointHoverRadius: 0,
            tension: 0.3,
          },
        ],
      }}
      options={{
        responsive: true,
        animation: false,
        scales: {
          x: {
            title: {
              display: true,
              text: "Number of votes",
              color: tailwindConfig.theme.extend.colors.muted,
            },
          },
          y: {
            title: {
              display: true,
              text: "Left/right ratio",
              color: tailwindConfig.theme.extend.colors.muted,
            },
            min: 0.5,
            max: 1.5,
          },
        },
      }}
      plugins={[
        {
          id: "horizontalLine",
          beforeDraw(chart) {
            const {
              ctx,
              chartArea: { left, right },
              scales: { y },
            } = chart;

            // Line at y=1
            const yPosition = y.getPixelForValue(1);

            ctx.save();
            ctx.beginPath();
            ctx.moveTo(left, yPosition);
            ctx.lineTo(right, yPosition);
            ctx.lineWidth = 2;
            ctx.strokeStyle = tailwindConfig.theme.extend.colors["muted-2"];
            ctx.stroke();
            ctx.restore();
          },
        },
      ]}
    />
  );
}
