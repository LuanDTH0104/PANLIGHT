import Default from "../Template/Default";

function MapView(props) {
    return (
        <Default>
            <div className="relative">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29794.851432769246!2d105.78875276881816!3d21.01841977086442!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135acac08698957%3A0xcb92e58f7f3e275c!2zVHJ1bmcgdMOibSBI4buZaSBuZ2jhu4sgUXXhu5FjIGdpYQ!5e0!3m2!1svi!2s!4v1711293048627!5m2!1svi!2s"
                    className="w-full h-screen"
                    style={{ "border": "0" }}
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade">
                </iframe>
                <div className="w-[30px] h-[30px] rounded-full bg-green-800 animate-ping duration-1000 absolute top-[450px] left-[800px]">Test01</div>
                <div className="w-[30px] h-[30px] rounded-full bg-green-800 animate-ping duration-1000 absolute top-[470px] left-[800px]">Test02</div>
                <div className="w-[30px] h-[30px] rounded-full bg-green-800 animate-ping duration-1000 absolute top-[450px] left-[850px]">Test03</div>
                <div className="w-[30px] h-[30px] rounded-full bg-green-800 animate-ping duration-1000 absolute top-[470px] left-[850px]">Test04</div>
            </div>

        </Default>
    );
}

export default MapView;