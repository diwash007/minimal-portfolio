import React from 'react'

const Social = (): JSX.Element => {
  const social = [
    {
      name: 'GitHub',
      link: 'https://github.com/diwash007'
    },
    {
      name: 'Twitter',
      link: 'https://twitter.com/dahaldiwash2'
    },
    {
      name: 'LinkedIn',
      link: 'https://linkedin.com/in/diwashdahal'
    },
    {
      name: 'YouTube',
      link: 'https://youtube.com/@dahaldiwash2'
    },
    {
      name: 'Medium',
      link: 'https://medium.com/@diwashdahal'
    }
  ]

  return (
    <>
      <div className="flex flex-col gap-4">
        <h2 className="font-medium text-2xl">Socials</h2>
        <ul className="list-inside">
          {social.map((social, index) => (
            <li key={index}>
              <a
                href={social.link}
                target="_blank"
                className="text-primary-light dark:text-primary-dark underline italic"
                rel="noreferrer"
              >
                <span>{social.name}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default Social
