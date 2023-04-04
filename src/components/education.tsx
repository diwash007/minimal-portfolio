import React from 'react'

const Education = () => {
    const education = [
        {
            degree: 'Bachelors',
            institution: 'BSc. CSIT, Tribhuvan University',
            date: '2018 - Present'
        },
        {
            degree: 'Higher Secondary',
            institution: 'National Examination Board',
            date: '2016 - 2018'
        }
    ]
    return (
        <>
            <div className="flex flex-col gap-4">
                <h2 className="font-medium text-2xl">Education</h2>
                <ul className="list-inside">
                    {
                        education.map((degree, index) => (
                            <li key={index}>
                                <span>{degree.degree}</span>
                                <span className="text-sm"> | {degree.institution}</span>
                                <span className="text-sm"> | {degree.date}</span>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </>
    )
}

export default Education