import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { DollarSign, TrendingDown, Calendar } from 'lucide-react'

const RefinanceBenefits = ({ totalCurrentMonthlyPayment, totalNewMonthlyPayment, currentRate, newRate, loanAmount, loanTerm }) => (
  <Card className="bg-gradient-to-br from-teal-50 to-teal-100 mb-8 border-teal-200 shadow-lg">
    <CardHeader>
      <CardTitle className="text-2xl text-teal-700">Refinance Benefits</CardTitle>
    </CardHeader>
    <CardContent>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="flex items-center bg-white p-4 rounded-lg shadow">
          <DollarSign className="mr-2 text-teal-600" />
          <div>
            <p className="font-semibold text-teal-700">Total Savings</p>
            <p className="text-2xl font-bold text-teal-700">
              ${((totalCurrentMonthlyPayment - totalNewMonthlyPayment) * 12 * loanTerm).toFixed(2)}
            </p>
          </div>
        </div>
        <div className="flex items-center bg-white p-4 rounded-lg shadow">
          <TrendingDown className="mr-2 text-teal-600" />
          <div>
            <p className="font-semibold text-teal-700">Interest Rate Reduction</p>
            <p className="text-2xl font-bold text-teal-700">{(currentRate - newRate).toFixed(2)}%</p>
          </div>
        </div>
        <div className="flex items-center bg-white p-4 rounded-lg shadow">
          <Calendar className="mr-2 text-teal-600" />
          <div>
            <p className="font-semibold text-teal-700">Break-Even Point</p>
            <p className="text-2xl font-bold text-teal-700">
              {Math.ceil(loanAmount * 0.03 / ((totalCurrentMonthlyPayment - totalNewMonthlyPayment) * 12))} months
            </p>
          </div>
        </div>
      </div>
    </CardContent>
  </Card>
)

export default RefinanceBenefits;

