import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronUp, ChevronDown, ArrowRight } from 'lucide-react'

interface PaymentBreakdownProps {
  title: string;
  monthlyPayment: number;
  mortgagePayment: number;
  isNew?: boolean;
  expanded: boolean;
  setExpanded: (expanded: boolean) => void;
  currentRate: number;
  newRate: number;
  totalCurrentMonthlyPayment: number;
  totalNewMonthlyPayment: number;
  hoa: number;
  propertyTax: number;
  insurance: number;
}

const PaymentBreakdown: React.FC<PaymentBreakdownProps> = ({
  title,
  monthlyPayment,
  mortgagePayment,
  isNew = false,
  expanded,
  setExpanded,
  currentRate,
  newRate,
  totalCurrentMonthlyPayment,
  totalNewMonthlyPayment,
  hoa,
  propertyTax,
  insurance
}) => (
  <Card className="bg-gradient-to-br from-teal-50 to-teal-100 border-teal-200 shadow-lg hover:shadow-xl transition-shadow duration-300">
    <CardHeader className="cursor-pointer" onClick={() => setExpanded(!expanded)}>
      <div className="flex justify-between items-center">
        <CardTitle className="text-xl text-teal-700">{title}</CardTitle>
        {expanded ? <ChevronUp className="text-teal-700" /> : <ChevronDown className="text-teal-700" />}
      </div>
    </CardHeader>
    <CardContent>
      <p className="text-4xl font-bold text-teal-700">${monthlyPayment.toFixed(2)}</p>
      <p className="text-teal-600 mt-2">at {isNew ? newRate : currentRate}% interest</p>
      {isNew && (
        <div className="flex items-center mt-4 text-teal-600">
          <ArrowRight className="mr-2" />
          <span>Monthly savings: ${(totalCurrentMonthlyPayment - totalNewMonthlyPayment).toFixed(2)}</span>
        </div>
      )}
      {expanded && (
        <div className="mt-4 space-y-2 transition-all duration-300 ease-in-out">
          <div className="flex justify-between">
            <span className="text-teal-600">Mortgage:</span>
            <span className="font-semibold">${mortgagePayment.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-teal-600">HOA:</span>
            <span className="font-semibold">${hoa.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-teal-600">Property Tax:</span>
            <span className="font-semibold">${propertyTax.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-teal-600">Insurance:</span>
            <span className="font-semibold">${insurance.toFixed(2)}</span>
          </div>
        </div>
      )}
    </CardContent>
  </Card>
)

export default PaymentBreakdown;
