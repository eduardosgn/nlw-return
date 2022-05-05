import { useState } from "react";
import bugImage from '../../assets/bug.svg';
import ideaImage from '../../assets/idea.svg';
import otherImage from '../../assets/other.svg';

import FeedbackTypeStep from "./Steps/FeedbackTypeStep";
import FeedbackContentStep from "./Steps/FeedbackContentStep";
import FeedbackSuccessStep from "./Steps/FeedbackSuccessStep";

export const feedbackTypes = {
    BUG: {
        title: 'Problema',
        image: {
            source: bugImage,
            alt: 'Imagem de um Inseto'
        }
    },
    IDEA: {
        title: 'Ideia',
        image: {
            source: ideaImage,
            alt: 'Imagem de uma lâmpada'
        }
    },
    OTHER: {
        title: 'Outro',
        image: {
            source: otherImage,
            alt: 'Imagem de um pensamento numa nuvem'
        }
    }
};

export type feedbackType = keyof typeof feedbackTypes;

export function WidgetForm() {
    const [feedbackType, setFeedbackType] = useState<feedbackType | null>(null);
    const [feedbackSent, setFeedbackSent] = useState(false);

    function handleRestartFeedback() {
        setFeedbackSent(false);
        setFeedbackType(null);
    };

    return (
        <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2.5rem)] md:w-auto">
            { feedbackSent ? (
                <FeedbackSuccessStep onFeedbackRestartRequested={handleRestartFeedback} />
            ) : (
                <>
                    {!feedbackType ? (
                        <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType} />
                    ) : (
                        <FeedbackContentStep 
                        feedbackType={feedbackType} 
                        onFeedbackRestartRequested={handleRestartFeedback} 
                        onFeedbackSent={() => setFeedbackSent(true)} 
                        />
                    )}
                </>
            )}

            {/* // <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType} /> */}

            <footer className="text-xs text-neutral-400">
                Criado por: <a className="underline underline-offset-2" href="https://github.com/eduardosgn">Eduardo Nascimento</a>
            </footer>
        </div>
    );
};