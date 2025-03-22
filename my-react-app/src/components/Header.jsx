import {Link} from "react-router-dom";
import "./header.css"

function Header() {
    return(
        <header className={"header-header"}>
           <nav className={"headerButtons"}>
               <Link className={"projectName"} to={"/home"}>PetShop</Link>
               <Link className={"headerButton"} to={"/catalog"}>Catalog</Link>
               <Link className={"headerButton"} to={"/cart"}>Cart</Link>
               <Link className={"headerButton"} to={"/profile"}>Profile</Link>
           </nav>
        </header>
    // <>
    //     <header className={"header-header"}>
    //         <nav className={"headerButtons"}>
    //             <div className={"projectName"} onClick={() => navigate("/")}>Золотое сердце</div>
    //             <button className={"headerButton"} onClick={() => navigate("/article")}>статьи</button>
    //             <button className={"headerButton"}>о приюте</button>
    //             {/*<button className={"btn"} onClick={() => navigate("/pets")}>Ищут дом</button>*/}
    //             <button className={"headerButton"}>помочь приюту</button>
    //             <button className={"headerButton chooseCatBtnHeader"} onClick={() => navigate("/cats")}>Выбрать питомца</button>
    //             <button className={"headerButton"}>
    //                 <img className="logo" src={myProfileImg}
    //                      onClick={() => {
    //                          navigate(`/profile`);
    //                      }}></img>
    //             </button>
    //         </nav>
    //     </header>
    // </>

    )
}
export default Header;