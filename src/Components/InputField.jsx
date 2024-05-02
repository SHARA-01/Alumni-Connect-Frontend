import React, { useState } from "react";
import { Link } from "react-router-dom";


const InputField = ({ type, placeholder, value, onChange, id, label, inputdivclass, inputClass, required, disabled }) => {

    const [error, setError] = useState('')



    return (
                <div className={`flex flex-col lg:max-w-[300px] lg:min-w-[250px]  ${inputdivclass}`}>
                    < label htmlFor={id} className="mb-1 text-md font-bold text-gray-700" > { label}</label >
                    <input
                        type={type}
                        id={id}
                        placeholder={placeholder}
                        value={value}
                        onChange={(e) =>{ 
                            let value = e.target.value;
                            onChange(value)
                            // if (value === '') {
                            //     setError('Input cannot be empty');
                            //   } else {
                            //     setError('');
                            //   }
                            }
                        }
                        className={`p-2 rounded-md  text-gray-600 text-md border border-gray-300 shadow-md placeholder:text-gray-500 placeholder:mx-2 focus:outline-blue-400 ${inputClass}`}
                        required={required ? true : false}
                        disabled={disabled ? true: false}
                    />
                </div>

    );
};

export default InputField;