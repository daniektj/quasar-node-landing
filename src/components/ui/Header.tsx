
export const Header = () => {
  return (
    <div className='w-full flex justify-between items-center'>
        <a href="#"><img src="/images/logo-quasar.svg" alt="logo quasar node" /></a>
        <div className='flex items-center gap-8'>
          <a href="#" className="hover:text-[#0D97DF]">Contact Us</a>
          <a href="https://discord.gg/8aUd3ykG" className="bg-white text-black px-4 py-1 rounded-md">Discord</a>
        </div>
    </div>
  )
}
