import Navbar from "../Navbar/NavbarHome";
import Footer from "../footer/Footer";

export default function Layout ({ children }) {
    return (
        <>
        <Navbar />
        <main>{children}</main>
        <Footer />
        </>
    );
}