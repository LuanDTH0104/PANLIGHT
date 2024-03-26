import { Speedometer, ListTask, GeoAltFill, Calendar4 } from 'react-bootstrap-icons'
import { Link } from 'react-router-dom';
function Header(props) {
    const elements = [
        { name: 'Thống kê', icon: <Speedometer className="text-white" size={35} />, url: '/' },
        { name: 'Thiết bị', icon: <ListTask className="text-white" size={35} />, url: '/den-dien-ha-noi' },
        { name: 'Bản đồ', icon: <GeoAltFill className="text-white" size={35} />, url: '/vi-tri' },
        { name: 'Cài đặt', icon: <Calendar4 className="text-white" size={35} />, url: '/cai-dat' }
    ]

    return (
        <div>
            <div className='font-bold text-center text-5xl text-blue-500 font-sans py-5 animate-pulse duration-1000'><span className='z-1'>HỆ THỐNG QUẢN LÝ CHIẾU SÁNG CÔNG CỘNG PANLIGHT</span>
            </div>
            <div className="flex bg-[#1850a3] shadow-lg gap-5 justify-center pl-28">
                {elements.map((element, index) => {
                    return (
                        <Link to={element.url} key={index} className="text-white w-1/3 text-lg  py-3  hover:bg-blue-600 no-underline">
                            <div className='hover:animate-bounce flex flex-col items-center'>
                                {element.icon}
                                <button>{element.name}</button>
                            </div>
                        </Link>
                    )
                })}
            </div>
        </div>
    );
}

export default Header;