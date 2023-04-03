import React from 'react'

const Experience = () => {
    const experiences = [
        {
            title: 'Open Source Developer',
            company: 'Python Software Foundation, Google Summer of Code',
            time: 'June 2022 - September 2022',
            achievements: [
                'Fixed bunch of issues encountered on the python-blogs platform',
                'Revamped whole system to support the new GSoC timelines',
                'Automated most of the manual operations to improve productivity',
                'Setup CI/CD pipelines with GitHub Actions for testing and PEP8 issues'
            ]
        }
    ]
    return (
        <>
            <div className="flex flex-col gap-4">
                <h2 className="font-medium text-2xl">Experience</h2>
                <ul className="list-inside">
                    {
                        experiences.map((job, index) => (
                            <li key={index}>
                                <span className='font-medium'>{job.title}</span>
                                <div>{job.company}</div>
                                <div className='text-sm opacity-75'>{job.time}</div>
                                <ul className="list-inside list-disc ml-4">
                                    {job.achievements.map((achievement, index) => (
                                        <li key={index} className='text-sm'>
                                            {achievement}
                                        </li>
                                    ))}
                                </ul>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </>
    )
}

export default Experience
