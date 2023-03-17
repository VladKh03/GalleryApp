import Gallery from '../../db/gallery.json'

function Artworks({pairness}){    
    console.log(pairness)  
    return Gallery.map((item) => {
        if(pairness && item.id % 2 === 0){
            return (
                <img className="gallery__item" src={require("../../"+item.url)} alt="Alt" key={item.id}/>   
            )
        }
        if(!pairness && item.id % 2 !== 0){
            return (
                <img className="gallery__item" src={require("../../"+item.url)} alt="Alt" key={item.id}/>   
            )
        }
        return (null)
    })
}
export default Artworks