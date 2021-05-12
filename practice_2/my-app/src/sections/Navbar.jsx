import Button from '../components/Button'
import '../index.css'
import './Navbar.css';
import logo from '../img/footerLogo.png'
import NavIcon from '../img/list-alt.svg'





function Navbar() {

    return (
        <div className="boxShadow">
            <div className="roban"></div>
            <div className="navbar">
                <div className="navRight display">
                    <img className="logo" src={logo} alt="" />
                    <Button classes={"marginBtnX display"} text={"درباره ما"} />
                    <Button classes={"marginBtnX display"} text={"کسب و کار"} />
                    <Button classes={"marginBtnX display"} text={"پشتیبانی"} />
                    <Button classes={"marginBtnX display"} text={"سوالات متداول"} />
                </div>
                <div className="navLeft display">
                    <Button classes={"myStores"} text={"فروشگاه من"} />
                </div>
                <img className="navicon" src={NavIcon} alt="" />
                <div className="resMenu">
                    <Button classes={"marginBtnY"} text={"درباره ما"} />
                    <Button classes={"marginBtnY"} text={"کسب و کار"} />
                    <Button classes={"marginBtnY"} text={"پشتیبانی"} />
                    <Button classes={"marginBtnY"} text={"سوالات متداول"} />
                    <Button classes={"marginBtnY"} text={"فروشگاه من"} />
                </div>

            </div>





        </div>

    );
}

export default Navbar;

