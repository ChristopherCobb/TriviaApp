import React, { Fragment } from 'react';
// Types
import { AnswerObject } from '../App';
// Styles
import { Wrapper, ButtonWrapper } from './QuestionCard.styles';

type Props = {
  question: string;
  answers: string[];
  callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
  userAnswer: AnswerObject | undefined;
  questionNr: number;
  totalQuestions: number;
};

const QuestionCard: React.FC<Props> = ({
  question,
  answers,
  callback,
  userAnswer,
  questionNr,
  totalQuestions,
}) => (
  <Wrapper>
<Fragment>
    <p className='number'>
      Question: {questionNr} / {totalQuestions}
    </p>
    <p dangerouslySetInnerHTML={{ __html: question }} />
    <div style={{ marginBottom:20}}>
      {answers.map((answer) => (
        <ButtonWrapper

          correct={userAnswer?.correctAnswer === answer}
          userClicked={userAnswer?.answer === answer}
        >
        <div key={answer}>
          <button disabled={userAnswer ? true : false} value={answer} onClick={callback}>
            <span dangerouslySetInnerHTML={{ __html: answer }} />
          </button></div>
         </ButtonWrapper>
      ))}
    </div>
    </Fragment>
</Wrapper> )
;

export default QuestionCard;