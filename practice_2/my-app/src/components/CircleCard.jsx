import './CircleCard.css';

function CircleCard({ img, classes, widthImage, alt,titr, ...props }) {
    return (
    
        <div className={`hadCircleCard ${classes}`}>
            <div className="circleCard">
                <img src={img} className={`${widthImage}`} alt={alt} />
            </div >
            <h3 className="titr">{titr}</h3>
        </div>
    );
}

export default CircleCard;