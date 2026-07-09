import { useState } from 'react'
import Navbar from './Components/Navbar'
import MainContent from './Components/MainContent'
import Footer from './Components/Footer';


function App() {
    

const observerAtInfo = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if (entry.isIntersecting){
            entry.target.classList.add("infotran")
        }else{
            entry.target.classList.remove("infotran")
        }
    });
});

const observerAtSection5 = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if (entry.isIntersecting){
            let title = document.getElementById("titleForProject");
            title.textContent = "Projects";
            title.style.color = "white";
        }else{
            let title = document.getElementById("titleForProject");
            title.style.color = "#c6b600";
            title.textContent = "Contacts";
        }
    });
});

let info = document.querySelectorAll(".info2");
info.forEach((el2)=>observerAtInfo.observe(el2));

let project_section = document.querySelectorAll(".newSection5");
project_section.forEach((el3)=>observerAtSection5.observe(el3));

function openupfor(){
    let nth_list = document.getElementById("Section6").children
    nth_list[0].style = "opacity : 0%"
    nth_list[1].style = "transform: translateX(100%);"
    nth_list[2].style = "transform: translateX(0%)"
    nth_list[4].style = "transform: translateX(0%);"
}

function backhowitwas(){
    let nth_list = document.getElementById("Section6").children
    nth_list[0].style = "opacity : 50%"
    nth_list[1].style = "transform: rotateZ(10deg);"
    nth_list[2].style = "transform: rotateZ(-10deg);"
    nth_list[4].style = "transform: rotateZ(5deg);"
}
  return (
    <div>
     <Navbar></Navbar>
     <MainContent></MainContent>
     <Footer></Footer>
    </div>
  )
}

export default App
