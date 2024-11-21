interface QuestionProps {
    question: string;
    answer: string;
}

const Questions = ({ question, answer }: QuestionProps) => {
    return (
            <details open={false} className="group py-1 text-lg border-b-[1px] border-[#25282D] w-full">
                <summary className="flex cursor-pointer flex-row items-center justify-between py-1 font-semibold text-white marker:[font-size:0px]">
                    {question}
                    <svg className="h-6 w-6 rotate-0 transform text-white group-open:rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"></path>
                    </svg>
                </summary>
                <p className="text-[#777F8E]">{answer}</p>
            </details>
    );
};

export default Questions