const Inprogress = () => {
  const inProgress = [
    {
      name: 'Word Guessing Game',
      description: 'Mobile Application (React Native)'
    },
    {
      name: 'Subhakaarya.com',
      description: 'Web Application (React, Django)'
    }
  ]
  return (
    <>
      <div className="flex flex-col gap-4">
        <h2 className="font-medium text-2xl">Work in Progress</h2>
        <ul className="list-inside">
          {inProgress.map((project, index) => (
            <li key={index}>
              <span>{project.name}</span>
              <span className="text-sm"> - {project.description}</span>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default Inprogress
