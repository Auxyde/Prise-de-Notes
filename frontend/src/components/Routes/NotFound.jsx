import Header from "../Header";
import Footer from "../Footer";

function NotFound() {
    return (
        <div>
            <Header/>
            <div>
                <h1>404 - Not Found!</h1>
                {alert("404 - Not Found!")}
            </div>
            <Footer/>
        </div>
    );
}

export default NotFound;