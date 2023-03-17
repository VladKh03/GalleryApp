import Gallery from '../../db/gallery.json'

function Artworks({pairness}){    
    console.log(pairness)  
    return Gallery.map((item) => {
        if(pairness && item.id % 2 === 0){
            return (
                <div className="gallery__div" key={item.id}>
                    <span className="gallery__item__name">{item.name}</span>
                    <img className="gallery__item" src={require("../../"+item.url)} alt="Alt" />
                </div>
                   
            )
        }
        if(!pairness && item.id % 2 !== 0){
            return (
                <div className="gallery__div" key={item.id}>
                    
                    <img className="gallery__item" src={require("../../"+item.url)} alt="Alt" />
                    <span className="gallery__item__name">{item.name}</span>
                </div>
            )
        }
        return (null)
    })
}
export default Artworks