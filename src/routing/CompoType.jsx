import React from "react";
import { Outlet } from "react-router-dom";

export default function CompoType() {
    return (
        <div>

            <h2>Component Types</h2>

            <Outlet />
        </div>
    );
}