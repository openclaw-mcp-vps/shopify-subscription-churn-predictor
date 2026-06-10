export default function Page() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Shopify Subscriptions
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-5">
          Predict which subscribers will{' '}
          <span className="text-[#58a6ff]">cancel next</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Connect your Shopify store, get instant churn risk scores for every subscriber, and trigger automated retention emails before revenue walks out the door.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start Free Trial — $19/mo
        </a>
        <p className="mt-4 text-xs text-[#484f58]">No credit card required for 7-day trial. Cancel anytime.</p>

        {/* Social proof strip */}
        <div className="mt-14 grid grid-cols-3 gap-6 border border-[#21262d] rounded-xl bg-[#161b22] p-6">
          <div>
            <p className="text-2xl font-bold text-white">94%</p>
            <p className="text-xs text-[#8b949e] mt-1">Churn prediction accuracy</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-white">3x</p>
            <p className="text-xs text-[#8b949e] mt-1">Retention lift on at-risk subs</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-white">2 min</p>
            <p className="text-xs text-[#8b949e] mt-1">Setup via Shopify webhook</p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple, flat pricing</h2>
        <div className="border border-[#58a6ff] rounded-2xl bg-[#161b22] p-8 text-center shadow-lg shadow-[#58a6ff]/10">
          <p className="text-sm text-[#58a6ff] font-semibold uppercase tracking-widest mb-2">Pro Plan</p>
          <p className="text-5xl font-extrabold text-white mb-1">$19</p>
          <p className="text-[#8b949e] text-sm mb-6">per month · unlimited subscribers</p>
          <ul className="text-left space-y-3 mb-8 text-sm">
            {[
              'Real-time churn risk scoring',
              'Automated retention email triggers',
              'Shopify webhook integration',
              'Risk dashboard & CSV export',
              'Email support',
            ].map((f) => (
              <li key={f} className="flex items-center gap-2">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: 'How does it connect to my Shopify store?',
              a: 'After signup you get a webhook URL and API key. Paste them into your Shopify admin under Notifications → Webhooks. Setup takes under two minutes and requires no coding.',
            },
            {
              q: 'How is churn risk calculated?',
              a: 'We score each subscriber using behavioral signals: days since last order, skip/pause history, support ticket volume, and order frequency decline. Scores update in real time as new events arrive.',
            },
            {
              q: 'What happens when a subscriber is flagged as high risk?',
              a: 'You can configure automated retention emails (discount offers, pause options, personal outreach) that fire the moment a subscriber crosses your risk threshold — before they ever hit cancel.',
            },
          ].map(({ q, a }) => (
            <div key={q} className="border border-[#21262d] rounded-xl bg-[#161b22] p-5">
              <p className="font-semibold text-white mb-2">{q}</p>
              <p className="text-sm text-[#8b949e] leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-6 text-xs text-[#484f58]">
        © {new Date().getFullYear()} Churn Predictor. All rights reserved.
      </footer>
    </main>
  )
}
