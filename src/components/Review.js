import { useState } from 'react';
const Review = ({username , text , id}) => {

    const [showFullText, setShowFullText] = useState(false);
 
    const handleClick = () => {
        showFullText ? setShowFullText(false) : setShowFullText(true);
    };

    return (
        <div className='review'>
            <h1>{username}</h1>
            {!showFullText && <p className='halftext'>{text.substring(0,200)}......</p>}
            {showFullText && <p className='fulltext'>{text}</p>}
            {!showFullText && <button className='readmore-button' onClick={handleClick}>Read More</button>}
            
            { showFullText && <div className='reviews_button'> 
                <button className='button'  onClick={handleClick}>
                    Close
                </button>

            </div>}

        </div>
    );
}

export default Review ;

