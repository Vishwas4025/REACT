

const AdminPage=({employees, setEmployees})=>{

    // const handleStatus=(emp, val)=>{
    //     const newEmployees = employees.filter((e)=>e.id !== emp.id);
    //     if(val==="accept"){
    //         const updEmp = {...emp, status:"accepted"}
    //         setEmployees([...newEmployees, updEmp])
    //     }
    //     else if(val==="reject"){
    //         const updEmp = {...emp, status:"rejected"}
    //         setEmployees([...newEmployees, updEmp])
    //     }
    // }
    const handleStatus=(id, val)=>{
        setEmployees(employees.map((emp)=>{
            return (emp.id === id ? {...emp, status: val==="accept" ? "accepted" : "rejected" } : emp);
        }))
    }

    return(
        <div className="page">
            <h2>Admin Panel</h2>
            {employees.map((e)=>{
                return(
                    <div key={e.id} className={`card employee-card ${e.status}`}>
                        <div className="card-header">
                            <h3>{e.fullname}</h3>
                            <span className={`status-badge ${e.status}`}>{e.status}</span>
                        </div>
                        <div className="card-body">
                            <div className="card-row"><strong>Email:</strong> {e.email}</div>
                            <div className="card-row"><strong>Mobile:</strong> {e.mobno}</div>
                            <div className="card-row"><strong>DOB:</strong> {e.dob}</div>
                            <div className="card-row"><strong>Aadhaar:</strong> {e.aadhaar}</div>
                            <div className="card-row"><strong>PAN:</strong> {e.pan}</div>
                            <div className="card-row"><strong>Address:</strong> {e.address}</div>
                        </div>
                        {e.status === "pending" && (
                            <div className="btn-group">
                            <button className="btn" onClick={() => handleStatus(e.id, "accept")}>Accept</button>
                            <button className="btn" onClick={() => handleStatus(e.id, "reject")}>Reject</button>
                            </div>
                        )}
                    </div>

                )
            })}
        </div>
    )
}

export default AdminPage;