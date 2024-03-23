import Default from "../Template/Default";

function MapView(props) {
    return (
        <Default>
            <div className="relative">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.030892483734!2d105.80228548600446!3d21.07142833627597!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135aae8473a1179%3A0x656e0684de134c65!2zMTYgxJAuIE5ndXnhu4VuIEhvw6BuZyBUw7RuLCBYdcOibiBMYSwgVMOieSBI4buTLCBIw6AgTuG7mWksIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1711089068532!5m2!1svi!2s"
                    className="w-full h-screen"
                    style={{ "border": "0" }}
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"></iframe>
                <div className="w-[30px] h-[30px] rounded-full bg-green-800 animate-ping duration-1000 absolute top-[450px] left-[800px]"></div>
                <div className="w-[30px] h-[30px] rounded-full bg-green-800 animate-ping duration-1000 absolute top-[470px] left-[800px]"></div>
                <div className="w-[30px] h-[30px] rounded-full bg-green-800 animate-ping duration-1000 absolute top-[450px] left-[850px]"></div>
                <div className="w-[30px] h-[30px] rounded-full bg-green-800 animate-ping duration-1000 absolute top-[470px] left-[850px]"></div>
            </div>

        </Default>
    );
}

export default MapView;