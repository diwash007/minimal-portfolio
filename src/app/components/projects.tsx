import React from 'react'

const Projects = () => {
    const projects = [
        {
            name: 'FlaskOshop',
            link: 'https://flaskoshop.gilobyte.com/',
            description: 'Web Application'
        },
        {
            name: '29 Card Game',
            link: 'https://diwashdahal.com.np/29points',
            description: 'Web Application'
        },
        {
            name: 'Drag Me Down',
            link: 'https://play.google.com/store/apps/details?id=com.BabbalGames.DragMeDown',
            description: 'Mobile Game'
        },
        {
            name: 'PDF Dark Mode',
            link: 'https://microsoftedge.microsoft.com/addons/detail/pdf-dark-mode/nghkmkbjhpgdibgopgekgjnbocfmnjdo',
            description: 'Browser Extension'
        },
        {
            name: 'Medustore',
            link: 'http://www.youtube.com/watch?v=CyhJCKP0G84',
            description: 'Mobile Application'
        },
        {
            name: 'HCR2 Guide',
            link: 'https://diwashdahal.com.np/HCR2-Guide/',
            description: 'Mobile Application'
        }
    ]
    return (
        <>
            <div className="flex flex-col gap-4">
                <h2 className="font-medium text-2xl">Projects</h2>
                <ul className="ist-inside">
                    {
                        projects.map((project, index) => (
                            <li key={index}>
                                <a href={project.link} target='_blank' className='text-primary underline italic'>
                                    <span>{project.name}</span>
                                </a>
                                <span className="text-sm"> - {project.description}</span>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </>
    )
}

export default Projects