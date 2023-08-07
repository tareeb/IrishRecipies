import './recipecard.css'

function Recipecard({price , name , id , writer , src , allowreview}){

    function gotorecipespage(){
        console.log("here");
        window.location.href = "/recipes?name="+name+"&id="+id+"&writer="+writer+"&price="+price+"&src="+src+"";
    }

    return(
        <div className='Recipecard' >
            <div className='Recipecard_image_container'>
                <img src={src}></img>
                <div><h1>{name}</h1></div>
            </div>
            <div className='Recipecard_content' >
                {/* <h2>${price}</h2> */}
                <h1>{name}</h1>
                <p>By {writer}</p>
                {allowreview && <a onClick={gotorecipespage}>Read Recipie</a>}
            </div>
        </div>
    );
}

export default Recipecard;