import './Homepage.css'
import {Link} from 'react-router-dom';
import { useState } from 'react';
import {AiFillCaretLeft , AiFillCaretRight} from 'react-icons/ai'
import Recipecard from '../components/recipecard';
import Testimonialdata from '../data/testimonaildata';
import recipesdata from '../data/recipesdata';

function Testimonial({comment , name , position , imagesrc}) {
    return(
        <div className='Testimonial'>
            <div>
                <p>{comment}</p>
            </div>
            <div className='clientinfo'>
                    <div>
                        <h1>{name}</h1>
                        <h2>{position}</h2>
                    </div>
            </div>
        </div>
    )
}
  




function Homepage() {

    
    const [ right, setRight] = useState(0);

    const max   = Testimonialdata.length ; 

    
    function moveright(){
        if(right < (max-1)*100){
            setRight( right + 100 )  ;   
        }
    }
    
    function moveleft(){
        if(right>0){
            setRight( right - 100 )  ; 
        }
    }

    return(
        <div>
            <div className='herosection'>
                <div className='hero_content'>
                    <h1>Food You Eat , Food You Love </h1>
                    <p>Here You can get all the foods that you like. Their Recipies and Thier Ingridients all in one place.</p>
                    <div className='HeroButtons'>
                        <button id='btn1'><Link to='/user'>View All Recipies</Link></button>
                        <button id='btn2'><Link to='/user'>Buy grocery</Link></button>
                    </div>
                </div>
            </div>

            <div className='servicesection'>
                <div className='Service_Container'>

                    <div className='service'>
                        <div className='circle' id='service1'>
                            <p>Quality</p>
                        </div>
                    </div>

                    <div className='service'>
                        <div className='circle'>
                            <p>Taste</p>
                        </div>
                    </div>

                    <div className='service'>
                        <div className='circle'>
                            <p>Care</p>
                        </div>
                    </div>

                    <div className='service'>
                        <div className='circle'>
                            <p>Love</p>
                        </div>
                    </div>
                    

                </div>

            </div>


            <div>
                <div className='recipessection_header'>
                        <h1>Our Latest Recipie</h1>
                </div>
                <div className='recipessection'>
            
                    { recipesdata.slice(0,3).map( (recipe , index) => {
                            return(
                                <Recipecard
                                    key={index}
                                    id={recipe.id}
                                    name={recipe.name}
                                    price={recipe.price}
                                    writer={recipe.writer_name}
                                    src = {recipe.image_url}
                                    allowreview={true}
                                ></Recipecard>
                            )      
                        })
                    }
                    
                </div>
            </div>

            <div className='recipessection flipped'>
            { recipesdata.slice(4,7).map( (recipe , index) => {
                        return(
                            <Recipecard
                                key={index}
                                id={recipe.id}
                                name={recipe.name}
                                price={recipe.price}
                                writer={recipe.writer_name}
                                src = {recipe.image_url}
                                allowreview={true}
                            ></Recipecard>
                        )      
                    })
                }
                 
            </div>

            <div className='Testimonialsection'>
                <div className='TestimonialHeader'>
                    <h2>See What People are Saying</h2>
                </div>
                
                <div>
                    <div className='TestimonialContainer'>
                        <div className='testimonialslider' style={{right:`${right}%`}}> 
                            {Testimonialdata.map( (testimonial , index) => (
                                <Testimonial 
                                    key={index}
                                    name = {testimonial.name}
                                    position = {testimonial.position}
                                    comment = {testimonial.comment}
                                ></Testimonial>
                            ))}
                        </div>
                        
                    </div>

                    <div className='testimonial_btn_container'>
                        <button className='leftbtn' onClick={moveleft}><AiFillCaretLeft></AiFillCaretLeft></button>
                        <button className='rightbtn' onClick={moveright}><AiFillCaretRight></AiFillCaretRight></button>
                    </div>

                </div>
            
            </div>
            
      
            
        </div>
    );
}

export default Homepage;
