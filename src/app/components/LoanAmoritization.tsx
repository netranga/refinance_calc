import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

interface LoanData {
  year: number;
  currentBalance?: number;
  newBalance?: number;
  currentInterest?: number;
  newInterest?: number;
  currentPrincipal?: number;
  newPrincipal?: number;
}

const LoanAmortization: React.FC<{ chartData: any }> = ({ chartData }) => (
  <Card className="bg-gradient-to-br from-teal-50 to-teal-100 border-teal-200 shadow-lg">
    <CardHeader>
      <CardTitle className="text-2xl text-teal-700">Loan Amortization</CardTitle>
    </CardHeader>
    <CardContent>
      <Tabs defaultValue="chart" className="w-full">
        <TabsList className="grid w-full grid-cols-2 bg-teal-100 rounded-lg mb-4">
          <TabsTrigger value="chart" className="data-[state=active]:bg-teal-600 data-[state=active]:text-white rounded-l-lg">Chart</TabsTrigger>
          <TabsTrigger value="comparison" className="data-[state=active]:bg-teal-600 data-[state=active]:text-white rounded-r-lg">Comparison</TabsTrigger>
        </TabsList>
        <TabsContent value="chart">
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#14b8a6" />
              <XAxis dataKey="year" stroke="#0f766e" />
              <YAxis stroke="#0f766e" />
              <Tooltip contentStyle={{ backgroundColor: '#f0fdfa', border: '1px solid #14b8a6' }} />
              <Legend />
              <Line type="monotone" dataKey="currentBalance" name="Current Loan" stroke="#0d9488" strokeWidth={2} />
              <Line type="monotone" dataKey="newBalance" name="Refinanced Loan" stroke="#0891b2" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </TabsContent>
        <TabsContent value="comparison">
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left text-teal-700">
              <thead className="text-xs uppercase bg-teal-100">
                <tr>
                  <th className="px-6 py-3">Year</th>
                  <th className="px-6 py-3">Current Balance</th>
                  <th className="px-6 py-3">New Balance</th>
                  <th className="px-6 py-3">Current Interest Paid</th>
                  <th className="px-6 py-3">New Interest Paid</th>
                  <th className="px-6 py-3">Current Principal Paid</th>
                  <th className="px-6 py-3">New Principal Paid</th>
                </tr>
              </thead>
              <tbody>
                {chartData.map((data: LoanData, index: number) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-teal-50'}>
                    <td className="px-6 py-4">{data.year}</td>
                    <td className="px-6 py-4">${data.currentBalance?.toLocaleString()}</td>
                    <td className="px-6 py-4">${data.newBalance?.toLocaleString()}</td>
                    <td className="px-6 py-4">${data.currentInterest?.toLocaleString()}</td>
                    <td className="px-6 py-4">${data.newInterest?.toLocaleString()}</td>
                    <td className="px-6 py-4">${data.currentPrincipal?.toLocaleString()}</td>
                    <td className="px-6 py-4">${data.newPrincipal?.toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </TabsContent>
      </Tabs>
    </CardContent>
  </Card>
)

export default LoanAmortization;
