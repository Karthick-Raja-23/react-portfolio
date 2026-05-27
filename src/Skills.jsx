import SkillCard from "./SkillCard"
import skills from "./data/skills"
function Skills () {

    return (
        <section className="skills" id="skills">

            <h2>Skills</h2>

            <div className="skills-container">

                {skills.map((skill, index) => (

                    <SkillCard 
                        key={index}
                        name={skill.name}
                        logo={skill.logo}
                    />
                ))}

            </div>

        </section>
    )
}

export default Skills