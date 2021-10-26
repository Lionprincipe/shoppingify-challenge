import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from 'recharts'

interface IMonthChartsProps {
  data: { name: string; value: number }[]
  fillColor?: string
  strockColor?: string
  color?: string
}
export const MonthCharts: React.FC<IMonthChartsProps> = ({
  data,
  strockColor,
  fillColor,
  color = 'currentColor',
}) => {
  return (
    <ResponsiveContainer width='100%' height='100%'>
      <LineChart data={data} syncId='anyId'>
        <CartesianGrid strokeDasharray='3 3' />
        <XAxis dataKey='name' />
        <YAxis />
        <Tooltip />
        <Line
          type='monotone'
          dataKey='value'
          stroke={strockColor || color}
          fill={fillColor || color}
        />
      </LineChart>
    </ResponsiveContainer>
  )
}
