import './RecipiePreview.css'
import Recipecard from "./recipecard";
import recipesdata from '../data/recipesdata';



function RecipiePreview({price , name , id , writer , src , allowreview}){

    return(
        <div className="bookpreview">
            <Recipecard
                id={id}
                name={name}
                price={price}
                writer={writer}
                src = {src}
                allowreview={false}
            ></Recipecard>
            <div className="recipie">
                <p>{recipesdata[id].rec}</p>
            </div>

        </div>
    );
}

export default RecipiePreview;