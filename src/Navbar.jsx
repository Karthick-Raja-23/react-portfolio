function Navbar () {    //component, reusable block
    
    const navItems = ["Home","About","Skills","Experience","Projects","Contact"]

    return(
        <nav className="navbar">

            <h2 className="logo">KR</h2>

             <ul className="nav-links">         {/* .map - loop through each item */}
                                              
                {navItems.map((item, index) => (      //index - position of item in array
                    <li key={index}> 
                        <a href={`#${item.toLowerCase()}`}>{item}</a>    {/* Dynamic ver of <a href="#about">About</a> */}
                    </li>    
                 ))}        {/* {} to write js inside html */}

            </ul>

        </nav>
    )
}

export default Navbar //allow other file to use