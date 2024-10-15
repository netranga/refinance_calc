import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrendingDown } from 'lucide-react'

interface HeaderProps {
  interestRate: number | null;
  error: string | null;
}

const Header: React.FC<HeaderProps> = ({ interestRate, error }) => {
  return (
    <Card className="bg-gradient-to-br from-teal-400 to-teal-600 mb-8 border-none shadow-lg">
      <CardHeader>
        <CardTitle className="text-2xl text-white">Today's Interest Rate</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between">
          <p className="text-6xl font-bold text-white">
            {error ? 'Error' : interestRate !== null ? `${interestRate}%` : 'N/A'}
          </p>
          <Badge variant="outline" className="text-white border-white">
            <TrendingDown className="mr-2" />
            <span>{error ? 'Failed to update' : interestRate !== null ? 'Updated today' : 'Not available'}</span>
          </Badge>
        </div>
        {error && <p className="text-red-200 mt-2">{error}</p>}
        <p className="text-white mt-2">
          Debug: interestRate = {interestRate !== null ? JSON.stringify(interestRate) : 'null'}, 
          error = {error !== null ? error : 'null'}
        </p>
      </CardContent>
    </Card>
  );
};

export default Header;
