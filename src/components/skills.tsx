import React from 'react'

const Skills = () => {
    const skills = [
        {
            name: 'Backend with Python',
            description: 'Django, Flask'
        },
        {
            name: 'Frontend with JavaScript',
            description: 'Bootstrap, React.js'
        },
        {
            name: 'Mobile Application',
            description: 'Flutter, Dart'
        },
        {
            name: 'Graphics Design',
            description: 'Photoshop, Illustrator'
        },
    ]

    return (
        <>
            <div className="flex flex-col gap-4">
                <h2 className="text-2xl font-medium">Skills</h2>
                <ul className="list-inside">
                    {
                        skills.map((skill, index) => (
                            <li key={index}>
                                <span>{skill.name}</span> <span className="text-sm">({skill.description})</span>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </>
    )
}

export default Skills