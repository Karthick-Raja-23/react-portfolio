function SkillCard(props) {

    return(
    
        <div className="skill-card">

            <img src= {props.logo} alt={props.name} />
            <h3>{props.name}</h3>
                        
        </div>
        
    )
}

export default SkillCard;

//COMPONENT COMPOSITITON