"use client"

import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card"
import { ChartConfig, ChartContainer, ChartTooltipContent } from "../components/ui/chart"

export const description = "A scatter plot with grid lines and data points"

// Sample scatter plot data
const chartData = [
  { "x": 1, "y": 186 },
  { "x": 2, "y": 285 },
  { "x": 4, "y": 237 },
  { "x": 5, "y": 203 },
  { "x": 7, "y": 209 },
  { "x": 8, "y": 264 },
]

// Chart configuration (can be extended for different themes)
const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig

export function Radial() {
  return (
    <Card className="w-full h-full">
      <CardHeader className="items-center pb-4">
        <CardTitle className="text-center text-slate-300">Scatter Plot - Data Points Visualization</CardTitle>
      </CardHeader>
      <CardContent className="pb-0 h-[350px]">
        <ChartContainer
          config={chartConfig}
          className="mx-auto h-full w-full"
        >
          <ResponsiveContainer width="100%" height="100%">
            <ScatterChart>
              {/* Grid lines */}
              <CartesianGrid strokeDasharray="3 3" stroke="#b8c2cc" />
              {/* X and Y Axes */}
              <XAxis dataKey="x" name="x" tick={{ fill: "#b8c2cc" }} />
              <YAxis dataKey="y" name="y" tick={{ fill: "#b8c2cc" }} />
              {/* Tooltip */}
              <Tooltip cursor={{ strokeDasharray: '3 3' }} content={<ChartTooltipContent />} />
              {/* Scatter plot points */}
              <Scatter data={chartData} fill="hsl(var(--chart-1))" />
            </ScatterChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
