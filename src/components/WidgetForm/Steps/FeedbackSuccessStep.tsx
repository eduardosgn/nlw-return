import { CloseButton } from "../../CloseButton";

interface FeedbackSuccessStepProps {
    onFeedbackRestartRequested: () => void;
};

function FeedbackSuccessStep({ onFeedbackRestartRequested }: FeedbackSuccessStepProps) {
    return (
        <>
            <header>
                <CloseButton />
            </header>

            <div className="flex flex-col items-center py-10 w-[304px]">
                <p className="text-xl">Agradeço o seu feedback!!</p>
            </div>

            <button
                type="button"
                onClick={onFeedbackRestartRequested}
                className="py-2 px-6 mb-6 bg-zinc-800 rounded-md border-transparent text-sm leading-6 hover:bg-zinc-600 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500"
            >
                Quero enviar outro
            </button>
        </>
    );
};

export default FeedbackSuccessStep;