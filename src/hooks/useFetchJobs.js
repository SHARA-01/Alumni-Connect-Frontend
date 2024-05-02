
const JobPostCreate = async({title, company, location, jobDescription}) => {
    let AddPost = await fetch('http://localhost:8000/api/v1/jobs', {
        method: 'post',
        body: JSON.stringify({title, company, location, jobDescription }),
        headers: {
            'Content-Type': 'application/json'
        },
        credentials : "include"
    });
    if (!AddPost.ok) {
        throw new Error('Failed To Fetch Data');
    }
    let fetchData = await AddPost.json();
    return fetchData;
    
}

const GetJobInfo = async(id)=> {
    let response = await fetch(`http://localhost:8000/api/v1/jobs/${id}`, {
        method: 'get',
        credentials : "include"
    });
    if (!response.ok) {
        throw new Error('Failed To Fetch job info ');
    }
    let fetchData = await response.json();
    return fetchData;
    
}
const GetAllJobPost = async() => {
    let GetPost = await fetch('http://localhost:8000/api/v1/jobs', {
        method: 'get',
        credentials : "include"
    });
    if (!GetPost.ok) {
        throw new Error('Failed To Fetch Data');
    }
    let fetchData = await GetPost.json();
    return fetchData;
    
}

const ActivePost = async(id) => {
    let checkIsActive = await fetch(`http://localhost:8000/api/v1/jobs/active/${id}`, {
        method: 'put',
        credentials: "include"
    });
    if(!checkIsActive.ok){
        throw new Error("falid to active post", checkIsActive)
    }
}

const DeactivePost = async(id) => {
    let checkIsActive = await fetch(`http://localhost:8000/api/v1/jobs/deactive/${id}`, {
        method: 'put',
        credentials: "include"
    });
    if(!checkIsActive.ok){
        throw new Error("falid to deactive post", checkIsActive)
    }
}


const DeletePost = async(id) => {
    let deletePost = await fetch(`http://localhost:8000/api/v1/jobs/${id}`, {
        method: 'delete',
        credentials: "include"
    });
    if(!deletePost.ok){
        throw new Error("falid to delete post", deletePost)
    }
    return deletePost;
}



export {JobPostCreate ,GetAllJobPost, ActivePost, DeletePost, DeactivePost, GetJobInfo};