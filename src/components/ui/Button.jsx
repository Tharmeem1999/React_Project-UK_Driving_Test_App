import "./Button.css";

export const Button = ({ children, selected, onClick }) => {
    // Combine base class with variant and selected/outine classes
    const className = `button ${selected ? "selected" : "outline"}`;
    return (
        <button
            className={className}
            onClick={onClick}
        >
            {children}
        </button>
    )
}