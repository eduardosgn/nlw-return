import { ArrowLeft } from "phosphor-react";
import { feedbackType, feedbackTypes } from "..";
import { CloseButton } from "../../CloseButton";

interface FeedbackContentStepProps {
    feedbackType: feedbackType;
    onFeedbackRestartRequested: () => void;
};

function FeedbackContentStep({ feedbackType, onFeedbackRestartRequested }: FeedbackContentStepProps) {
    const feedbackTypeInfo = feedbackTypes[feedbackType]

    return (
        <>
            <header>
                <button 
                    className="top-5 left-5 absolute text-zinc-400 hover:text-zinc-100" 
                    onClick={onFeedbackRestartRequested}
                >
                    <ArrowLeft weight="bold" className="h-4 w-4 transition-all ease-in-out duration-300 hover:-translate-x-1" />
                </button>
                <span className="text-xl leading-6 flex items-center gap-2">
                    <img src={feedbackTypeInfo.image.source} alt={feedbackTypeInfo.image.alt} className="w-6 h-6" />
                    { feedbackTypeInfo.title }
                </span>
                <CloseButton />
            </header>
            <form className="my-4 w-full">
                <textarea
                    placeholder="Digite aqui o seu feedback..."
                    className="min-w-[304px] w-full min-h-[112px] text-sm placeholder-zinc-400 text-zinc-100 border-zinc-600 bg-transparent rounded-md border-2 focus:border-brand-500 hover:border-brand-500 focus:outline-none resize-none scrollbar scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin" 
                >

                </textarea>
            </form>
        </>
    );
};

export default FeedbackContentStep;