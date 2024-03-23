import { Speedometer, ListTask, GeoAltFill, Calendar4 } from 'react-bootstrap-icons'
import { Link } from 'react-router-dom';
function Header(props) {
    const elements = [
        { name: 'Thống kê', icon: <Speedometer className="text-white" size={35} />, url: '/' },
        { name: 'Thiết bị', icon: <ListTask className="text-white" size={35} />, url: '/den-dien-ha-noi' },
        { name: 'Bản đồ', icon: <GeoAltFill className="text-white" size={35} />, url: '/vi-tri' },
        { name: 'Điều chỉnh', icon: <Calendar4 className="text-white" size={35} />, url: '' }
    ]

    return (
        <div className="flex bg-[#595959] shadow-lg gap-5 justify-center pl-28">
            {elements.map((element, index) => {
                return (
                    <Link to={element.url} key={index} className="text-white w-1/3 text-lg  py-3  hover:bg-slate-700 no-underline">
                        <div className='hover:animate-bounce flex flex-col items-center'>
                            {element.icon}
                            <button>{element.name}</button>
                        </div>
                    </Link>
                )
            })}
        </div>
    );
}

export default Header;