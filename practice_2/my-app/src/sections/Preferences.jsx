import '../index.css'
import './Preferences.css';
import CircleCard from '../components/CircleCard'
import leaf from '../img/leaf.png'
import multipleUsers from '../img/multipleUsers.png'
import coins from '../img/coins.png'


function Preferences() {
    return (
        <div className="containerCircleCard">
            <CircleCard classes={"widthCardCircle"} img={leaf} widthImage="img-circle" alt="اسراف کمتر" titr="اسراف کمتر" />
            <CircleCard classes={"widthCardCircle"} img={multipleUsers} widthImage="img-circle" alt="مشتریان جدید" titr="مشتریان جدید" />
            <CircleCard classes={"widthCardCircle"} img={coins} widthImage="img-circle" alt="درآمد بیشتر" titr="درآمد بیشتر" />

        </div>
    );
}

export default Preferences;
