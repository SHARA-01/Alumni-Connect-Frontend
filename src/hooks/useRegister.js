const Register = async ({role,username, fullName, email, password, mobileNumber , degree, specialization, startYear, endYear, companyName, desination, startDate , endDate , currentlyWorking }) => {
   
    const localStore = JSON.parse(localStorage.getItem('user'))




    let response = await fetch('http://localhost:8000/api/v1/admin/users', {
        method: 'post',
        body: JSON.stringify(
            {username, fullName, email, password, mobileNumber, role,degree, specialization, startYear, endYear,
            companyName, desination, startDate , endDate , currentlyWorking}
        ),
        headers: {
            'Content-Type': 'application/json'
        },
        credentials: "include"
    });

    if (!response.ok) {
        throw new Error('Failed To Fetch Data');
    }

    let fetchData = await response.json();
    console.log("fetch function working ", fetchData);
    return fetchData;

}

export { Register };