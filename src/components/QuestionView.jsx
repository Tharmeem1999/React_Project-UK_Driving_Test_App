import QuestionHeader from "./QuestionHeader";
import { Card } from "./ui/Card";

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
        </Card>
    );
};

export default QuestionView;