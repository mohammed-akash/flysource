"use client";
import React from 'react';

const AuthInput = ({ formik, label, name, ...rest }) => {
    return (
        <div className="w-full relative" id={name}>
            {label && (
                <label
                    htmlFor={name}
                    className="block text-sm font-normal text-gray-700 capitalize mb-1"
                >
                    {label}
                </label>
            )}
            <input
                className={`w-full border border-gray-300 rounded-md p-2 ${
                    formik.errors[name] && formik.touched[name] ? 'border-red-500' : ''
                }`}
                id={name}
                name={name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values[name]}
                {...rest}
            />
            {formik.errors[name] && formik.touched[name] && (
                <p className="text-red-500 text-xs mt-1 absolute">{formik.errors[name]}</p>
            )}
        </div>
    );
};

export default AuthInput;
