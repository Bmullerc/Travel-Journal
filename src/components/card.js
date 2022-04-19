export default function Card(props) {
    return (
        <div className="card--container">
            <div className="card--img-container">
                <img src={`./images/${props.item.img}`} alt="" className="card--img"></img>
            </div>
            <div className="card--data">
                <div className="card--location">
                    <i class="fa-solid fa-location-dot"></i>
                    <h2 className="card--country">{props.item.country}</h2>
                    <a href={props.item.googleMaps}>View on Google Maps</a>
                </div>
                <h1 className="card--place-title">{props.item.place}</h1>
                <h3 className="card--date">{props.item.date}</h3>
                <p className="card--description">{props.item.description}</p>
            </div>
        </div>
    )
}