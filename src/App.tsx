/* eslint-disable react/react-in-jsx-scope */
import Education from './components/education'
import Projects from './components/projects'
import Skills from './components/skills'
import Social from './components/social'
import Experience from './components/experience'
import Avatar from './assets/images/diwash-dahal.jpg'
import OtherExperience from './components/other_experience'
import { useTheme } from './contexts/ThemeContext'
import { DarkModeSwitch } from 'react-toggle-dark-mode'
import Inprogress from './components/inProgress'

const App = (): JSX.Element => {
  const theme = useTheme()
  return (
    <div className={`${theme.isDarkTheme ? 'dark' : 'light'}`}>
      <div className="dark:bg-neutral-900 dark:text-gray-200 py-16 ">
        <DarkModeSwitch
          checked={theme.isDarkTheme}
          onChange={theme.toggleTheme}
          style={{ position: 'absolute', right: '20px', top: '20px' }}
        />
        <div
          className="max-w-screen-sm mx-auto
        selection:bg-primary-light selection:text-white font-ubuntu"
        >
          <div className="flex flex-col gap-8 mx-4 md:mx-0">
            <div className="flex flex-col-reverse gap-8 md:flex-row">
              <div className="flex flex-col gap-4">
                <h1 className="text-4xl font-medium">
                  Diwash{' '}
                  <span className="text-primary-light dark:text-primary-dark">
                    Dahal
                  </span>
                </h1>
                <p>
                  Software Developer |
                  <span className="font-medium"> Open Source</span>
                </p>
                <p>Namaskar!</p>
                <p className="text-justify">
                  My name is Diwash Dahal and I&apos;m an undergraduate computer
                  science student based in Jhapa, Nepal. I enjoy developing web
                  applications and, in my free time, I like to contribute to
                  open-source projects. When I&apos;m not coding or studying,
                  I&apos;m usually playing games and making YouTube content.
                </p>
              </div>
              <img
                src={Avatar}
                alt="Diwash Dahal"
                className="object-cover w-auto h-32 md:w-32 md:h-auto grayscale"
                width={300}
                height={300}
              />
            </div>

            <Experience />

            <OtherExperience />

            {/* <Inprogress /> */}

            <Education />

            <Projects />

            <Skills />

            <Social />

            <div className="flex flex-col gap-4">
              <h2 className="text-2xl font-medium">Contact</h2>
              <ul className="list-inside">
                <li>
                  <span>Email: </span>
                  <a
                    href="mailto:diwashdahal75@gmail.com"
                    className="italic underline text-primary-light dark:text-primary-dark"
                  >
                    diwashdahal75@gmail.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
