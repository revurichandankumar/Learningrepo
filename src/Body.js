import Restrocard from "./Restrocard";
import {resList} from "./Utils/Constants";

const Body=()=>{
    return(
        <div className="body">
        <div className="filter">
            <button className="filter-ban"
            onClick={()=>{resList=resList.filter(r=>r.data.avgRatingString>4);}}>
                filter
            </button >
        </div>
       {"chandan"}
       {"kumar----"}
        
            <div className="res-container">
            {/* <Restrocard resData={resList[0]} /> */}
            {resList.map((r) => (
            <Restrocard key={r.id} resData={r} />
        ))}

             
           
        </div>
        </div>
    )
}

export default Body;