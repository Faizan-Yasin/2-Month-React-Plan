import React from "react";
import { useTodo } from "../hooks/useTodo";

const DebugBanner = () => {
    const { state } = useTodo();

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
            Last Action: {state.lastAction ?? "None"}
        </div>
    );
};

export default DebugBanner;