
const localData = JSON.parse(localStorage.getItem('user'));

const Fetch = async ({ email, password }) => {

    let response = await fetch('http://localhost:8000/api/v1/users/login', {
        method: 'post',
        body: JSON.stringify({ email, password }),
        headers: {
            'Content-Type': 'application/json'
        },
        credentials : "include"
    });

    if (!response.ok) {
        throw new Error('Failed To Fetch Data');
    }

    let fetchData = await response.json();
    console.log("fetch function working ", fetchData);
    return fetchData;

}
const FetchAllUser = async () => {
    try {
        const response = await fetch('http://localhost:8000/api/v1/users', {
            method: 'get',
            // body: JSON.stringify({ email, password }),
            headers: {
                'Content-Type': 'application/json'
            },
            credentials : "include"
        });

        // console.log('Response:', response);

        if (!response.ok) {
            throw new Error('Failed to fetch all users');
        }

        const fetchedAllUsers = await response.json();
        console.log("Fetched all users data:", fetchedAllUsers);
        return fetchedAllUsers;
    } catch (error) {
        console.error('Error fetching all users:', error);
        throw error;
    }
};

const UpdateUser = async() => {
    try{
        const fetchData = await fetch('http://localhost:8000/api/v1/users') 

    }
    catch(error){
        throw new Error ("Failed to update user", error)
    }
}


const UserDelete = async (id) => {
    let deleteUser = await fetch(`http://localhost:8000/api/v1/admin/users/${id}`, {
        method: "delete",
       credentials: "include"

    });
    if (deleteUser.ok) {
        await deleteUser.json(); // Parse the response JSON
        // setUsers('')
    } else {
        // Handle the error here
        console.error("Failed to delete User");
    }
}


export { Fetch, FetchAllUser, UserDelete };