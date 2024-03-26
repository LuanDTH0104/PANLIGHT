import Header from "../Component/Header";
import Sidebar from "../Component/Sidebar";
import { CCircle } from 'react-bootstrap-icons';
import Logo from '../Logo.png';
function Default(props) {
    return (
        <div className="flex flex-row items-stretch">
            <Sidebar />
            <div className="w-full h-full bg-[url('https://free.vector6.com/wp-content/uploads/2021/03/AX47-vector-corel-trong-dong.jpg')] bg-no-repeat bg-cover">
                <Header />
                {props.children}
                <div className="fixed text-2xl text-blue-700 bottom-3 right-5 w-auto">
                    <span className="w-full"><CCircle className="inline-block w-3 align-top mx-1" /><span className="text-2xl font-bold">CÔNG TY TNHH TẬP ĐOÀN PANDORA</span></span><br />
                    <span className="text-lg">Địa chỉ: 16N1/1, Nguyễn Hoàng Tôn, Xuân La, Tây Hồ, Hà Nội</span><br />
                    <span className="text-lg">Điện thoại: +84904693338</span>
                </div>
            </div>
        </div>
    );
}

export default Default;