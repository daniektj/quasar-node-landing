import CardBasic from '@/components/ui/CardBasic'
import CardDesc from '@/components/ui/CardDesc'
import { Footer } from '@/components/ui/Footer'
import { Header } from '@/components/ui/Header'
import Questions from '@/components/ui/Questions'

function HomePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Header />
      <div className='w-full mt-20 grid grid-cols-1 md:grid-cols-3 gap-4 justify-center items-center'>
        <div className='col-span-2'>
          <h1 className='text-[32px] md:text-6xl font-bold mb-4'>Unleash the power of Solana with Quasar Node</h1>
          <span className='text-xl text-[#0D97DF]'>Connect to our blazing-fast Solana RPC nodes and experience instant transactions across multiple locations.</span>
        </div>
        <img src="/images/hero-image.svg" alt="solana blocks" className='col-span-1 w-[60%] md:w-full mx-auto' />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-24">
        <CardBasic
          title="16 Ms Speed"
          description="Ultra-low 16ms latency for instant transactions on Solana."
          imageUrl="images/card-ms.svg"
          imageAlt="Speed"
        />
        <CardBasic
          title="Yellowstone Geyser"
          description="Explosive performance inspired by the power of Yellowstone geyser."
          imageUrl="images/card-geyser.svg"
          imageAlt="Scalability"
        />
        <CardBasic
          title="Multiple Locations"
          description="Servers in strategic locations for fast, global connections."
          imageUrl="images/card-servers.svg"
          imageAlt="Security"
        />
        <CardBasic
          title="Node Rate Limits"
          description="Quasar Node is configured to handle up to 1000 RPS and 500 TPS"
          imageUrl="images/card-limits.svg"
          imageAlt="Support"
        />
      </div>

      <section className='flex flex-col items-center justify-center mt-24'>
        <h2>Get ahead of the future with our exclusive presale</h2>
        <span className='span-body-description'>We are launching our presale to fund the acquisition of next-generation hardware that will allow us to offer you an even faster and more efficient service.</span>
        <a href="#" className='outline outline-4 outline-[#ffffff5b] button-basic mt-8 transition-all duration-200 hover:outline hover:outline-[#0D97DF] hover:outline-4'>Buy now</a>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mt-16'>

          <CardDesc
            title='Special initial cost'
            description='100 SOL for early access. This exclusive price guarantees you will be one of the few with priority on our servers.'
            imageUrl='/images/icon-rocket.svg'
            imageAlt='rocket'
          />
          <CardDesc
            title='Preferential monthly rate'
            description='$400 USD monthly rental. A lower rate than future users outside the presale will have.'
            imageUrl='/images/icon-vip.svg'
            imageAlt='vip'
          />
          <CardDesc
            title='Limited users'
            description='Exclusive capacity for less than 16 users. We guarantee a quality experience without saturation.'
            imageUrl='/images/icon-users.svg'
            imageAlt='vip'
          />
          <CardDesc
            title='Service delivery'
            description='Available 3 weeks after the presale ends. Everything ready for you to enjoy instant transactions from day one.'
            imageUrl='/images/icon-server.svg'
            imageAlt='vip'
          />
        </div>
      </section>


      <section className='flex flex-col items-center  mt-24 w-full'>
        <h2>FAQ</h2>
        <span className='span-body-description'>Get answers to your questions about our service, pre-sale, and exclusive benefits. We want you to make an informed decision with complete confidence.</span>

        <div className='w-full flex flex-col mt-16 gap-8'>

          <Questions
            question='Why is the pre-sale service exclusive?'
            answer='We limit initial users to ensure optimal performance and prioritize the experience of those who trust us from the beginning.'
          />
          <Questions
            question='What happens after the pre-sale?'
            answer='Once concluded, we will launch the service to the public with standard prices and expanded capacity.'
          />
          <Questions
            question='When can I use the service if I participate in the pre-sale?'
            answer='The nodes will be available 3 weeks after the pre-sale ends.'
          />
          <Questions
            question='What happens if the pre-sale does not reach the expected number of users?'
            answer='We guarantee service delivery within the established timeframe for all participants.'
          />
          <Questions
            question='What happens if the pre-sale does not reach the expected number of users?'
            answer='We guarantee service delivery within the established timeframe for all participants.'
          />

        </div>
      </section>


    </div>
  )
}

export default HomePage