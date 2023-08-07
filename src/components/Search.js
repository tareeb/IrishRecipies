import {BiSearch} from 'react-icons/bi';
import {useState} from 'react';


function gotosearchpage(str){
    window.location.href = `/search?query=${str}`;

}

function Search(){
    const [searchValue, setSearchValue] = useState('')
    return(
        <div className='search_bar'>
            <div className='search_input'>
                <input 
                    type='text'
                    onChange={(event) => setSearchValue(event.target.value)}
                    placeholder='Search' />
            </div>
            <div className='search_icon'>
                <BiSearch 
                    onClick={() => gotosearchpage(searchValue)}
                />
            </div>
        </div>
    );
}

export default Search;
