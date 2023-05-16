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
    for(let i=0;i<15;i++){
        emptyRestData.info.index = i;
        emptyRestDataList.push(emptyRestData);
    }
    return (<div className="rest-container">
    {emptyRestDataList.map((rest)=>{
        return <RestaurantCard key={rest?.info?.id} restData={rest} />
    })}
  </div>)
}

export default Shimmer;
