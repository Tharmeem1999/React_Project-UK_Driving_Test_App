const ExplanationText = ({ text }) => {
    return (
        <p
            style={{
                marginTop: "1rem",
                fontStyle: "italic",
                color: "gray"
            }}
        >
            Explanation: {text}
        </p>
    );
};

export default ExplanationText;