import React from "react";
import { Outlet } from "react-router-dom";

export default function Hooks() {
    return (
        <div>
            <h2>Hooks</h2>
            <Outlet />
        </div>
    );
}