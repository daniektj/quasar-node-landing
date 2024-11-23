export const Footer = () => {
    return (
        <>
            <img src="/images/bg-footer-top.png" className='size-auto mt-6 md:mt-[-64px]' />
            <div className="overflow-hidden relative w-full flex items-center justify-center bg-gradient-to-b from-[#181A2B] to-[#090b0c] h-[104px] border-t-2 border-[#282C4D] max-w-[1280px] mx-auto rounded-2xl mb-8">
                <div className="bg-[radial-gradient(50%_50%_at_50%_50%,#1E2537_0%,rgba(24,26,32,0)_100%)] w-[400px] h-[200px] absolute top-[-120px] left-10" />
                <div className="bg-[radial-gradient(50%_50%_at_50%_50%,#1E2537_0%,rgba(24,26,32,0)_100%)] w-[400px] h-[200px] absolute top-[-120px] right-10" />
                <div className="bg-[radial-gradient(50%_50%_at_50%_50%,#1E2537_0%,rgba(24,26,32,0)_100%)] w-[400px] h-[200px] absolute bottom-[-140px]" />
                <div className="opacity-90 w-full bg-[url('/images/bg-footer-dots.png')] absolute h-full" />
                <img src="/images/logo-quasar.svg" alt="logo quasar node" className='h-8  drop-shadow-lg' />
            </div>
        </>
    )
}



