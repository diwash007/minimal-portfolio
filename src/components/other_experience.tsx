import React from 'react'

const OtherExperience = (): JSX.Element => {
  const experiences = [
    'Achieved the first runner-up position in Vertex hacks,' +
      ' a nationwide hackathon',
    'Won the Contributor of the Organization Bot' +
      ' competition organized by Hacksquad'
  ]
  return (
    <>
      <div className="flex flex-col gap-4">
        <h2 className="font-medium text-2xl">Other Experience</h2>
        <ul className="list-disc list-inside ml-4">
          {experiences.map((experience, index) => (
            <li key={index}>
              <span>{experience}</span>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default OtherExperience
