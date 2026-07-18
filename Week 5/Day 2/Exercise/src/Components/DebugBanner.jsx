import React from "react";
import { useSelector, useDispatch } from 'react-redux'

const DebugBanner = () => {

    const lastAction = useSelector((state) => state.todo.lastAction)

    if (!import.meta.env.DEV) return null;

    return (
        <div
            style={{
                position: "fixed",
                bottom: 0,
                left: 0,
                width: "100%",
                padding: "10px",
                background: "#222",
                color: "#fff",
                textAlign: "center",
                fontWeight: "bold",
                zIndex: 9999,
            }}
        >
            Last Action: {lastAction ?? "None"}
        </div>
    );
};

export default DebugBanner;