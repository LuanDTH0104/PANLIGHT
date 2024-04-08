import { useEffect, useRef, useState } from "react";
import Default from "../Template/Default";
import DataTable from "datatables.net-dt";
import ReactSwitch from "react-switch";
import { useNavigate } from "react-router-dom";
import Select from 'react-select';
import axios from "axios";
import { click } from "@testing-library/user-event/dist/click";

function AnalysisTable(props) {
    const [checked, setChecked] = useState(false);
    const [date, setDate] = useState([]);
    const [selectedLight, setSelectedLight] = useState(null);
    const [onTime, setOnTime] = useState(null);
    const [offTime, setOffTime] = useState(null);
    const [brightness, setBrightness] = useState(10);
    const [repeatDate, setRepeatDate] = useState([]);
    const [light, setLight] = useState([]);
    const [selectedId, setSelectedId] = useState(null);
    const [clicked, setClicked] = useState(false);
    const [toastMessage, setToastMessage] = useState(false);

    const data = [
        {
            id: 1,
            address: 'Test 01',
            district: 'Nam Từ Liêm',
            brightness: '50',
            timeOn: '6:30 PM',
            timeOff: '4:00 AM',
            repeatDate: [0, 1, 2, 3, 4, 5, 6],
            status: false
        },
        {
            id: 2,
            address: 'Test 02',
            district: 'Nam Từ Liêm',
            brightness: '50',
            timeOn: '6:30 PM',
            timeOff: '4:00 AM',
            repeatDate: [0, 1, 2, 3, 4],
            status: false
        },
        {
            id: 3,
            address: 'Test 03',
            district: 'Nam Từ Liêm',
            brightness: '50',
            timeOn: '6:30 PM',
            timeOff: '4:00 AM',
            repeatDate: [0, 1, 2],
            status: false
        },
        {
            id: 4,
            address: 'Test 04',
            district: 'Nam Từ Liêm',
            brightness: '50',
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

        async function fetchData() {
            try {
                const response = await axios.get('http://14.225.218.149:9999/get-all-lights');
                setLight(response.data);
            } catch (error) {
                console.log(error);
            }
        }

        fetchData();


    }, [clicked])

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
                <div className="bg-yellow-400" style={{ "width": `${parseInt(props.brightness)}%` }}>{props.brightness}</div>
            </div>
        )
    }

    function getTimeInMilliseconds(inputTime) {
        // Parse the input time (assumes format HH:MM)
        const timeParts = inputTime.split(":");
        const hours = parseInt(timeParts[0], 10);
        const minutes = parseInt(timeParts[1], 10);

        // Check if the input is valid (hours and minutes within range)
        if (hours < 0 || hours > 23 || minutes < 0 || minutes > 59) {
            return null; // Return null for invalid input
        }

        // Create a Date object for the set time with today's date
        const targetTime = new Date();
        targetTime.setHours(hours, minutes, 0, 0); // Set hours, minutes, reset seconds and milliseconds

        // Get the time in milliseconds since the epoch
        const timeInMilliseconds = targetTime.getTime();

        // Return the time in milliseconds
        return timeInMilliseconds;
    }

    function handleDataChange(id) {
        if (onTime !== null && offTime === null) {
            const onSetTime = getTimeInMilliseconds(onTime);
            const now = Date.now();
            console.log("onSetTime: ", onSetTime);
            const waitingTimeToOn = (onSetTime - now);
            console.log(waitingTimeToOn);
            console.log(waitingTimeToOn);
            setTimeout(() => {
                axios.post('http://14.225.218.149:9999/active-light', {
                    id: id,
                    status: true,
                }).catch((error) => {
                    console.log(error);
                })
            }, waitingTimeToOn)
        } else if (onTime === null && offTime !== null) {
            const onTimeOff = getTimeInMilliseconds(offTime);
            const now = Date.now();
            const waitingTimeToOff = (onTimeOff - now);
            setTimeout(() => {
                axios.post('http://14.225.218.149:9999/active-light', {
                    id: id,
                    status: false,
                }).catch((error) => {
                    console.log(error);
                })
            }, waitingTimeToOff)
        } else if (onTime !== null && offTime !== null) {
            const onSetTime = getTimeInMilliseconds(onTime);
            const onTimeOff = getTimeInMilliseconds(offTime);
            const now = Date.now();
            const waitingTimeToOn = (onSetTime - now);
            const waitingTimeToOff = (onTimeOff - now);
            setTimeout(() => {
                axios.post('http://14.225.218.149:9999/active-light', {
                    id: id,
                    status: true,
                }).catch((error) => {
                    console.log(error);
                })
            }, waitingTimeToOn)
            setTimeout(() => {
                axios.post('http://14.225.218.149:9999/active-light', {
                    id: id,
                    status: false,
                }).catch((error) => {
                    console.log(error);
                })
            }, waitingTimeToOff)
        } else if (onTime === null && offTime === null) {
            console.log(checked);
            axios.post('http://14.225.218.149:9999/active-light', {
                id: id,
                status: checked,
            }).catch((error) => {
                console.log(error);
            })
        }

        if (checked == true && parseInt(brightness) > 0) {
            axios.post('http://14.225.218.149:9999/brightness', {
                id: id,
                brightness: parseInt(brightness),
            }).catch((error) => {
                console.log(error);
            })
        }
        setClicked(!clicked);
        setToastMessage(true);
    }
    return (
        <Default>
            <div className="w-auto overflow-y-auto w- md:w-[80%] h-screen  bg-white shadow-lg rounded-md mx-auto mt-10 p-10 opacity-75">
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
                            <tr className="hover:bg-slate-200" onClick={() => { setSelectedLight(item); setSelectedId(light[index]?.id); setChecked(light[index]?.on_off) }} data-bs-toggle="modal" data-bs-target="#exampleModal">
                                <td className="text-center">{light.length > 0 && light[index].id}</td>
                                <td className="text-left">{item.address}</td>
                                <td className="text-left">{item.district}</td>
                                <td className="text-left"><BrightnessBar brightness={light[index]?.brightness} /></td>
                                <td className="text-center onTime">{item.timeOn}</td>
                                <td className="text-center offTime">{item.timeOff}</td>
                                <td className="text-left">
                                    {changeDate(item.repeatDate)}
                                </td>

                                <td>
                                    {light[index]?.on_off === true ?
                                        <ReactSwitch
                                            checked={true}
                                            onChange={() => alert('Vui lòng chỉnh sửa thông tin đèn')}
                                        /> : <ReactSwitch
                                            checked={false}
                                            onChange={() => alert('Vui lòng chỉnh sửa thông tin đèn')}
                                        />}
                                </td>
                            </tr>
                        ))
                        }
                    </tbody>
                </table>
            </div>

            {/* Modal */}
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Cài đặt thông tin đèn</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            {toastMessage && <div class="text-success text-lg text-center">Đã cập nhật trạng thái đèn thành công</div>}

                            <div className="block md:flex gap-5">
                                <div className="flex items-center">
                                    <span className="font-semibold">Thời gian bật:</span><span className="mx-2"></span><span><input type="time" onChange={e => setOnTime(e.target.value)} /></span>
                                </div>
                                <div className="flex items-center">
                                    <span className="font-semibold">Thời gian tắt:</span><span className="mx-2"></span><span><input type="time" onChange={e => setOffTime(e.target.value)} /></span>
                                </div>
                            </div>
                            <div className="flex items-center mt-5">
                                <span className="font-semibold">Bật/Tắt:</span><span className="mx-2"></span><span><ReactSwitch checked={checked} onChange={() => { setChecked(!checked) }} /></span>
                            </div>
                            <div className="flex items-center mt-5">
                                <span className="font-semibold">Độ sáng:</span><span className="mx-2"></span><span><input type="range" min={10} max={100} onChange={(e) => { setBrightness(e.target.value) }} /></span><span className="font-bold">{brightness}</span>
                            </div>
                            <div className="flex items-center mt-5">
                                <span className="font-semibold">Ngày lặp lại:</span>
                                <Select
                                    isMulti
                                    className="w-[90%]"
                                    name="repeat-date"
                                    onChange={setRepeatDate}
                                    options={[
                                        { value: 0, label: 'Chủ nhật' },
                                        { value: 1, label: 'Thứ 2' },
                                        { value: 2, label: 'Thứ 3' },
                                        { value: 3, label: 'Thứ 4' },
                                        { value: 4, label: 'Thứ 5' },
                                        { value: 5, label: 'Thứ 6' },
                                        { value: 6, label: 'Thứ 7' }
                                    ]}
                                />
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" onClick={() => setToastMessage(false)}>Đóng</button>
                            <button type="button" class="btn btn-primary" onClick={() => handleDataChange(selectedId)}>Lưu thay đổi</button>
                        </div>
                    </div>
                </div>
            </div>
        </Default>
    )
}

export default AnalysisTable;