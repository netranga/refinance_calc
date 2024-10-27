# Refinance Calculator

## Overview

This Refinance Calculator is a web application designed to help homeowners evaluate the potential benefits of refinancing their mortgage. It provides a user-friendly interface for inputting property details and current mortgage information, then calculates and displays the potential savings and benefits of refinancing.

## How It Works

The application is built using Next.js and React, with a server-side API for fetching current interest rates. Here's a breakdown of the main components and their purposes:

1. **Header (Header.tsx)**
   - Displays the application title and any navigation elements.

2. **PropertyDetails (PropertyDetails.tsx)**
   - Allows users to input their current property value, remaining mortgage balance, and current interest rate.

3. **HomeDetails (HomeDetails.tsx)**
   - Captures additional details about the home, such as the purchase date and original loan amount.

4. **RefinanceBenefits (RefinanceBenefits.tsx)**
   - Calculates and displays the potential benefits of refinancing based on user inputs and current interest rates.

5. **API Routes**
   - `/interest-rate/route.ts`: Fetches current interest rates from Perplexity API

6. **Main Page (page.tsx)**
   - Orchestrates the overall layout and flow of the application, combining all the components.


## Getting Started

To run the Refinance Calculator locally for development:

1. Clone the repository:
   ```
   git clone https://github.com/your-username/refi-calc.git
   cd refi-calc
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the development server:
   ```
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:3000`

The application should now be running on your local machine. Any changes you make to the code will be automatically reflected in the browser.

## Future Development Ideas

1. **Loan Comparison Tool**: Allow users to compare multiple refinancing options side-by-side.

2. **Amortization Schedule**: Generate and display a detailed amortization schedule for both current and refinanced loans.

3. **Refinance Breakeven Calculator**: Calculate how long it will take for the refinance to pay for itself.
