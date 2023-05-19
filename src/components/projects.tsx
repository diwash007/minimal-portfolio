import React from 'react'

const Projects = (): JSX.Element => {
  const projects = [
    {
      name: 'FlaskOshop',
      link: 'https://flaskoshop.gilobyte.com/',
      techs: ['Python', 'Flask']
    },
    {
      name: '29 Card Game',
      link: 'https://diwashdahal.com.np/29points',
      techs: ['React.js', 'Python']
    },
    {
      name: 'Guess the Word',
      link: 'https://play.google.com/store/apps/details?id=com.diwashdahal.guesstheword',
      techs: ['React Native']
    },
    {
      name: 'Subhakaarya.com',
      link: 'https://subhakaarya.com',
      techs: ['React', 'Django']
    },
    {
      name: 'Drag Me Down',
      link: 'https://play.google.com/store/apps/details?id=com.BabbalGames.DragMeDown',
      techs: ['Unity']
    },
    {
      name: 'PDF Dark Mode',
      // eslint-disable-next-line max-len
      link: 'https://microsoftedge.microsoft.com/addons/detail/pdf-dark-mode/nghkmkbjhpgdibgopgekgjnbocfmnjdo',
      techs: ['Js']
    },
    {
      name: 'Medustore',
      link: 'http://www.youtube.com/watch?v=CyhJCKP0G84',
      techs: ['Flutter']
    },
    {
      name: 'HCR2 Guide',
      link: 'https://diwashdahal.com.np/HCR2-Guide/',
      techs: ['Flutter']
    }
  ]
  return (
    <>
      <div className="flex flex-col gap-4">
        <h2 className="font-medium text-2xl">Projects</h2>
        <ul className="ist-inside">
          {projects.map((project, index) => (
            <li key={index} className='mb-2'>
              <a
                href={project.link}
                target="_blank"
                className="text-primary-light dark:text-primary-dark underline italic"
                rel="noreferrer"
              >
                <span>{project.name}</span>
              </a>
              {project.techs.map((tech, index) => (
                <span
                  className="px-2 ml-2 text-sm rounded-md text-primary-light/75 bg-primary-light/10"
                  key={index}
                >
                  {tech}
                </span>
              ))}
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default Projects
