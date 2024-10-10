import React, { useState, useEffect } from 'react'
import { Line } from 'react-chartjs-2'
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

const Analytics: React.FC = () => {
  const [pageViews, setPageViews] = useState<number[]>([])
  const [uniqueVisitors, setUniqueVisitors] = useState<number[]>([])

  useEffect(() => {
    // Simulating API call to fetch analytics data
    const fetchData = () => {
      const views = Array.from({length: 7}, () => Math.floor(Math.random() * 1000))
      const visitors = views.map(v => Math.floor(v * 0.7))
      setPageViews(views)
      setUniqueVisitors(visitors)
    }

    fetchData()
  }, [])

  const data = {
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    datasets: [
      {
        label: 'Page Views',
        data: pageViews,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
      },
      {
        label: 'Unique Visitors',
        data: uniqueVisitors,
        borderColor: 'rgb(255, 99, 132)',
        tension: 0.1
      }
    ]
  }

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Website Traffic'
      }
    }
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Analytics</h2>
      <div className="mb-8">
        <h3 className="text-xl font-bold mb-2">Website Traffic</h3>
        <Line data={data} options={options} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white p-4 rounded-lg shadow">
          <h4 className="text-lg font-bold mb-2">Total Page Views</h4>
          <p className="text-3xl font-bold text-blue-600">{pageViews.reduce((a, b) => a + b, 0)}</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h4 className="text-lg font-bold mb-2">Total Unique Visitors</h4>
          <p className="text-3xl font-bold text-green-600">{uniqueVisitors.reduce((a, b) => a + b, 0)}</p>
        </div>
      </div>
    </div>
  )
}

export default Analytics