import { useEffect, useState } from "react";
import Default from "../Template/Default";
import DataTable from "datatables.net-dt";
import ReactSwitch from "react-switch";

function AnalysisTable(props) {
    const [checked, setChecked] = useState(true);
    const [date, setDate] = useState([]);
    const handleChange = item => {
        setChecked(!item.status)
    }

    const data = [
        {
            id: 1,
            address: '41 Xuân La',
            district: 'Tây Hồ',
            brightness: '50',
            timeOn: '6:30 PM',
            timeOff: '4:00 AM',
            repeatDate: [0, 1, 2, 3, 4, 5, 6],
            status: true
        },
        {
            id: 2,
            address: '41 Khương Đình',
            district: 'Thanh Xuân',
            brightness: '20',
            timeOn: '6:30 PM',
            timeOff: '4:00 AM',
            repeatDate: [0, 1, 2, 3, 4],
            status: true
        },
        {
            id: 3,
            address: '26 Cổ Nhuế',
            district: 'Bắc Từ Liêm',
            brightness: '60',
            timeOn: '6:30 PM',
            timeOff: '4:00 AM',
            repeatDate: [0, 1, 2],
            status: false
        }
    ]

    useEffect(() => {
        let table = new DataTable('#light');
        const changeRecord = document.getElementById('dt-length-0');
        const totalRecords = document.getElementById('light_info');
        const search = document.getElementById('dt-search-0');
        if (search) {
            search.previousElementSibling.innerHTML = 'Tìm kiếm';
            changeRecord.nextElementSibling.innerHTML = 'Bản ghi mỗi trang';
        }

        const onTime = document.querySelectorAll('.onTime');
        const offTime = document.querySelectorAll('.offTime');
        const time = document.createElement('input')
        onTime.forEach((item, index) => {
            item.addEventListener('click', () => {
                item.innerHTML = ''
                item.appendChild(time)
                time.type = 'time'
                time.focus()
            });
            item.addEventListener('blur', () => {
                item.innerHTML = time.value
            });
        });
    }, [])

    function changeDate(arr) {
        let repeatDate = [];
        try {
            if (arr && arr.length > 0) {
                arr.forEach((item, index) => {
                    if (item === 0) {
                        repeatDate.push('Chủ nhật')
                    } else if (item === 1) {
                        repeatDate.push('Thứ 2')
                    } else if (item === 2) {
                        repeatDate.push('Thứ 3')
                    } else if (item === 3) {
                        repeatDate.push('Thứ 4')
                    } else if (item === 4) {
                        repeatDate.push('Thứ 5')
                    } else if (item === 5) {
                        repeatDate.push('Thứ 6')
                    } else if (item === 6) {
                        repeatDate.push('Thứ 7')
                    }
                });
            }
            return repeatDate.join(', ');
        } catch (error) {
            console.log(error);
        }
    }

    function BrightnessBar(props) {
        const [openModal, setOpenModal] = useState(false);
        function handleBrightness() {
            setOpenModal(!openModal)
        }
        return (
            <div className="w-full border border-1 border-yellow-600 ">
                <div className="bg-yellow-400" style={{"width": `${parseInt(props.brightness)}%`}}>{props.brightness}</div>
            </div>
        )
    }
    return (
        <Default>
            <div className="md:w-[80%] w-auto  bg-white shadow-lg rounded-md mx-auto mt-10 p-10">
                <table id="light" className="border border-1 border-black">
                    <thead>
                        <tr className="border-b-2 border-black text-center">
                            <th>Số thứ tự</th>
                            <th>Địa chỉ</th>
                            <th>Quận/ Huyện</th>
                            <th>Độ sáng</th>
                            <th className="text-center">Thời gian bật</th>
                            <th className="text-center">Thời gian tắt</th>
                            <th>Ngày lặp lại</th>
                            <th>Bật/Tắt</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data && data.map((item, index) => (
                            <tr >
                                <td className="text-center">{item.id}</td>
                                <td className="text-left">{item.address}</td>
                                <td className="text-left">{item.district}</td>
                                <td className="text-left"><BrightnessBar brightness={item.brightness} /></td>
                                <td className="text-center onTime">{item.timeOn}</td>
                                <td className="text-center offTime">{item.timeOff}</td>
                                <td className="text-left">
                                    {changeDate(item.repeatDate)}
                                </td>

                                <td>
                                    {item.status == true ?
                                        <ReactSwitch
                                            checked={true}
                                            onChange={handleChange}
                                        /> : <ReactSwitch
                                            checked={false}
                                            onChange={handleChange}
                                        />}
                                </td>
                            </tr>
                        ))
                        }
                    </tbody>
                </table>
            </div>
        </Default>
    )
}

export default AnalysisTable;