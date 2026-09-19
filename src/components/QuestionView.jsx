import QuestionHeader from "./QuestionHeader";
import { Card } from "./ui/Card";
import QuestionText from "./QuestionText";
import AnswerOption from "./AnswerOptions";
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
                </div>
            </div>
        </Card>
    );
};

export default QuestionView;