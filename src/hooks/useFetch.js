const localData = JSON.parse(localStorage.getItem('user'));

const Fetch = async ({ email, password }) => {
    let response = await fetch('http://localhost:8000/api/v1/users/login', {
        method: 'post',
        body: JSON.stringify({ email, password }),
        headers: {
            'Content-Type': 'application/json'
        },
        credentials: "include"
    });
    if (!response.ok) {
        throw new Error('Failed To Fetch Data');
    }
    let fetchData = await response.json();
    return fetchData;
}

const FetchAllUser = async (query) => {
    try {
        const response = await fetch(`http://localhost:8000/api/v1/users?${query}`, {
            method: 'get',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: "include"
        });
        if (!response.ok) {
            throw new Error('Failed to fetch all users');
        }
        const fetchedAllUsers = await response.json();
        return fetchedAllUsers;
    } catch (error) {
        console.error('Error fetching all users:', error);
    }
};

const FetchSingleuser = async (id) => {
    let User = await fetch(`http://localhost:8000/api/v1/users/p/${id}`, {
        method: "get",
        credentials: "include"
    });
    if (User.ok) {
        User = await User.json();
        return User;
    } else {
        console.error("Failed to fetch single User");
    }
}

const WhoAmI = async () => {
    let User = await fetch(`http://localhost:8000/api/v1/users/whoami`, {
        method: "get",
        credentials: "include"
    });
    if (User.ok) {
        User = await User.json();
        return User;
    } else {
        console.error("Failed to fetch single User");
    }
}



const UpdateUser = async ({ id, username, fullName, email, mobileNumber, role, degree, specialization, startYear, endYear, companyName, designation, startDate, currentlyWorking, endDate }) => {
    let UpdateUser = await fetch(`http://localhost:8000/api/v1/admin/users/${id}`, {
        method: "put",
        body: JSON.stringify({
            username,
            fullName,
            email,
            mobileNumber,
            role,
            degree,
            specialization,
            startYear,
            endYear,
            companyName,
            designation,
            startDate,
            currentlyWorking,
            endDate,
        }),
        headers: {
            'Content-Type': 'application/json'
        },
        credentials: "include"
    });
    if (UpdateUser.ok) {
        await UpdateUser.json();
        return UpdateUser;
    } else {
        console.error("Failed to update User");
        return UpdateUser.status;
    }
}

const UserDelete = async (id) => {
    let deleteUser = await fetch(`http://localhost:8000/api/v1/admin/users/${id}`, {
        method: "delete",
        credentials: "include"
    });
    if (deleteUser.ok) {
        await deleteUser.json(); 
        return deleteUser;
    } else {
        console.error("Failed to delete User");
        return deleteUser.status;
    }
}

const AvatarUpload = async(file) =>{

    const formData = new FormData();
    formData.append('avatar', file);
    console.log("userHook ", file)
    let response = await fetch(`http://localhost:8000/api/v1/users/avatar`, {
        method: "put",
        body: formData,
        credentials: "include"
    });
    console.log("userHook",response)
    if(response.ok){
        console.log("avatart uploaded successfully on cludnry ")
        return response.json();
        
    }
    else{
        throw new Error("faild to upload profile pic")
    }
}

export { Fetch, FetchAllUser, UserDelete, UpdateUser, FetchSingleuser, WhoAmI , AvatarUpload};