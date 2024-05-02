import { useEffect, useState } from 'react'
import { InputField} from '../../Components/index'
import { FiEdit, FaWindowClose } from "../../Components/ReactIconsIndex";
import { useNavigate } from 'react-router-dom';
import {AvatarUpload, UpdateUser, WhoAmI } from '../../hooks/useFetch';
import  FileWithPath  from 'react-dropzone'

function Profile() {

    let data = JSON.parse(localStorage.getItem('user'))
    const naivgate = useNavigate();
    const [userData, setUserData] = useState('')
    const [editActive, setEditActive] = useState(false)
    const [changePassword, setChangePassword] = useState(false)
    const [uploadProfile, setUploadProfile] = useState(false)

    const [password, setPassword] = useState('')
    const [conformedPassword, setConformedPassword] = useState('')
    
    const [selectedFile, setSelectedFile] = useState(null);

    const [role, setRole] = useState(userData ? userData.username : data ? data.user.role : '')
    const [username, setUserName] = useState(userData ? userData.username : data ? data.user.username : '')
    const [fullName, setFullName] = useState(userData ? userData.username : data ? data.user.full_name : '')
    const [email, setEmail] = useState(userData ? userData.username : data ? data.user.email : '')
    const [mobileNumber, setMobileNumber] = useState(userData ? userData.username : data ? data.user.mobile_number : '')

    const handleUserData = async () => {
        let userdata = await WhoAmI();
        setUserData(userdata.data)
    }

    useEffect(() => {
        handleUserData()
    }, [])

    const UpdateProfile = (id) => {
        let fetch = async () => {
            let response = await UpdateUser({ id, username, fullName, email, mobileNumber, role });
            if (response.ok) setEditActive(false)
        }
        fetch();
    }


    
    const handleFileChange = (event) => {
      const file = event.target.files[0];
      setSelectedFile(file);
    //   console.log()
    };
  
    const handleUpload = async () => {
        const response = await AvatarUpload(selectedFile);
    };

    console.log(selectedFile)

    return (
        <div className='flex flex-col mt-5'>
            <div className='bg-image w-full rounded-md h-[300px] shadow-lg'>
            </div>
            <div className='bg-white rounded-md mx-3 -mt-10 p-2'>
                <div className='p-2 flex '>
                    <div className='w-[100px] align-middle ' >
                      <img src={userData && userData.avatar} className='h-[75px] w-[75px] rounded-[50px] mx-2' />
                    </div>
                    <div className='my-auto align-middle '>
                        <span className='text-gray-700 font-bold outline-none text-[1.4rem]'>{fullName || "User Name"}</span>
                        <br />
                        <span className='text-gray-500 text-[0.9rem]'>{role || "User Role"}</span>
                    </div>
                </div>
                <div>
                    <div className=' flex  px-4 py-5'>
                        <div className='p-2 flex-col w-2/3'>
                            <div className='flex justify-between  my-5'>
                                <span onClick={() => { setChangePassword(false), setEditActive(false), setUploadProfile(false) }} className='text-gray-500 text-[1rem] font-bold block cursor-pointer border border-white hover:border px-4 py-1 rounded-md hover:border-gray-300 active:bg-gray-200'>Profile Information</span>
                                <div className='mx-[5rem] space-x-5 align-middle'>
                                    <button onClick={() => { setUploadProfile(!uploadProfile), setChangePassword(false) , setEditActive(false) }} className='my-auto font-semibold text-gray-600 border border-gray-400 px-4 py-1 rounded-md hover:border-2 active:bg-gray-200 active:text-gray-900 shadow-md shadow-black/20  align-middle cursor-pointer' >{uploadProfile ? "Close" : "Change Profile"}</button>
                                    <button onClick={() => { setChangePassword(!changePassword),  setEditActive(false), setUploadProfile(false)}} className='my-auto font-semibold text-gray-600 border border-gray-400 px-4 py-1 rounded-md hover:border-2 active:bg-gray-200 active:text-gray-900 shadow-md shadow-black/20  align-middle cursor-pointer' >{changePassword ? "Close" : "Change Pasword"}</button>
                                    <button className='active:text-sky-500 align-middle '>{editActive ? <FaWindowClose size={25} onClick={() => { setEditActive(!editActive), setChangePassword(false), setUploadProfile(false) }} /> : <FiEdit size={25} onClick={() => { setEditActive(!editActive), setChangePassword(false) }} />}</button>
                                </div>
                            </div>
                            <div className='mt-5 mx-auto'>
                                {
                                    (editActive || changePassword || uploadProfile) ?
                                        changePassword ? <div>
                                            <span className='ml-10 text-gray-600 font-semibold border-b-2 px-4 py-1 border-gray-400 rounded-md'>Change Password</span>
                                            <InputField label='Old Password' type='text' value={password} onChange={setPassword} inputdivclass='ml-10 mt-4' />
                                            <InputField label='New Password' type='text' value={conformedPassword} onChange={setConformedPassword} inputdivclass='ml-10 mt-4' />
                                            <button className='bg-blue-500  py-2 w-[20%] ml-10 rounded-md my-5 hover:bg-blue-600 hover:shadow-md hover:shadow-blue-400 text-white font-semibold active:bg-blue-300 ' >Update</button>
                                        </div>
                                            : editActive ?
                                            <div className='flex flex-col h-auto' >
                                                <div className='flex space-x-10 space-y-4 flex-wrap'>
                                                    <InputField label='Role' type='text' value={role} onChange={setRole} inputdivclass='ml-10 mt-4' />
                                                    <InputField label='username' type='text' value={username} onChange={setUserName} />
                                                    <InputField label='Full Name' type='text' value={fullName} onChange={setFullName} />
                                                    <InputField label='Email' type='text' value={email} onChange={setEmail} />
                                                    <InputField label='Mobile Number' type='text' value={mobileNumber} onChange={setMobileNumber} />
                                                </div>
                                                <button onClick={() => { UpdateProfile(data.user._id) }} className='bg-blue-500  py-2 w-[20%] ml-10 rounded-md my-5 hover:bg-blue-600 hover:shadow-md hover:shadow-blue-400 text-white font-semibold active:bg-blue-300 ' >Update</button>
                                            </div> : <div className='flex flex-col p-5' >
                                            <input type="file" id="filepicker" name="fileList" onChange={(e)=> setSelectedFile(e.target.files[0])} webkitdirectory webkitRelativePath multiple />
                                                <button onClick={handleUpload} className=' bg-blue-500  py-2 w-[20%]  rounded-md my-5 hover:bg-blue-600 hover:shadow-md hover:shadow-blue-400 text-white font-semibold active:bg-blue-300 ' >Upload</button>
                                                
                                            </div>
                                        :
                                        <table className='flex space-x-8 mx-auto '>
                                            <thead className=' flex  py-2 space-x-5'>
                                                <tr className='flex flex-col text-md font-bold text-gray-700'>
                                                    <td>Full Name</td>
                                                    <td>Email</td>
                                                    <td>Mobile</td>
                                                    <td>username</td>
                                                    <td>role</td>
                                                </tr>
                                            </thead>
                                            <tbody className='flex flex-col  '>
                                                <tr className='flex flex-col text-md font-semibold text-gray-600 '>
                                                    <td className='space-x-3'>:  {fullName}</td>
                                                    <td>:  {email}</td>
                                                    <td>:  {mobileNumber}</td>
                                                    <td>:  {username}</td>
                                                    <td>:  {role}</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Profile