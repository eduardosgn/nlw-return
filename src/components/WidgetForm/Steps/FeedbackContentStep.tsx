import { ArrowLeft } from "phosphor-react";
import { FormEvent, useState } from "react";
import { feedbackType, feedbackTypes } from "..";
import { CloseButton } from "../../CloseButton";
import { Loading } from "../../Loading";
import { ScreenshotButton } from "../ScreenshotButton";

interface FeedbackContentStepProps {
    feedbackType: feedbackType;
    onFeedbackRestartRequested: () => void;
    onFeedbackSent: () => void;
};

function FeedbackContentStep({ feedbackType, onFeedbackRestartRequested, onFeedbackSent }: FeedbackContentStepProps) {
    const [screenshot, setScreenshot] = useState<string | null>(null);
    const [comment, setComment] = useState('');

    const feedbackTypeInfo = feedbackTypes[feedbackType];

    function handleSumbitFeedback(event: FormEvent) {
        event.preventDefault();
        
        console.log({
            screenshot,
            comment
        });

        onFeedbackSent();
    };

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
            <form className="my-4 w-full" onSubmit={handleSumbitFeedback}>
                <textarea
                    placeholder="Conte com detalhes o que está acontecendo..."
                    className="min-w-[304px] w-full min-h-[112px] text-sm placeholder-zinc-400 text-zinc-100 border-zinc-600 bg-transparent rounded-md border-2 focus:border-brand-500 hover:border-brand-500 focus:outline-none resize-none scrollbar scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin"
                    onChange={event => setComment(event.target.value)}
                />

                <footer className="flex gap-2 mt-2">
                    <ScreenshotButton
                        screenshot={screenshot}
                        onScreenshotTook={setScreenshot}
                    />

                    <button
                        type="submit"
                        disabled={comment.length === 0}
                        className="p-2 bg-brand-500 rounded-md border-transparent flex-1 flex justify-center items-center text-sm hover:bg-brand-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 transition-colors disabled:opacity-60 disabled:hover:bg-brand-500"
                    >
                        Enviar
                    </button>
                </footer>
            </form>
        </>
    );
};

export default FeedbackContentStep;