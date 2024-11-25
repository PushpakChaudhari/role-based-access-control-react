const StaffPage = () => {
    const staffList = [
        { id: 1, name: "John Doe", position: "Loan Manager", email: "johndoe@example.com" },
        { id: 2, name: "Jane Smith", position: "Customer Support", email: "janesmith@example.com" },
        { id: 3, name: "Michael Brown", position: "Branch Manager", email: "michaelbrown@example.com" },
        { id: 4, name: "Emily Davis", position: "Accountant", email: "emilydavis@example.com" },
    ];

    return (
        <div className="container mt-3">
            <h2 className="text-center">Staff Details</h2>
            <table className="table table-bordered mt-4">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Position</th>
                        <th scope="col">Email</th>
                    </tr>
                </thead>
                <tbody>
                    {staffList.map((staff) => (
                        <tr key={staff.id}>
                            <th scope="row">{staff.id}</th>
                            <td>{staff.name}</td>
                            <td>{staff.position}</td>
                            <td>{staff.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default StaffPage;
