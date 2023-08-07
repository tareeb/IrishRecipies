import '../pages/Requestpage.css'
import Pageintro from '../components/Pageinto';

function Request() {
    

    return(
        <div className='Request Page'>
            <Pageintro 
                pagename={"No Page Found"} 
                intro={"The page you are looking for does not exist"}
            ></Pageintro>   
        </div>
    );
}

export default Request;