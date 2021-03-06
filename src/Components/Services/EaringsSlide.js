import React,{useState,useRef,useEffect} from "react"
import { AiOutlineArrowRight,AiOutlineArrowLeft} from 'react-icons/ai';
import './EaringsSlide.css'



function EaringsSlide() {

    
 const useContener = useRef()
 const useSlide = useRef()
 const [width, setWidth] =useState(null)
 const [i , setI] = useState(0)
 const [bull, setBull] =useState(true)

 const arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21]
 

useEffect(()=>{
    change() 
    window.addEventListener('resize', change);
   
},[])


useEffect(()=>{
slider()
},[i])
 
const change = () =>{
   if (useSlide.current.offsetWidth >= 767) {
      setWidth(useSlide.current.offsetWidth/3)
   }else{
    setWidth(useSlide.current.offsetWidth)
   }
 }
 
 
 
 
 const next=()=>{
    setI(
       i === arr.length - 1 ? 0 : i + 1)
  
    setBull(!bull)
}

const prev = () => {

    setI( i=== 0? arr.length - 1: i - 1)
    setBull(!bull)
}


const slider =()=>{
    useContener.current.style.transform = `translate(-${i * width}px)`
    useContener.current.style.width = `${width*arr.length}px`
    setBull(!bull)  
}





    return( <div className="slider"  ref={useSlide} >
               
                <div ref={useContener} className="slider_contener">
                  {arr.map((el,i)=>{
                  return  <ul  className="slide_img_cont" key={i}>
                             <li className="slid_list">
                                 <p className="text">ականջող</p>
                                 <img className="img" width={width} src={`./img/earings/earings${el}.jpg`} alt=""/>
                                 <p className="text">գինը կախված է ձեր պատվերից</p>
                              </li>
                          </ul>
                                     })
                  }
                </div>
                <AiOutlineArrowRight className="btn_next" onClick={next}/>
                <AiOutlineArrowLeft className="btn_prev" onClick={prev}/>

            </div>)
}

export default EaringsSlide