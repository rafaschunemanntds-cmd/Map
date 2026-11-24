import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import barDados from '../mock/barDados.json'

export const BarChart2 = () => {

    return (
        <BarChart
            style={{ width: '100%', maxWidth: '1200px', maxHeight: '70vh', aspectRatio: 1.618 }}
            responsive
            data={barDados}
            margin={{
                top: 5,
                right: 0,
                left: 0,
                bottom: 5,
            }}
        >
            <CartesianGrid />
            <XAxis dataKey="label" />
            <YAxis width="auto" />
            <Tooltip />
            <Legend />
            <Bar fill='#8884d8' dataKey="atingido" radius={[10, 10, 0, 0]} />
            <Bar fill='#ce6d6d' dataKey="meta" radius={[10, 10, 0, 0]} />
        </BarChart>
    )
}