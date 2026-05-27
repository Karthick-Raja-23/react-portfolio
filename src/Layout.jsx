import Footer from "./footer";
import Navbar from "./Navbar";

function Layout ({children}) {
    return (
        <>
            <Navbar />

            <main>
                {children} {/* Whatever you pass inside <Layout> ... </Layout> */}
            </main>

            <Footer />
        </>
    )
}

export default Layout

//LAYOUT COMPOSITION