import './navbar.css';
import {BiMenu} from 'react-icons/bi';
import {Link} from 'react-router-dom';
import {useState} from 'react';


function Navbar(){
    const [linkclasses, setlinkclasses] = useState(["link_container"]);

    const [loarderHeight , setLoaderHeight] = useState(0);
    const [loaderwidth , setLoaderwidth]    = useState(0);

    function togglemenu(){
        linkclasses.length === 1 
            ? setlinkclasses(['link_container', 'active'])
            : setlinkclasses(['link_container'])
    }

    function loader(){
        setLoaderHeight(3); //width of loading
        setLoaderwidth(100);

        setTimeout(function () {
            setLoaderHeight(0);
          }, 1000)

        setTimeout(function () {
            setLoaderwidth(0);
          }, 1000)
    }
    

    return(
        <div className='navbar'>

            <div className='menu_part'>

                <div className='logo'>
                    <h1>Irish <span>FoodHub</span></h1>
                    <h2>Food You Love</h2>
                </div>

                <ul>

                    <li> <Link to="/home" onClick={loader}> HOME </Link></li>
                    <li> <Link to="/user" onClick={loader}> Recipes </Link></li>
                    <li> <Link to='/search' onClick={loader}> SEARCH </Link></li>

                </ul>

                

            </div>

            <div className='menu_mobile'>
                
                <div className='logo'>
                    <h1>Irish <span>FoodHub</span></h1>
                    <h2>Food You Love</h2>
                </div>


                <div className='Button_Container'>
                    <button onClick={togglemenu}>  <BiMenu></BiMenu> Menu</button>

                </div>
                <div className={linkclasses.join(' ')}>
                    <ul>

                        <li> <Link to="/home" onClick={loader}> HOME </Link></li>
                        <li> <Link to="/user" onClick={loader}> Recipes </Link></li>
                        <li> <Link to='/search' onClick={loader}> SEARCH </Link></li>

                    </ul>
                </div>
            </div>

            <div className='pageloading'>
                    <div className='fillcolor' 
                         style={{width: `${loaderwidth}%` , height: `${loarderHeight}px`}}>
                    </div>
            </div>
            
        </div>
    );
}

export default Navbar ; 