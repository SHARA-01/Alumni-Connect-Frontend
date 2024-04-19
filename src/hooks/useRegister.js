const Register = async ({role,username, fullName, email, password, mobileNumber , degree, specialization, startYear, endYear, companyName, desination, startDate , endDate , currentlyWorking }) => {
   
    const localStore = JSON.parse(localStorage.getItem('user'))




    let response = await fetch('http://localhost:8000/api/v1/admin/users', {
        method: 'post',
        body: JSON.stringify(
            {userDetails: {username, fullName, email, password, mobileNumber, role}},
            {GraduationDetails: {degree, specialization, startYear, endYear}},
            {CompanyDetails: {companyName, desination, startDate , endDate , currentlyWorking}}
        ),
        headers: {
            'Content-Type': 'application/json',
            'accessToken': `${localStore.accessToken}`,
            'refreshToken': `${localStore.refreshToken}`
            
        },
    });

    if (!response.ok) {
        throw new Error('Failed To Fetch Data');
    }

    let fetchData = await response.json();
    console.log("fetch function working ", fetchData);
    return fetchData;

}

export { Register };