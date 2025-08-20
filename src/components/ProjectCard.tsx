import React from 'react'

const ProjectCard = ({title, description}) => {
  return (
    <div className='bg-cyan-300 border-2'>
        <h1>{title}</h1>
        <h1>{description}</h1>

    </div>
  )
}

export default ProjectCard