import "./Button.css";

export const Button = ({ children, selected, onClick, disabled, variant }) => {
    // Combine base class with variant and selected/outine classes
    const className = `button ${variant || (
        selected ? "selected" : "outline")
        }`;
    return (
        <button
            className={className}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    )
}