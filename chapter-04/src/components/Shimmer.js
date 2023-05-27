import RestaurantCard from "./RestaurantCard";
const Shimmer = ()=>{
    const emptyRestData = {
        info : {
            index : 0,
            name:"", 
            cloudinaryImageId: "",
            costForTwo: "", 
            cuisines: "", 
            avgRatingString: "",
            sla: {
                deliveryTime: ""
            }
        }  
    }
    const emptyRestDataList = [];
    for(var i=0;i<15;i++){
        emptyRestDataList.push(emptyRestData);
    }
    return (<div className="flex flex-wrap">
    {emptyRestDataList.map((rest)=>{
        return <RestaurantCard key={Math.floor(Math.random() * 1000)} restData={rest} />
    })}
  </div>)
}

export default Shimmer;
