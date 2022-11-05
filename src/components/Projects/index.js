import React from 'react'
import Project from '../SingleProject';

function Projects() {
  const projects =[
    {
      id: 1,
      name: "Run Buddy",
      image: "runbud.png",
      url: "https://github.com/AshleyNicole1319/run-buddy"
  },
  {
      id: 2,
      name: "The Shelter Stop",
      image: "shelterstop.png",
      url: "https://github.com/AshleyNicole1319/shelter-stop"
  },
  {
      id: 3,
      name: "Task Expert",
      image: "task.jpg",
      url: "https://task-expert.herokuapp.com/"
  },
  {
      id: 4,  
      name: "Team Profile Generator",
      image: "TeamImage.png",
      url: "https://github.com/AshleyNicole1319/team-profile-generator"
  },
  {
    id: 5,  
    name: "Scheduler",
    image: "scheduler.png",
    url: "https://github.com/AshleyNicole1319/scheduler"
},
  ]
  return (
    <>
    <h1 className='my-5'>My Projects</h1>
      {projects.map((project) => (
      
      <Project key={project.id} project={project} />
      ))}
    </>
  )
}

export default Projects