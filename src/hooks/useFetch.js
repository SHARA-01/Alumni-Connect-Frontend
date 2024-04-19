
const localData = JSON.parse(localStorage.getItem('user'));

const Fetch = async ({ email, password }) => {

    let response = await fetch('http://localhost:8000/api/v1/users/login', {
        method: 'post',
        body: JSON.stringify({ email, password }),
        headers: {
            'Content-Type': 'application/json'
        },
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
            method: 'GET',
           
        });

        console.log('Response:', response);

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

export { Fetch, FetchAllUser };