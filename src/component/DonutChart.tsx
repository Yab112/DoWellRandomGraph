"use client"

import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts"
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card"
import { ChartConfig, ChartContainer, ChartTooltipContent } from "../components/ui/chart"

// Sample donut chart data
const chartData = [
  { "x": 1, "y": 186 },
  { "x": 2, "y": 285 },
  { "x": 4, "y": 237 },
  { "x": 5, "y": 203 },
  { "x": 7, "y": 209 },
  { "x": 8, "y": 264 },
]

// Colors for each section of the donut
const COLORS = ["#D16BA5", "#86A8E7", "#5FFBF1", "#C792EA", "#FF92B5", "#FFA69E"]

// Chart configuration
const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig

export function DonutChart() {
  return (
    <Card className="w-full h-full">
      <CardHeader className="items-center pb-4">
        <CardTitle className="text-center text-slate-300">Donut Chart - Colorful Data Visualization</CardTitle>
      </CardHeader>
      <CardContent className="pb-0 h-[350px]">
        <ChartContainer
          config={chartConfig}
          className="mx-auto h-full w-full"
        >
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={chartData}
                dataKey="y"
                nameKey="x"
                cx="50%"
                cy="50%"
                innerRadius={70}
                outerRadius={100}
                fill="#8884d8"
                paddingAngle={5}
              >
                {chartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              {/* Tooltip */}
              <Tooltip content={<ChartTooltipContent />} />
            </PieChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
