import"./test.css";
import { useState } from "react";


const Test = () => {
    const [name, setName] = useState("Mark Courtright");
    const [email, setEmail] = useState("smo@gmail.com");
    const [dataVisible, setDataVisible] = useState(false);

    const getData = () => {
        if (dataVisible) {
        return (
            <div>
                <h3>{name}</h3>
                <h4>{email}</h4>
            </div>
        );
        } else {
            return <label>Click on button to see info</label>;
        }
    };

    const handleClick = () => {
        setDataVisible(true);

};

    return (<div className="test-page">
            {getData()}
            <button onClick={handleClick} className="btn btn-info">See my info</button>
        </div>
    );
};

export default Test;
// git vs github 
/* git repositoty create local copies  for version control then go to another point another copy, can go back to previous version, all local on operating system, once all working then upload server outside a computer, which is gitHub (Microsoft), Azure(ms), create commit to create local copies, then push to server gitHub, clone to git, push to gitHub, other developers can push to same git on gitHub, gitHub will merge the files, companies have rules on when to push, ex daily, or when finished task, here we push at the end of every class, on command prompt dir gives serial number
git init, git status*/