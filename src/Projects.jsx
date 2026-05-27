function Projects () {

    const projects = [

        {
            title: "Portfolio Website",
            tech: "React, CSS",
            desc: "Designed and developed a responsive personal portfolio website with a modern dark-themed UI. Implemented structured sections to showcase skills, experience, projects, and contact details using HTML and CSS.",
            img: "/Screenshot 2026-05-11 112523.png",
            github: "https://github.com/Karthick-Raja-23"
        },

        {
            title: "Crowd Monitoring and Density Detection System",
            tech: "Python,YoloV8, OpenCV",
            desc: "Built a crowd density monitoring system using computer vision techniques and real-time video processing. Implemented image analysis methods to estimate crowd levels efficiently using Python and YoloV8.",
            img: "/Screenshot 2026-03-22 224528.png",
            github: "https://github.com/Karthick-Raja-23"
        },

        {
            title: "Edge Intelligent Air Quality Monitoring System",
            tech: "Embedded C, Python, Sensors",
            desc: "Designed and developed an intelligent air quality monitoring system capable of analyzing environmental conditions in real time. Implemented sensor-based automation to trigger purification mechanisms when poor air quality was detected.",
            img: "/AQMS.jpeg",
            github: "https://github.com/Karthick-Raja-23"
        }
    ]

    return (
        <section className="projects" id="projects">

            <h2>Projects</h2>

            <div className="pro-container">

                {projects.map((project,index) => (

                    <div className="pro-card" key={index}>

                        <img src={project.img} alt={project.title} />

                        <div className="pro-content">

                            <h3>{project.title}</h3>
                            <h4>{project.tech}</h4>
                            <p>{project.desc}</p>

                            <a href={project.github} target="_blank">
                                <button>GitHub</button>
                            </a>
                            
                        </div>

                    </div>

                ))}
                
            </div>

        </section>
    )
}

export default Projects