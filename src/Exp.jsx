function Experience () {
    
    const exp = [
        {
            role: "Embedded Software Intern",
            company: "Mistral Solutions",
            duration: "March 2026 - Present",
            points: [
                "Worked on mmWave radar systems",
                "Built a data visualization interface to interpret radar output in real-time.",
                "Developed a full-stack web application as part of internal project work."
            ]
        },

        {
            role: "Python Developer",
            company: "Freelance Computer Vision Project",
            duration: "March 2026",
            points: [
                "Developed a crowd monitoring and density detection system using Python and YoloV8.",
                "Processed video and image input to estimate crowd density levels in real time.",
                "Implemented a user-friendly interface to display crowd density results and insights."
            ]
        },

        {
            role: "Various Roles",
            company: "Academic Project",
            duration: "January 2026 - April 2026",
            points: [
                "Designed an intelligent air quality monitoring and purification system.",
                "Processed real-time environmental sensor data for air quality analysis.",
                "Developed automation logic to trigger purification based on detected conditions."
            ]
        }
    ]

    return (

        <section className="exp" id="experience">

            <h2>Experience</h2>

            <div className="exp-container">

                {exp.map((exp, index) => (

                    <div className="exp-card" key={index}>

                        <h3>{exp.role}</h3>
                        <h4>{exp.company}</h4>
                        <p>{exp.duration}</p>

                        <ul>
                            {exp.points

                                .filter(point => point && point.trim() !== "") //Removes: undefined, null && empty strings, spaces " "
                                .map((point, i) => (
                                    <li key={i}>{point}</li>

                            ))}
                        </ul>

                    </div>
                ))}
            </div>

        </section>
    )
}

export default Experience