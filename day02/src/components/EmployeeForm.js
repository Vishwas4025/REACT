import { useState } from "react";
import EmployeeList from "./EmployeeList";

const EmployeeForm = ()=>{

    const [employee, setEmployee] = useState({
        fullname : "",
        email : "",
        mobno : "",
        dob : "",
        aadhaar : "",
        pan : "",
        address : "",
    });
    
    const handleChange=(e)=>{
        const {name, value} = e.target;
        setEmployee({
            ...employee,
            [name] : value
        })
    }

    const handleClick = (e) => {
        e.preventDefault();
        const updEmp = {
            ...employee,
            id : Date.now(),
            status : "pending"
        }
        EmployeeList.push(updEmp);
        console.log(EmployeeList);
    };



    return(
        <div>
            <h2>Register</h2>
            <form>
                <div>
                    <label>Fullname : </label>
                    <input
                        type="text"
                        name="fullname"
                        value={employee.fullname}
                        onChange={handleChange}
                        placeholder="fullname"
                    />
                </div>
                
                <div>
                    <label>Email : </label>
                    <input
                        type="text"
                        name="email"
                        value={employee.email}
                        onChange={handleChange}
                        placeholder="email"
                    />
                </div>

                <div>
                    <label>Mob No : </label>
                    <input
                        type="text"
                        name="mobno"
                        value={employee.mobno}
                        onChange={handleChange}
                        placeholder="mobno"
                    />
                </div>

                <div>
                    <label>DOB : </label>
                    <input
                        type="date"
                        name="dob"
                        value={employee.dob}
                        onChange={handleChange}
                        placeholder="DOB"
                    />
                </div>

                <div>
                    <label>Aadhaar : </label>
                    <input
                        type="text"
                        name="aadhaar"
                        value={employee.aadhaar}
                        onChange={handleChange}
                        placeholder="Aadhaar"
                    />
                </div>

                <div>
                    <label>PAN : </label>
                    <input
                        type="text"
                        name="pan"
                        value={employee.pan}
                        onChange={handleChange}
                        placeholder="PAN"
                    />
                </div>

                <div>
                    <label>Address : </label>
                    <textarea
                        type="text"
                        name="address"
                        value={employee.address}
                        onChange={handleChange}
                        placeholder="Address"
                    />
                </div>

                <button onClick={handleClick}>Register</button>
                
            </form>
        </div>
    )
}

export default EmployeeForm;