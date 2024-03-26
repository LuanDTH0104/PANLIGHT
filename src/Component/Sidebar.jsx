import { Link } from 'react-router-dom';
import Logo from '../Logo.png';
import VietNam from '../vietnam.png';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';

function Sidebar1(props) {
    return (
        <div className="bg-[white] text-black h-screen w-[15%] border-r-[1px] border-[#cac6c6]">
            <div className='bg-white h-[20%]'>
                <img src={Logo} className='w-[75%] mx-auto' />
            </div>
            <div className='ml-5 mt-5 w-full'>
                <Sidebar className='w-fit'>
                    <Menu>
                        <SubMenu label="Việt Nam" className='font-bold text-xl'>
                            <SubMenu label="Hà Nội" className='text-base'>
                                <MenuItem className='text-base font-normal'>Nam Từ Liêm</MenuItem>
                                <MenuItem className='text-base font-normal'>Thanh Xuân</MenuItem>
                                <MenuItem className='text-base font-normal'>Hoàn Kiếm</MenuItem>
                                <MenuItem className='text-base font-normal'>Tây Hồ</MenuItem>
                                <MenuItem className='text-base font-normal'>Đống Đa</MenuItem>
                            </SubMenu>
                            <SubMenu label="TP Hồ Chí Minh" className='text-base'>
                                <MenuItem className='text-base font-normal'>Quận 1</MenuItem>
                                <MenuItem className='text-base font-normal'>Quận 2</MenuItem>
                                <MenuItem className='text-base font-normal'>Quận 3</MenuItem>
                                <MenuItem className='text-base font-normal'>Quận 4</MenuItem>
                            </SubMenu>
                        </SubMenu>

                    </Menu>
                </Sidebar>
            </div>
        </div>
    );
}

export default Sidebar1;