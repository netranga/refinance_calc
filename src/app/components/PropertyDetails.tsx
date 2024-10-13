import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Home, Percent, TrendingDown, Clock } from 'lucide-react'

export interface Property {
  name: string;
  loanAmount: number;
  currentRate: number;
  newRate: number;
  loanTerm: number;
  // Add any other properties that are relevant to your application
}

interface PropertyDetailsProps {
  property: Property; // Replace 'Property' with the actual type of your property object
}

const PropertyDetails: React.FC<PropertyDetailsProps> = ({ property }) => (
  <Card className="bg-gradient-to-br from-teal-50 to-teal-100 border-teal-200 shadow-lg mb-8">
    <CardHeader>
      <CardTitle className="text-2xl text-teal-700">{property.name} Details</CardTitle>
    </CardHeader>
    <CardContent>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow">
          <Home className="w-8 h-8 text-teal-600 mb-2" />
          <span className="text-sm text-teal-600">Loan Amount</span>
          <span className="text-lg font-bold text-teal-700">${property.loanAmount.toLocaleString()}</span>
        </div>
        <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow">
          <Percent className="w-8 h-8 text-teal-600 mb-2" />
          <span className="text-sm text-teal-600">Current Rate</span>
          <span className="text-lg font-bold text-teal-700">{property.currentRate}%</span>
        </div>
        <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow">
          <TrendingDown className="w-8 h-8 text-teal-600 mb-2" />
          <span className="text-sm text-teal-600">New Rate</span>
          <span className="text-lg font-bold text-teal-700">{property.newRate}%</span>
        </div>
        <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow">
          <Clock className="w-8 h-8 text-teal-600 mb-2" />
          <span className="text-sm text-teal-600">Loan Term</span>
          <span className="text-lg font-bold text-teal-700">{property.loanTerm} years</span>
        </div>
      </div>
    </CardContent>
  </Card>
)

export default PropertyDetails;
