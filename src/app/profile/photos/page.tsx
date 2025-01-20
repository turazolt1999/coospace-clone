import Card from "../../../../components/Card";
import ProfilePage from "../page";

export default function PhotosProfilePage() {
    return (
        <ProfilePage>
            <Card>
                <div className="grid md:grid-cols-2 gap-4">
                    <div className="rounded-md overflow-hidden h-36 flex items-center shadow-md">
                        <img src="https://cdn.getyourguide.com/img/tour/198fe47fec84d620.jpeg/146.jpg" alt="" />
                    </div>
                    <div className="rounded-md overflow-hidden h-36 flex items-center shadow-md">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Calle_Larios%2C_M%C3%A1laga_02.jpg/1200px-Calle_Larios%2C_M%C3%A1laga_02.jpg" alt="" />
                    </div>
                    <div className="rounded-md overflow-hidden h-36 flex items-center shadow-md">
                        <img src="https://www.cestee.hu/images/07/54/754-920w.webp" alt="" />
                    </div>
                    <div className="rounded-md overflow-hidden h-36 flex items-center shadow-md">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/M%C3%A1laga_-_vistas_desde_el_Parador_de_Gibralfaro_01_%28cropped%29.jpg/1200px-M%C3%A1laga_-_vistas_desde_el_Parador_de_Gibralfaro_01_%28cropped%29.jpg" alt="" />
                    </div>
                </div>
            </Card>
        </ProfilePage>
    );
}