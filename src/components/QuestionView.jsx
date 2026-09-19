import QuestionHeader from "./QuestionHeader";
import { Card } from "./ui/Card";
import QuestionText from "./QuestionText";
import AnswerOptions from "./AnswerOptions";
import MediaDisplay from "./MediaDisplay";
import NavigationControls from "./NavigationControls";


const QuestionView = ({
    q,
    currentQuestion,
    totalQuestions,
    selectAnswer,
    timeLeft,
    dispatch,
}) => {
    const onAnswer = (answerIndex) => {
        dispatch({ type: "ANSWER", payload: answerIndex });
    };

    return (
        <Card>
            <QuestionHeader
                currentQuestion={currentQuestion}
                totalQuestions={totalQuestions}
                timeLeft={timeLeft}
            />
            <div style={{ display: "flex", gap: "1rem", flexDirection: "row" }}>
                <div style={{ flex: 1 }}>
                    <QuestionText
                        text={q.question}
                    />
                    <AnswerOptions
                        options={q.options}
                        selectedIndex={selectAnswer}
                        onSelect={onAnswer}
                    />
                </div>
            </div>
        </Card>
    );
};

export default QuestionView;