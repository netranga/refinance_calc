import { NextResponse } from 'next/server';

export async function GET() {
  const apiKey = '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';
  
  if (!apiKey) {
    return NextResponse.json({ error: 'API key not found' }, { status: 500 });
  }

  const response = await fetch('https://api.perplexity.ai/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`
    },
    body: JSON.stringify({
      model: 'llama-3.1-sonar-small-128k-online',
      messages: [
        { role: 'system', content: 'You are a helpful assistant that provides the current average 30-year fixed mortgage interest rate in the US.' },
        { role: 'user', content: 'What is the current average 30-year fixed mortgage interest rate in the US? Please respond with only the number, rounded to two decimal places.' }
      ]
    })
  });

  const data = await response.json();
  const interestRate = parseFloat(data.choices[0].message.content);

  return NextResponse.json({ interestRate });
}

