import { Link } from 'react-router-dom';
import Logo from '../Logo.png';
import VietNam from '../vietnam.png';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';

function Sidebar1(props) {
    return (
        <div className="bg-[#595959] text-black h-screen w-[15%] border-r-[1px] border-[#cac6c6]">
            <div className='bg-white h-[20%]'>
                <img src={Logo} className='w-[50%] mx-auto' />
                <div className='font-semibold text-center text-blue-500 font-sans'>Hệ thống quản lí đèn trung tâm PANLIGHT</div>
            </div>
            <div className='mt-5 bg-[#595959]'>
                <Sidebar className='bg-[#595959]'>
                    <Menu>
                        <SubMenu label="Việt Nam">
                            <SubMenu label="Hà Nội">
                                <MenuItem>Thanh Xuân</MenuItem>
                                <MenuItem>Hoàn Kiếm</MenuItem>
                                <MenuItem>Tây Hồ</MenuItem>
                                <MenuItem>Đống Đa</MenuItem>
                            </SubMenu>
                            <SubMenu label="TP Hồ Chí Minh">
                                <MenuItem>Quận 1</MenuItem>
                                <MenuItem>Quận 2</MenuItem>
                                <MenuItem>Quận 3</MenuItem>
                                <MenuItem>Quận 4</MenuItem>
                            </SubMenu>
                        </SubMenu>
                        
                    </Menu>
                </Sidebar>;
            </div>
        </div>
    );
}

export default Sidebar1;