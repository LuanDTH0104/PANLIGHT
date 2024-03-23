import Header from "../Component/Header";
import Sidebar from "../Component/Sidebar";
import Logo from '../Logo.png';
function Default(props) {
    return (
        <div className="flex flex-row items-stretch">
            <Sidebar />
            <div className="w-full">
                <Header />
                {props.children}
                <div className="fixed text-2xl text-blue-700 bottom-3 right-5 w-[7%]"><img src={Logo}/></div>
            </div>
        </div>
    );
}

export default Default;