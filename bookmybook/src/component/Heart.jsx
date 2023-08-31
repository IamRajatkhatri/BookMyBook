import axios from "axios";
import { useEffect, useState } from "react";

export default()=>{

    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [bookData,setBookData] = useState([]);
    const [userData,setUserData] = useState([]);
    const [newUser,setNewUser] = useState([]);
    const [userName,setUserName] = useState("");
    const [role,setRole] = useState("");
    const [mobileNumber,setMobileNumber] = useState("");
    

    useEffect(()=>{
        
       axios.get("http://localhost:8080/books").then((resp)=>{
        if(resp){
            setBookData(resp.data);
        }
       }).catch((e)=>{console.log(e)})
    },[])
return{


    deleteItem:(e,item)=>{
        e.preventDefault();
        let book = {bookId:parseInt(item.id)}
        alert(book.bookId)
        axios.delete("http://localhost:8080/books",book).then((resp)=>{console.log(e)}).catch((e)=>{console.log("delete error")});
    },

    settingMobileNumber:(value)=>{
	setMobileNumber(value);	
    },

    settingUserName:(value)=>{
        setUserName(value);
    },

    settingRole:(value)=>{
        setRole(value);
    },

    signingUp:(e)=>{
        e.preventDefault();
        let newUser = {userName:userName,role:role,email:email,password:password,mobileNumber:mobileNumber}
	
        axios.post("http://localhost:8080/SignUp",newUser).then((e)=>{
            if(e){
                alert("userAdded");
            }
        }).catch((e)=>{console.log(e)})
    },

    loggingIn:(e)=>{
        e.preventDefault();
        let newUser = {email:email,password:password}
        axios.post("http://localhost:8080/Login",newUser).then((resp)=>{
            if(resp){
            setUserData(resp.data);
            alert("User logged In")
            }
        }).catch((e)=>{console.log(e)})
    },
    settingEmail:(value)=>{
        setEmail(value);
    },

    settingPassword:(value)=>{
        setPassword(value);
    },

    bookData:bookData,
    userData:userData,
}
}
