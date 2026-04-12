import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import { SegmentedButton } from './components/SegmentedButton'
import './App.css'

const SEGMENTS = [
  { value: 'flights', label: 'Flights' },
  { value: 'hotels',  label: 'Hotels'  },
  { value: 'rentals', label: 'Rentals' },
]

function App() {
  const [count, setCount] = useState(0)
  const [trip, setTrip] = useState(['flights'])

  return (
    <>
      <section
        id="center"
        className="oaf:flex oaf:flex-col oaf:gap-6.25 oaf:place-content-center oaf:place-items-center oaf:grow oaf:max-lg:pt-8 oaf:max-lg:px-5 oaf:max-lg:pb-6 oaf:max-lg:gap-4.5"
      >
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <div>
          <h1>Get started</h1>
          <p>
            Edit <code>src/App.tsx</code> and save to test <code>HMR</code>
          </p>
        </div>
        <button
          className="counter oaf:text-base oaf:py-1.25 oaf:px-2.5 oaf:rounded-[5px] oaf:text-(--accent) oaf:bg-(--accent-bg) oaf:border-2 oaf:border-transparent oaf:transition-[border-color] oaf:duration-300 oaf:mb-6 oaf:hover:border-(--accent-border) oaf:focus-visible:outline-2 oaf:focus-visible:outline-(--accent) oaf:focus-visible:outline-offset-2"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>

        test

        <SegmentedButton
          segments={SEGMENTS}
          selected={trip}
          onChange={setTrip}
          aria-label="Trip type"
        />
      </section>

      <div className="ticks"></div>

      <section
        id="next-steps"
        className="oaf:flex oaf:border-t oaf:border-(--border) oaf:text-left oaf:max-lg:flex-col oaf:max-lg:text-center"
      >
        <div
          id="docs"
          className="oaf:flex-1 oaf:basis-0 oaf:p-8 oaf:border-r oaf:border-(--border) oaf:max-lg:py-6 oaf:max-lg:px-5 oaf:max-lg:border-r-0 oaf:max-lg:border-b oaf:max-lg:border-(--border)"
        >
          <svg
            className="oaf:mb-4 oaf:w-5.5 oaf:h-5.5"
            role="presentation"
            aria-hidden="true"
          >
            <use href="/icons.svg#documentation-icon"></use>
          </svg>
          <h2>Documentation</h2>
          <p>Your questions, answered</p>
          <ul className="oaf:list-none oaf:p-0 oaf:flex oaf:gap-2 oaf:mt-8 oaf:max-lg:mt-5 oaf:max-lg:flex-wrap oaf:max-lg:justify-center">
            <li className="oaf:max-lg:flex-1 oaf:max-lg:basis-[calc(50%-4px)]">
              <a
                href="https://vite.dev/"
                target="_blank"
                className="oaf:flex oaf:items-center oaf:gap-2 oaf:px-3 oaf:py-1.5 oaf:text-base oaf:text-(--text-h) oaf:no-underline oaf:rounded-md oaf:bg-(--social-bg) oaf:transition-shadow oaf:duration-300 oaf:hover:shadow-(--shadow) oaf:max-lg:w-full oaf:max-lg:justify-center oaf:max-lg:box-border"
              >
                <img className="oaf:h-4.5" src={viteLogo} alt="" />
                Explore Vite
              </a>
            </li>
            <li className="oaf:max-lg:flex-1 oaf:max-lg:basis-[calc(50%-4px)]">
              <a
                href="https://react.dev/"
                target="_blank"
                className="oaf:flex oaf:items-center oaf:gap-2 oaf:px-3 oaf:py-1.5 oaf:text-base oaf:text-(--text-h) oaf:no-underline oaf:rounded-md oaf:bg-(--social-bg) oaf:transition-shadow oaf:duration-300 oaf:hover:shadow-(--shadow) oaf:max-lg:w-full oaf:max-lg:justify-center oaf:max-lg:box-border"
              >
                <img className="button-icon oaf:h-4.5 oaf:w-4.5" src={reactLogo} alt="" />
                Learn more
              </a>
            </li>
          </ul>
        </div>

        <div
          id="social"
          className="oaf:flex-1 oaf:basis-0 oaf:p-8 oaf:max-lg:py-6 oaf:max-lg:px-5"
        >
          <svg
            className="oaf:mb-4 oaf:w-5.5 oaf:h-5.5"
            role="presentation"
            aria-hidden="true"
          >
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <h2>Connect with us</h2>
          <p>Join the Vite community</p>
          <ul className="oaf:list-none oaf:p-0 oaf:flex oaf:gap-2 oaf:mt-8 oaf:max-lg:mt-5 oaf:max-lg:flex-wrap oaf:max-lg:justify-center">
            <li className="oaf:max-lg:flex-1 oaf:max-lg:basis-[calc(50%-4px)]">
              <a
                href="https://github.com/vitejs/vite"
                target="_blank"
                className="oaf:flex oaf:items-center oaf:gap-2 oaf:px-3 oaf:py-1.5 oaf:text-base oaf:text-(--text-h) oaf:no-underline oaf:rounded-md oaf:bg-(--social-bg) oaf:transition-shadow oaf:duration-300 oaf:hover:shadow-(--shadow) oaf:max-lg:w-full oaf:max-lg:justify-center oaf:max-lg:box-border"
              >
                <svg className="button-icon oaf:h-4.5 oaf:w-4.5" role="presentation" aria-hidden="true">
                  <use href="/icons.svg#github-icon"></use>
                </svg>
                GitHub
              </a>
            </li>
            <li className="oaf:max-lg:flex-1 oaf:max-lg:basis-[calc(50%-4px)]">
              <a
                href="https://chat.vite.dev/"
                target="_blank"
                className="oaf:flex oaf:items-center oaf:gap-2 oaf:px-3 oaf:py-1.5 oaf:text-base oaf:text-(--text-h) oaf:no-underline oaf:rounded-md oaf:bg-(--social-bg) oaf:transition-shadow oaf:duration-300 oaf:hover:shadow-(--shadow) oaf:max-lg:w-full oaf:max-lg:justify-center oaf:max-lg:box-border"
              >
                <svg className="button-icon oaf:h-4.5 oaf:w-4.5" role="presentation" aria-hidden="true">
                  <use href="/icons.svg#discord-icon"></use>
                </svg>
                Discord
              </a>
            </li>
            <li className="oaf:max-lg:flex-1 oaf:max-lg:basis-[calc(50%-4px)]">
              <a
                href="https://x.com/vite_js"
                target="_blank"
                className="oaf:flex oaf:items-center oaf:gap-2 oaf:px-3 oaf:py-1.5 oaf:text-base oaf:text-(--text-h) oaf:no-underline oaf:rounded-md oaf:bg-(--social-bg) oaf:transition-shadow oaf:duration-300 oaf:hover:shadow-(--shadow) oaf:max-lg:w-full oaf:max-lg:justify-center oaf:max-lg:box-border"
              >
                <svg className="button-icon oaf:h-4.5 oaf:w-4.5" role="presentation" aria-hidden="true">
                  <use href="/icons.svg#x-icon"></use>
                </svg>
                X.com
              </a>
            </li>
            <li className="oaf:max-lg:flex-1 oaf:max-lg:basis-[calc(50%-4px)]">
              <a
                href="https://bsky.app/profile/vite.dev"
                target="_blank"
                className="oaf:flex oaf:items-center oaf:gap-2 oaf:px-3 oaf:py-1.5 oaf:text-base oaf:text-(--text-h) oaf:no-underline oaf:rounded-md oaf:bg-(--social-bg) oaf:transition-shadow oaf:duration-300 oaf:hover:shadow-(--shadow) oaf:max-lg:w-full oaf:max-lg:justify-center oaf:max-lg:box-border"
              >
                <svg className="button-icon oaf:h-4.5 oaf:w-4.5" role="presentation" aria-hidden="true">
                  <use href="/icons.svg#bluesky-icon"></use>
                </svg>
                Bluesky
              </a>
            </li>
          </ul>
        </div>
      </section>

      <div className="ticks"></div>
      <section
        id="spacer"
        className="oaf:h-22 oaf:border-t oaf:border-(--border) oaf:max-lg:h-12"
      ></section>
    </>
  )
}

export default App