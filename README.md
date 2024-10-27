# Refinance Calculator

---

This project is a custom **Refinance Calculator** app designed to help my boyfriend and me quickly assess how the current market rate affects our refinancing options for our homes. The calculator provides a breakdown of monthly payment adjustments, total savings, and an amortization schedule based on the latest market interest rate fetched from the Perplexity API.

The focus of this app is on simplicity, tailored usability, and clean, interactive design to showcase my front-end development skills.

---

## Features

- **Current Market Rate**: The top of the app displays the latest refinance interest rate, automatically updated via the Perplexity API.
- **Home Selection Dropdown**: Switch between details for each home (mine and Tristan's) with a dropdown menu.
- **Detailed Loan Summary**: For each selected home, the calculator shows:
  - Loan Amount
  - Current Rate
  - New Rate (based on the fetched market rate)
  - Loan Term (fixed at 30 years for this version)
- **Monthly Payment Comparison**: Calculates and compares current and new monthly payments, showing the estimated savings if refinanced at the new rate.
- **Refinance Benefits Summary**: Summarizes projected total savings, interest rate reduction, and the break-even point.
- **Amortization Schedule**: A graphical comparison of the loan payoff trajectory under the current vs. refinanced rates.

---

## Roadmap

- [ ] **Design Enhancements**: Make the interface more interactive and visually appealing. Future updates will include dynamic animations and possibly a more sophisticated background.
- [ ] **Refinance Calculations**: Double-check all calculations for accuracy in projecting potential savings, breakeven point, and ammorization schedule.
- [ ] **User Input Feature**: Eventually allow users to input their values to customize loan information, but this will be a later enhancement.


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
   - Fetches current interest NC 30 year interest rates using Perplexity API

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
