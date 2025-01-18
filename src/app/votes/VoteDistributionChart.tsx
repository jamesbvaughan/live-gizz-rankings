"use client";

import {
  BarElement,
  CategoryScale,
  Chart,
  LinearScale,
  LineElement,
  PointElement,
} from "chart.js";
import { Bar } from "react-chartjs-2";

import tailwindConfig from "@/../tailwind.config";

Chart.register(CategoryScale);
Chart.register(LinearScale);
Chart.register(PointElement);
Chart.register(LineElement);
Chart.register(BarElement);

export function VoteDistributionChart({
  voteCounts,
}: {
  voteCounts: number[];
}) {
  const voteDistribution: Record<number, number> = {};
  for (const count of voteCounts) {
    voteDistribution[count] = (voteDistribution[count] || 0) + 1;
  }

  // Separate the keys and values for chart labels and data
  const labels = Object.keys(voteDistribution);
  const data = Object.values(voteDistribution);

  return (
    <Bar
      className="bg-background/70"
      data={{
        labels,
        datasets: [
          {
            label: "Number of performance pairs",
            data,
            borderColor: "red",
            backgroundColor: "blue",
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
            beginAtZero: true,
            title: {
              display: true,
              text: "Pairs of songs",
              color: tailwindConfig.theme.extend.colors.muted,
            },
          },
        },
        plugins: {
          title: {
            display: true,
            text: "Distribution of Vote Counts",
          },
        },
      }}
    />
  );
}
