import React from "react";
import Form from "../components/Form";
import "../assets/css/HomePage.css"


export default function HomePage() {
    return (
        <div className="h-screen md:flex">
            <div className="h-full md:w-3/6 bg-white shadow-2xl shadow">
                <Form />
            </div>
            <div
                className="h-full md:w-3/6"
                style={{ backgroundColor: "#424242" }}
            ></div>
        </div>
    );
}
