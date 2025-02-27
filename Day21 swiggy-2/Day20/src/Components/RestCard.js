
export default function RestCard({restInfo}){
   
    
    return (
        <img className="w-70 h-45 object-cover" src={"https://media-assets.swiggy.com/swiggy/image/upload/"+restInfo.info.cloudinaryImageId}></img>
    )
}