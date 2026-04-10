import './App.css'

function App() {
  return (
    <main className="not-found">
      <div className="not-found__inner">
        <p className="not-found__code" aria-hidden="true">404</p>

        <div className="not-found__content">
          <svg
            className="not-found__icon"
            xmlns="http://www.w3.org/2000/svg"
            width="56"
            height="56"
            viewBox="0 0 56 56"
            fill="none"
            aria-hidden="true"
          >
            <circle cx="28" cy="28" r="28" fill="var(--accent-bg)" />
            <path
              d="M28 16v14M28 36v2"
              stroke="var(--accent)"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
          </svg>

          <h1 className="not-found__heading">Page not found</h1>
          <p className="not-found__description">
            Oops! The page you are looking for doesn't exist.<br />
            It might have been moved or deleted.
          </p>

          <a href="/" className="not-found__button">
            Back to home
          </a>
        </div>
      </div>
    </main>
  )
}

export default App