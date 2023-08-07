import './Pageintro.css'

function Pageintro({pagename , intro}){
    return(
        <div className='pageintro'>
                <p>Home - {pagename} </p>
                <h1>{pagename}</h1>
                <p className='Page_intro'>{intro}</p>
        </div>
    );
}

export default Pageintro 