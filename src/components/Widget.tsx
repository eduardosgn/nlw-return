import { ChatTeardropDots } from 'phosphor-react';
import { Popover } from '@headlessui/react';
import { WidgetForm } from './WidgetForm';

export default function Widget() {
    return (
        <Popover className='absolute bottom-5 right-5 md:bottom-10 md:right-10 flex flex-col items-end'>
            <Popover.Panel>
                <WidgetForm />
            </Popover.Panel>

            <Popover.Button className='bg-brand-500 rounded-full p-3 text-white flex items-center group'>
                <ChatTeardropDots className='w-10 h-10' />

                <span className='max-w-0 overflow-hidden group-hover:max-w-xl transition-all duration-700 ease-in-out font-bold'>
                    <span className='pl-2'></span>
                    Feedback
                    <span className='pr-2'></span>
                </span>
            </Popover.Button>
        </Popover>
    );
};