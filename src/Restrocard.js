
import{styleCard} from "./Utils/Constants";

const Restrocard=(props)=>{
    const{resData}=props;
    const{name,cuisines,avgRating,costForTwo}=resData?.data;
    return(
        <div className="res-card" style={styleCard}>
            <img className="cardimage" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_292,h_300/TopPicks/6869328A.png" alt="biryani" />
            <h3>{name}</h3>
            <h3>{cuisines.join(", ")}</h3>
            <h4>{avgRating}</h4>
            <h4>{costForTwo}</h4>
           
        </div>
    )
}

export default Restrocard;