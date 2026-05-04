const APP_URL = 'https://freightgain-app.vercel.app'

function Logo() {
  return (
    <a className="logo" href="#top" aria-label="FreightGain home">
      <span className="logoMark" aria-hidden="true">
        <svg viewBox="0 0 48 48" role="img">
          <path d="M9 39V8h19l-5 7H17v7h14l-5 7h-9v10H9Z" fill="currentColor" />
          <path d="M28 17h11c1.4 0 2.3 1.4 1.8 2.7C38.8 26.1 33.5 38 22 38h-6l4.5-7H24c5.6 0 8.8-4.4 10.7-8H28v-6Z" fill="currentColor" opacity=".95" />
          <path d="M12 37c5.6-10.4 14.8-18.2 27-26" fill="none" stroke="#F7F9FB" strokeWidth="4" strokeLinecap="round" />
          <path d="M15 34c5-8.4 13.2-15 23.5-21.5" fill="none" stroke="#0B1D3A" strokeWidth="1.4" strokeDasharray="4 4" strokeLinecap="round" />
          <circle cx="14" cy="35" r="4" fill="#00B2A9" stroke="#0B1D3A" strokeWidth="1.5" />
          <circle cx="34" cy="16" r="4" fill="#0A6BFF" stroke="#0B1D3A" strokeWidth="1.5" />
          <path d="M35 15l8-8v9l-3-2.4-4.2 4.2L35 15Z" fill="#22C55E" />
        </svg>
      </span>
      <span className="logoText">
        <span className="wordmark"><span>Freight</span><strong>Gain</strong></span>
        <span className="tagline">Profit. Clarity. Control.</span>
      </span>
    </a>
  )
}

function MetricCard({ label, value, accent = 'blue', note }) {
  return (
    <div className="metricCard">
      <div className={`metricIcon ${accent}`} aria-hidden="true" />
      <span className="metricLabel">{label}</span>
      <strong>{value}</strong>
      {note && <small>{note}</small>}
    </div>
  )
}

function Feature({ marker, title, children }) {
  return (
    <article className="featureCard">
      <div className="featureMarker" aria-hidden="true">{marker}</div>
      <h3>{title}</h3>
      <p>{children}</p>
    </article>
  )
}

function App() {
  return (
    <div id="top" className="siteShell">
      <header className="siteHeader">
        <Logo />
        <nav className="mainNav" aria-label="Primary navigation">
          <a href="#product">Product</a>
          <a href="#features">Features</a>
          <a href="#who">Who it’s for</a>
          <a href="#pricing">Pricing</a>
        </nav>
        <div className="navActions">
          <a className="btn btnGhost" href={APP_URL}>Sign in</a>
          <a className="btn btnPrimary" href={APP_URL}>Launch App</a>
        </div>
      </header>

      <main>
        <section className="hero sectionGrid">
          <div className="heroCopy">
            <div className="eyebrow">Freight profitability software</div>
            <h1>Know the profit before you move the load.</h1>
            <p className="heroText">
              FreightGain gives small fleets and owner-operators a clear view of revenue,
              fuel, deadhead, expenses, and net profit before and after every load.
            </p>
            <div className="heroActions">
              <a className="btn btnPrimary large" href={APP_URL}>Launch App</a>
              <a className="btn btnSecondary large" href="#features">View Features</a>
            </div>
          </div>

          <div className="dashboardPreview" aria-label="FreightGain dashboard preview">
            <div className="previewTopbar">
              <span>May profit summary</span>
              <span className="statusDot">Early build</span>
            </div>
            <div className="previewGrid">
              <MetricCard label="Gross Revenue" value="$48,260" accent="green" note="this month" />
              <MetricCard label="Net Profit" value="$8,940" accent="teal" note="after costs" />
              <MetricCard label="Fuel Cost" value="$13,840" accent="red" note="tracked" />
              <MetricCard label="Revenue / Mile" value="$2.71" accent="blue" note="loaded" />
              <MetricCard label="Net / Mile" value="$0.50" accent="green" note="estimated" />
              <MetricCard label="Open Balance" value="$6,800" accent="amber" note="unpaid" />
            </div>
            <div className="marginStrip">
              <span>Monthly margin</span>
              <strong>18.4%</strong>
              <div className="bar"><span /></div>
              <small>Designed for load-level visibility</small>
            </div>
          </div>
        </section>

        <section id="product" className="problemSection sectionGrid">
          <div>
            <div className="eyebrow">Problem</div>
            <h2>Most small carriers know what a load pays, but not what it actually keeps.</h2>
          </div>
          <div className="solutionPanel">
            <div className="eyebrow">Solution</div>
            <p>
              FreightGain connects dispatch, fuel, trips, brokers, and maintenance into one
              profitability workspace built to show the numbers behind every move.
            </p>
          </div>
        </section>

        <section id="features" className="sectionBlock">
          <div className="sectionHeader">
            <div className="eyebrow">Features</div>
            <h2>Built around the freight workflow.</h2>
            <p>Simple tools for tracking revenue, costs, and operational details without burying the numbers.</p>
          </div>
          <div className="featureGrid">
            <Feature marker="01" title="Load Profit Tracking">Track rate, miles, expenses, and estimated net profit by load.</Feature>
            <Feature marker="02" title="Fuel Cost Visibility">Designed to connect fuel spend to load and trip performance.</Feature>
            <Feature marker="03" title="Trip-Based Profit Summary">Group related loads and miles into a clearer trip-level view.</Feature>
            <Feature marker="04" title="Broker & Contact Records">Keep broker, customer, and load contact details in one workspace.</Feature>
            <Feature marker="05" title="Maintenance Watchlist">Monitor service intervals and upcoming maintenance costs.</Feature>
            <Feature marker="06" title="iPad Cockpit Mode">A focused view designed for quick checks from the road or desk.</Feature>
          </div>
        </section>

        <section className="profitSection sectionGrid">
          <div className="comparePanel before">
            <h2>Before FreightGain</h2>
            <ul>
              <li>Rate confirmations</li>
              <li>Fuel receipts</li>
              <li>Deadhead estimates</li>
              <li>Notes scattered everywhere</li>
            </ul>
          </div>
          <div className="comparePanel after">
            <h2>With FreightGain</h2>
            <ul>
              <li>Gross revenue</li>
              <li>Fuel cost</li>
              <li>Deadhead cost</li>
              <li>Misc expenses</li>
              <li>Net profit</li>
              <li>Revenue per mile</li>
              <li>Net per mile</li>
            </ul>
          </div>
        </section>

        <section id="who" className="sectionBlock">
          <div className="sectionHeader compact">
            <div className="eyebrow">Who it’s for</div>
            <h2>Made for small freight operators.</h2>
          </div>
          <div className="audienceGrid">
            <article><h3>Hotshot carriers</h3><p>Keep lane pricing, mileage, and trip costs visible before taking the load.</p></article>
            <article><h3>Owner-operators</h3><p>Track what the truck actually keeps after fuel, deadhead, and expenses.</p></article>
            <article><h3>Small fleets</h3><p>Build a cleaner workspace for dispatch, load history, and profitability checks.</p></article>
            <article><h3>Dispatchers</h3><p>Use better numbers when reviewing load options and planning routes.</p></article>
          </div>
        </section>

        <section id="pricing" className="ctaSection">
          <div>
            <div className="eyebrow">Early access / private build</div>
            <h2>Run every load with the numbers in front of you.</h2>
            <p>FreightGain is currently in early build/testing.</p>
          </div>
          <a className="btn btnPrimary large" href={APP_URL}>Launch App</a>
        </section>
      </main>

      <footer className="footer">
        <Logo />
        <nav aria-label="Footer navigation">
          <a href="#product">Product</a>
          <a href="#features">Features</a>
          <a href={APP_URL}>Login</a>
        </nav>
      </footer>
    </div>
  )
}

export default App
