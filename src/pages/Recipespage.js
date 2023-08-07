import './Recipespage.css'
import RecipiePreview from '../components/RecipiePreview';
import Review from '../components/Review';
import reviewsdata from '../data/reviewsdata';
import { useSearchParams } from 'react-router-dom';

function Recipespage() {
    

    const [searchParams] = useSearchParams();
    
    const name = searchParams.get("name");
    const id = searchParams.get("id");
    const writer = searchParams.get("writer");
    const price = searchParams.get("price");
    const src = searchParams.get("src");

    const reviews = reviewsdata.filter(review => review.recipe == id);

    return(
        <div className='recipespage'>


            <div className='recipecenter'>

                <div className='recipepreview_container'>

                    <div>
                        <RecipiePreview
                            id={id}
                            name={name}
                            price={price}
                            writer={writer}
                            src = {src}
                            allowreview={false}
                            ></RecipiePreview>
                    </div>

                </div>

                <div className='recipereviews'>
                    <h1>See what Users are Saying about recipe</h1>
                
                    <div className='reviews'>   
                        {reviews.length == 0 && <p>No reviews yet</p>}                     
                        {reviews && reviews.map((review , index) => (
                           <Review username={review.username} text={review.text} id={review.id} key={index}></Review>
                        ))}
                    </div>
                
                </div>
            </div>

            
           
        </div>
    );
}

export default Recipespage;