const HRPage=({employees, setEmployees})=>{

    const filteredEmployees = employees.filter((emp)=>emp.status==="accepted");

    return(
        <div className="page">
            <h2>HR Panel</h2>
            {filteredEmployees.map((e)=>{
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
                    </div>
                )
            })}
        </div>
    )
}

export default HRPage;