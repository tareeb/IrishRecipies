import './Recipespage.css'
import './searchpage.css'
import Recipecard from '../components/recipecard';
import {AiFillCaretLeft , AiFillCaretRight} from 'react-icons/ai'
import { useState, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import Search from '../components/Search';
import recipesdata from '../data/recipesdata';



function Searchpage(){


    const [searchParams] = useSearchParams();
    let str = searchParams.get('query')   ;
    str = str ?? "" ; 
    console.log(str);

    const recipesdatafilter = recipesdata.filter((item) => item.name.toLowerCase().includes(str.toLowerCase()) )

    const maxrecipes_inpage = 9 ;
    const totalrecipes = recipesdata.length;

    const totalpages = Math.ceil(totalrecipes / maxrecipes_inpage) ; 

    let   startindex = 0 ; 
    let   endindex   = startindex + maxrecipes_inpage ; 


    const [recipestoshow , setrecipestoshow] = useState(recipesdatafilter.slice(startindex , endindex)) ; 

    console.log(recipestoshow) ;
    
    const recipelistRef = useRef()

    function moveback(){
        
        if(startindex>0){
            startindex = startindex - maxrecipes_inpage ; 
            endindex   = endindex   - maxrecipes_inpage ;
            setrecipestoshow(recipesdata.slice(startindex , endindex)) ;
            window.scrollTo({
                top: recipelistRef.current.getBoundingClientRect().top + window.scrollY,
                behavior: 'smooth'
            });
        }
    }

    function movenext(){
        if(endindex<totalrecipes){
            startindex = startindex + maxrecipes_inpage ; 
            endindex   = endindex   + maxrecipes_inpage ; 
            setrecipestoshow(recipesdata.slice(startindex , endindex)) ;
            window.scrollTo({
                top: recipelistRef.current.getBoundingClientRect().top + window.scrollY,
                behavior: 'smooth'
            });
        }
    }

    function gotopage(index){
            startindex = index*maxrecipes_inpage ; 
            endindex   = startindex + maxrecipes_inpage;
            setrecipestoshow(recipesdata.slice(startindex , endindex)) ;
            window.scrollTo({
                top: recipelistRef.current.getBoundingClientRect().top + window.scrollY,
                behavior: 'smooth'
            });
    }




    return(
        <div className='recipespage'>
        <div className='searchcontainer'>
            <Search></Search>
        </div>

        <div className='recipeslist' ref={recipelistRef}>
            { 
            
            recipestoshow.map( (recipe , index) => {
                    
                    return(
                        <Recipecard
                            key={index}
                            id={recipe.id}
                            name={recipe.name}
                            price={recipe.price}
                            writer={recipe.writer_name}
                            src = {recipe.image_url}
                            allowreview = {true}
                        ></Recipecard>
                    )
                    
                })
            }
        </div>

        <div className='recipespage_btn_container'>
            <button className='prevbtn' onClick={moveback}><AiFillCaretLeft></AiFillCaretLeft></button>
            {Array(totalpages).fill(0).map( (item , index) => (   
                <button key={index} className='gotobtn' onClick={() => gotopage(index)}>{index}</button>
            ))}
            <button className='nextbtn' onClick={movenext}><AiFillCaretRight></AiFillCaretRight></button>
        </div>
        
    </div>
    );
}

export default Searchpage;