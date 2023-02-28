import React from "react";
import './CompStyle.css';
import Plus  from "./Pbutton.js";
import Minus from "./Mbutton.js";

export class Savmeal extends React.Component {
    
    state = {msg:"MIN"}
    
    PCallback = (PData) =>{
        this.setState({msg: PData})
    }

    MCallback = (MData) =>{
        this.setState({msg: MData})
    }

    render() {
        const {msg} = this.state;
        const menu = {
            type:"อาหารคาว",
            name:"มัสมั่น",
            story:"มัสมั่นไก่ ทำยังไงให้หอมเครื่องแกง น้ำกะทิข้น ซดแล้วลื่นคอ ราดข้าวกินก็อร่อย พร้อมเนื้อไก่สุกแน่น เต็ม ๆ คำ ให้สมกับการได้รับการยกย่องว่า เป็นอาหารไทยที่อร่อยที่สุดในโลก จากการจัดอันดับโดย CNN เมื่อปี 2564 SGE มีสูตรมาให้แล้ว พร้อมวิธีการทำโดยละเอียด ตั้งแต่การทำพริกแกง ไปจนถึงการทำแกงมัสมั่นไก่ออกมา ให้น่ารับประทาน",
            pic :"https://www.sgethai.com/wp-content/uploads/2022/02/massaman1-1024x572.jpg"
        }
        return(
            <div>
            <h2>{menu.type}</h2>
            <h3>{menu.name}</h3>
                <article className="block">
                <img src={menu.pic}/>
                <div className="button">
                    <Plus plusCallback   = {this.PCallback}/>
                    <h1>{msg}</h1>
                    <Minus minusCallback = {this.MCallback}/>
                </div>
                </article>
            </div>
        );
    }
}


export default Savmeal;