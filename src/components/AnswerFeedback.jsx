const AnswerFeedback = ({ options, correctAnswer, userAnswer }) => {
    return (
        <div>
            {options.map((option, index) => {
                // Determine if the current option is the one the user selected
                const isUserAnswer = userAnswer === index;
                // Determine if the current option is the correct answer
                const isCorrectAnswer = correctAnswer === index;
                // Determine if the current option i the user's answer and it's incorrect
                const isWrongAnswer = isUserAnswer && !isCorrectAnswer;

                return (
                    <div
                        key={index}
                        // Apply inline styles to the option div
                        // based on its correctness and user selection
                        style={{
                            // Set background color based on whether it's the correct answer, a wrong user answer, or neither.
                            backgroundColor: isCorrectAnswer
                                ? "lightgreen"
                                : isWrongAnswer
                                    ? "lightcoral"
                                    : "transparent",
                            // Set text color for wrong user answers
                            color: isWrongAnswer ? "darkred" : "inherit",
                            // Add padding around the option text
                            padding: "0.5rem 1rem",
                            borderRadius: "8px",
                            marginBottom: "0.5rem",
                            border: isUserAnswer ? "1px solid lightblue" : "1px solid darkgray",
                            whiteSpace: "pre-wrap"
                        }}
                    >
                        {option}
                        {/* Display a checkmark if it's the correct answer. */}
                        {isCorrectAnswer ? "✅" : ""}{" "}
                        {/* Display an 'X' if it's a wrong user answer. */}
                        {isWrongAnswer ? "❌" : ""}
                    </div>
                )
            })}
        </div>
    )
}

export default AnswerFeedback;