'use client'

import { useState, useEffect } from 'react'
import Header from './components/Header'
import PropertySelector from './components/PropertySelector'
import PropertyDetails from './components/PropertyDetails'
import PaymentBreakdown from './components/PaymentBreakdown'
import RefinanceBenefits from './components/RefinanceBenefits'
import LoanAmortization from './components/LoanAmoritization'
import { Card, CardContent } from "@/components/ui/card"

const properties = {
  'my-home': {
    name: 'My Home',
    loanAmount: 240000,
    currentRate: 5.625,
    newRate: 5.625,
    loanTerm: 30,
    hoa: 174,
    propertyTax: 280,
    insurance: 90
  },
  'tristan-home': {
    name: "Tristan's Home",
    loanAmount: 280000,
    currentRate: 6.99,
    newRate: 6.99,
    loanTerm: 30,
    hoa: 150,
    propertyTax: 110,
    insurance: 80
  }
}

// At the top of your file, define the type for your chart data
type ChartDataItem = {
  year: number;
  currentBalance: number;
  newBalance: number;
  currentInterest: number;
  newInterest: number;
  currentPrincipal: number;
  newPrincipal: number;
};

export default function Home() {
  const [selectedProperty, setSelectedProperty] = useState<string | undefined>(undefined)
  const [loanAmount, setLoanAmount] = useState(0)
  const [currentRate, setCurrentRate] = useState(0)
  const [newRate, setNewRate] = useState(0)
  const [loanTerm, setLoanTerm] = useState(0)
  const [hoa, setHoa] = useState(0)
  const [propertyTax, setPropertyTax] = useState(0)
  const [insurance, setInsurance] = useState(0)
  const [chartData, setChartData] = useState<ChartDataItem[]>([])
  const [newExpanded, setNewExpanded] = useState(false);
  const [currentExpanded, setCurrentExpanded] = useState(false);
  const [interestRate, setInterestRate] = useState<number | null>(null);

  useEffect(() => {
    if (selectedProperty) {
      const property = properties[selectedProperty as keyof typeof properties];
      setLoanAmount(property.loanAmount);
      setCurrentRate(property.currentRate);
      setNewRate(property.newRate);
      setLoanTerm(property.loanTerm);
      setHoa(property.hoa);
      setPropertyTax(property.propertyTax);
      setInsurance(property.insurance);
    }
  }, [selectedProperty])

  useEffect(() => {
    calculateAmortization()
  }, [loanAmount, currentRate, newRate, loanTerm])

  useEffect(() => {
    fetchInterestRate();
  }, []);

  useEffect(() => {
    if (interestRate !== null && selectedProperty) {
      const property = properties[selectedProperty as keyof typeof properties];
      setNewRate(interestRate);
      property.newRate = interestRate;
    }
  }, [interestRate, selectedProperty]);

  const fetchInterestRate = async () => {
    try {
      const response = await fetch('/api');
      if (!response.ok) {
        throw new Error('Failed to fetch interest rate');
      }
      const data = await response.json();
      setInterestRate(data.interestRate);
      setNewRate(data.interestRate); // Update newRate with the fetched interest rate
    } catch (error) {
      console.error('Error fetching interest rate:', error);
    }
  };

  const calculateMonthlyPayment = (principal: number, rate: number, term: number) => {
    const monthlyRate = rate / 100 / 12
    const payments = term * 12
    return (principal * monthlyRate * Math.pow(1 + monthlyRate, payments)) / (Math.pow(1 + monthlyRate, payments) - 1)
  }

  const calculateAmortization = () => {
    const currentMonthlyPayment = calculateMonthlyPayment(loanAmount, currentRate, loanTerm)
    const newMonthlyPayment = calculateMonthlyPayment(loanAmount, newRate, loanTerm)

    let currentBalance = loanAmount
    let newBalance = loanAmount
    const data = []

    for (let year = 0; year <= loanTerm; year++) {
      const currentInterest = currentBalance * (currentRate / 100)
      const newInterest = newBalance * (newRate / 100)
      const currentPrincipal = (currentMonthlyPayment * 12) - currentInterest
      const newPrincipal = (newMonthlyPayment * 12) - newInterest

      data.push({
        year: new Date().getFullYear() + year,
        currentBalance: Math.round(currentBalance),
        newBalance: Math.round(newBalance),
        currentInterest: Math.round(currentInterest),
        newInterest: Math.round(newInterest),
        currentPrincipal: Math.round(currentPrincipal),
        newPrincipal: Math.round(newPrincipal)
      })

      currentBalance -= currentPrincipal
      newBalance -= newPrincipal
    }

    setChartData(data)
  }

  const currentMonthlyPayment = calculateMonthlyPayment(loanAmount, currentRate, loanTerm)
  const newMonthlyPayment = calculateMonthlyPayment(loanAmount, newRate, loanTerm)

  const totalCurrentMonthlyPayment = currentMonthlyPayment + hoa + propertyTax + insurance
  const totalNewMonthlyPayment = newMonthlyPayment + hoa + propertyTax + insurance

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-white text-gray-800 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold mb-8 text-teal-700 text-center">Refinance Calculator</h1>
        
        <Header interestRate={interestRate} error={null} />
        
        <PropertySelector onValueChange={setSelectedProperty} />

        {selectedProperty ? (
          <>
            <PropertyDetails property={properties[selectedProperty as keyof typeof properties]} />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <PaymentBreakdown 
                title="Current Monthly Payment" 
                monthlyPayment={totalCurrentMonthlyPayment} 
                mortgagePayment={currentMonthlyPayment}
                expanded={currentExpanded}
                setExpanded={setCurrentExpanded}
                currentRate={currentRate}
                newRate={newRate}
                totalCurrentMonthlyPayment={totalCurrentMonthlyPayment}
                totalNewMonthlyPayment={totalNewMonthlyPayment}
                hoa={hoa}
                propertyTax={propertyTax}
                insurance={insurance}
              />
              <PaymentBreakdown 
                title="New Monthly Payment" 
                monthlyPayment={totalNewMonthlyPayment} 
                mortgagePayment={newMonthlyPayment}
                isNew={true}
                expanded={newExpanded}
                setExpanded={setNewExpanded}
                currentRate={currentRate}
                newRate={newRate}
                totalCurrentMonthlyPayment={totalCurrentMonthlyPayment}
                totalNewMonthlyPayment={totalNewMonthlyPayment}
                hoa={hoa}
                propertyTax={propertyTax}
                insurance={insurance}
              />
            </div>
            <RefinanceBenefits 
              totalCurrentMonthlyPayment={totalCurrentMonthlyPayment}
              totalNewMonthlyPayment={totalNewMonthlyPayment}
              currentRate={currentRate}
              newRate={newRate}
              loanAmount={loanAmount}
              loanTerm={loanTerm}
            />
            <LoanAmortization chartData={chartData} />
          </>
        ) : (
          <Card className="bg-gradient-to-br from-teal-50 to-teal-100 border-teal-200 shadow-lg mb-8">
            <CardContent className="p-8 text-center">
              <p className="text-xl text-teal-700 mb-4">Please select a property to view details and calculate refinance options.</p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}
