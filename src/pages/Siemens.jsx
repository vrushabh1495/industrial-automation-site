import Header from "../components/Header";
import NavigationBar from "../components/NavigationBar";
import Footer from "../components/Footer";
import SubFooter from "../components/SubFooter";
const Siemens = () => {
    return(
        <div className="flex flex-col min-h-screen">
            <div className="fixed top-0 left-0 w-full z-50">
                <Header />
                <NavigationBar />
            </div>
            <div className="fixed bottom-1 w-full">
                <SubFooter/>
            </div>
            <div className="fixed bottom-0 left-0 w-full z-50">
                <Footer />
            </div>
        </div>
    )
}

export default Siemens;