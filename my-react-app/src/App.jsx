import {Routes, Route} from 'react-router-dom'
import Catalog from "./pages/Catalog"
import React from "react"
import Product from "./pages/Product"
import Header from "./components/Header";
import Home from "./pages/Home"
import Footer from "./components/Footer.jsx";
import UserProfile from "./pages/UserProfile.jsx";
import UserProfileEdit from "./pages/UserProfileEdit.jsx";
import HotFound from "./pages/NotFoundPage.jsx";
import Cart from "./pages/Cart.jsx";
import Login from "./pages/login.jsx";
import {CartProvider} from "./components/cartContext.jsx";
import Appp from "./components/FeedBackForm.jsx";


function App(){

    return (
        <>
            <CartProvider>
                <Header/>
                <Routes>
                    <Route path={"/login"} element={<Login/>}/>
                    <Route path="/home" element={<Home/>}></Route>
                    <Route path="/catalog" element={<Catalog />}/>
                    <Route path="/product/:id" element={<Product />}>
                    </Route>
                    <Route path="/profile" element = {<UserProfile/>}>
                        <Route path="/profile/edit" element={<UserProfileEdit/>}/>
                    </Route>
                    <Route path="/cart" element={<Cart/>}/>
                    <Route path="/*" element=<HotFound/>/>
                    <Route path="/feedback" element={<Appp/>}/>
                </Routes>
                <Footer/>
            </CartProvider>
        </>
    );
}

export default App;


// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import {createClient} from "@supabase/supabase-js";
// import {useState, useEffect, useRef, useMemo, useCallback, useReducer} from "react";
// import './App.css'
//
// const supbaseUrl = "https://rngeexylxgmfqpdtnwuf.supabase.co"
// const supbaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJuZ2VleHlseGdtZnFwZHRud3VmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDE5NDg4NTUsImV4cCI6MjA1NzUyNDg1NX0.XiH_xyosSslDqyaZkueJ1Xja9v4w6lXblmLhxV6Ke4A"
// const supbase = createClient(supbaseUrl, supbaseKey)
//
// function App() {
//     const reducer = (state, action) => {
//         switch(action.type){
//             case "increment":
//                 return {count: state.count + 1};
//             case "decrement":
//                 return {count: state.count -1};
//             default:
//                 return state;
//         }
//     }
//     const [name, setName] = useState("")
//     const [users, setUsers] = useState([])
//     const inputRef = useRef(null)
//     const [state, dispatch] = useReducer(reducer, {count: 0})
//     const [id, setDelId] = useState("")
//
//     const fetchUsers = useCallback(async()=>{
//         const {data, error} = await supbase.from("users").select("*");
//         if (error) {
//             console.error(error)
//         } else{
//             setUsers(data)
//         }
//     }, [])
//
//
//     useEffect(()=>{
//         fetchUsers().catch((error) => console.error("Update users error", error))
//     }, [fetchUsers]);
//
//
//
//     const userCount = useMemo(()=> users.length, [users]);
//
//     const addUser= useCallback(async()=>
//     {
//         if (!name) return "Add some users!"
//         try{
//             const {data, error} = await supbase.from("users").insert([{name}]).select()
//             if (error){
//                 console.error(error)
//             } else{
//                 if(data && data.length  > 0){
//                     setUsers((prevUsers) => [...prevUsers, data[0]]);
//                 }
//                 setName("")
//                 inputRef.current.focus()
//             }
//         } catch (err){
//             console.error("Add user error:", err);
//         }
//     }, [name])
//     const deleteUser = useCallback(async(Id)=> {
//         try{
//             const {data, error} = await supbase.from("users").delete().eq("id", Id)
//             if (error){
//                 console.error(error)
//             } else{
//                 if(data){
//                     setUsers((prevUsers) => ({
//                         users: prevUsers.users.filter((user) => user.id !== Id)
//                     }))
//                     // set((state) => ({
//                     //     cats: state.cats.filter((cat) => cat.id !== id)
//                     // }));
//                 }
//                 setName("")
//                 inputRef.current.focus()
//             }
//         } catch (err){
//             console.error("Add user error:", err);
//         }
//
//     }, [users])
//     return (
//       <>
//           <h1>React Hooks</h1>
//           <div className="input container">
//               <input
//                   ref={inputRef}
//                   type="text"
//                   placeholder={"Введите имя:"}
//                   value={name}
//                   onChange={(e) => {
//                       setName(e.target.value)
//                   }}
//               />
//               <button onClick={addUser}>
//                   Добавить пользователя
//               </button>
//
//           </div>
//           <h2>Users ({userCount}):</h2>
//           <ul>
//               {users.map((user) => (
//                   <li key={user.id}>{user.name}
//                       <button onClick = {() => {
//                           console.log(user.id)
//                           deleteUser(user.id)
//                       }}>
//                           -
//                       </button>
//                   </li>
//               ))}
//           </ul>
//
//           <div>
//               <h2>useReducer</h2>
//               <p>Count: {state.count}</p>
//               <button onClick={() => {
//                   dispatch({type: "increment"})
//               }}>+
//               </button>
//               <button onClick={() => {
//                   dispatch({type: "decrement"})
//               }}>-
//               </button>
//
//           </div>
//
//
//       </>
//     )
// }
//
