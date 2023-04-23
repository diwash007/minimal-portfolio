import React from 'react'

const Skills = (): JSX.Element => {
  const skills = [
    {
      name: 'Backend with Python',
      description: 'Django, Flask'
    },
    {
      name: 'Frontend with JavaScript',
      description: 'React.js'
    },
    {
      name: 'Mobile Application',
      description: 'Flutter'
    },
    {
      name: 'Version Control',
      description: 'Git, GitHub'
    },
    {
      name: 'Databases',
      description: 'SQL, NoSQL'
    },
    {
      name: 'Graphic Design',
      description: 'PS, AI'
    }
  ]

  return (
    <>
      <div className="flex flex-col gap-4">
        <h2 className="text-2xl font-medium">Skills</h2>
        <ul className="list-inside">
          {skills.map((skill, index) => (
            <li key={index}>
              <span>{skill.name}</span>{' '}
              <span className="text-sm">({skill.description})</span>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default Skills
