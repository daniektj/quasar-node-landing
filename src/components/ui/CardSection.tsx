
interface CardSection {
    title: string;
    description?: string;
}

const CardDesc = ({ title, description }: CardSection) => {
    return (
        <div className='flex flex-row items-center justify-center gap-5 rounded-2xl h-[200px] border border-[#083259] mt-16'>
            <div className="flex flex-col">
                <span className="text-[52px] text-center font-semibold bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white via-neutral-400 to-gray-500 bg-clip-text text-transparent">
                    {title}
                </span>
                <span className="text-[#0D97DF] text-center">{description}</span>
            </div>
        </div>
    );
};

export default CardDesc