import  {React} from "react";
import { Link } from "react-router-dom";
import './TitleEarings.css'


function TitleEarings() {



const styldiv = {
    backgroundImage:`url(./img/backgraund/backgraund4.jpg)`
}

console.log()






return(  
          
           
            <div  className="div_TitleEarings" style={styldiv} >
            
            <p  className="div_TitleEarings_head">ՈՍԿՅԱ ԶԱՐԴԵՐԻ ԱՄԲՈՂՋ ՏԵՍԱԿԱՆԻՆ ԱՅՍՏԵՂ</p>
                <p  className="div_TitleEarings_text">
                     iGold ոսկյա զարդերի առաջին օնլայն շուկան Ձեզ տալիս է
                 Հայաստանում ոսկյա զարդերի ողջ բազմազանությունը մեկ
                 հարթակում տեսնելու աննախադեպ հնարավորություն:

                 Կայքում ներկայացված է Ոսկու շուկայի, Dalma Gold Gallery – ի
                 և ոսկու վաճառքով զբաղվող այլ կազմակերպությունների ու անհատ 
                 վաճառողների կողմից առաջարկվող ոսկյա զարդերի լայն տեսականի:
                </p>
                 
                 <p className="link_cont"><Link to={'/'} className="div_TitleEarings_link">իմանալ ավելին</Link></p>
                
            </div>
   

   
    
    )
}

export default TitleEarings