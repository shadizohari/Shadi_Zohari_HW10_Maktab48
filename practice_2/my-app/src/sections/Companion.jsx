import '../index.css'
import './Companion.css';
import Card from '../components/Card'
import breadSlice from '../img/bread.png'
import restaurant from '../img/restaurant.png'
import hotel from '../img/hotel.png'
import kharobar from '../img/kharobar.png'


function Companion() {
  const bakingBread = "نانوایی و قنادی"
  const restaurantCafe = "رستوران و کافه"
  const hotelTitr = "هتل"
  const kharobarTitr = "سوپر مارکت"

  return (
    <div className="container">
      <h1 className="text-center">بهترین همراهان ما</h1>
      <div className="cards">
        <Card classes={"width-card margin"} titr={bakingBread} img={breadSlice} alt={bakingBread} widthImageClass={"img-card"} />
        <Card classes={"width-card margin"} titr={restaurantCafe} img={restaurant} alt={restaurantCafe} widthImageClass={"img-card"} />
        <Card classes={"width-card margin"} titr={hotelTitr} img={hotel} alt={hotelTitr} widthImageClass={"img-card"} />
        <Card classes={"width-card margin"} titr={kharobarTitr} img={kharobar} alt={kharobarTitr} widthImageClass={"img-card"} />
      </div>
    </div>
  );
}

export default Companion;
