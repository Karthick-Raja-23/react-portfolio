function Hero() {
    return(

        <section className="hero" id="home">

            <div className="hero-left">

                <h3>Hi, I'm</h3>
                <h1>
                    Karthick <span className="highlight">Raja S</span> {/*span -- used to style part of text*/}
                </h1>
                <h2>Web Developer</h2>

                <p>
                    Embedded Software Intern and Electronics Engineering graduate with experience in mmWave radar systems, Python-based visualization, and full-stack web development. 
                    Skilled in C, Python, and MySQL, with a strong interest in intelligent systems and data-driven technologies.
                </p>

                <a href="#contact"><button>Hire Me</button></a>
            
            </div>

            <div className="hero-right">

                <img src="/Prof_img.jpg" alt="profile" className="hero-img"/>
            
            </div>

        </section>
    )
}

export default Hero