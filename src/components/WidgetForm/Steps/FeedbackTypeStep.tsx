import { feedbackTypes, feedbackType } from '../index';
import { CloseButton } from "../../../components/CloseButton";

interface FeedbackStepTypeProps {
    onFeedbackTypeChanged: (type: feedbackType) => void;
};

function FeedbackTypeStep({ onFeedbackTypeChanged }: FeedbackStepTypeProps) {
    return (
        <>
            <header>
                <span className="text-xl leading-6">Deixe seu feedback!</span>
                <CloseButton />
            </header>
            <div className="flex py-8 gap-2 w-full">
                {Object.entries(feedbackTypes).map(([key, value]) => {
                    return (
                        <button
                            className="bg-zinc-800 rounded-lg py-5 w-24 flex-1 flex flex-col items-center border-2 border-transparent hover:border-brand-500 focus:border-brand-500 focus:outline-none"
                            type="button"
                            key={key}
                            onClick={() => onFeedbackTypeChanged(key as feedbackType)}
                        >
                            <img src={ value.image.source } alt={ value.image.alt } />
                            <span>{value.title}</span>
                        </button>
                    );
                })}
            </div>
        </>
    );
};

export default FeedbackTypeStep;