import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Import Quill snow theme styles
// import './custom-quill.css'; // Import custom CSS for Quill customization

const CreatePost = ({hide}) => {
    const [editorHtml, setEditorHtml] = useState('');

    const handleChange = (html) => {
        setEditorHtml(html);
    };

    return (
        <div className='w-full h-auto ' >

            <div className="w-[80%] mx-auto my-10">
                
                <ul className='space-y-3 my-4'>
                    <li>
                        <label className='text-gray-600 font-semibold' htmlFor="title">Title</label>
                        <input id='title' type="text" placeholder='Titile' className='w-full py-2 px-2 shadow-md rounded-md outline-none text-gray-700 ' /></li>
                    <li>
                        <label className='text-gray-600 font-semibold' htmlFor="title">Company</label>
                        <input type="text" placeholder='Company Name' className='w-full py-2 px-2 shadow-md rounded-md outline-none  text-gray-700' />
                    </li>
                    <li>
                        <label className='text-gray-600 font-semibold' htmlFor="title">Location</label>
                        <input type="text" placeholder='City' className='w-full py-2 px-2 shadow-md rounded-md outline-none  text-gray-700' />
                    </li>
                </ul>
                <div className="border rounded-lg p-2 space-y-3 ">
                <label className='text-gray-600 font-semibold ' htmlFor="job-description">job description</label>
                <ReactQuill
                id='job-description'
                    className='w-full bg-white  rounded-md   '
                    theme="snow" // Use 'snow' theme for a simple editor
                    value={editorHtml} // Set the editor content
                    onChange={handleChange} // Handle changes in editor content
                    style={{ border: 'none', boxShadow: 'none', outline: 'none' }}
                />

                <div className='flex justify-end'>
                    <button className='px-[3.5rem] py-2 text-gray-600 font-semibold bg-yellow-400 rounded-md my-8 hover:bg-yellow-300 active:bg-yellow-500'>Post</button>
                </div>
                </div>
                
            </div>
        </div>
    );
};

export default CreatePost;
