import CardBasic from '@/components/ui/CardBasic'
import { Header } from '@/components/ui/Header'

function HomePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Header />
      <div className='w-full mt-16 grid grid-cols-1 md:grid-cols-3 gap-4 justify-center items-center'>
        <div className='col-span-2'>
          <h1 className='text-6xl font-bold mb-4'>Unleash the power of Solana with Quasar Node</h1>
          <span className='text-xl text-[#0D97DF]'>Connect to our blazing-fast Solana RPC nodes and experience instant transactions across multiple locations.</span>
        </div>
        <img src="/images/hero-image.svg" alt="solana blocks" className='col-span-1 w-full' />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
        <CardBasic
          title="Velocidad de 16 Ms"
          description="Seamlessly connect with our robust Solana GRPC nodes"
          imageUrl="images/card-ms.svg"
          imageAlt="ImageAlt"
        />
        <CardBasic
          title="Escalabilidad"
          description="Infraestructura escalable para tus necesidades Seamlessly connect with our"
          imageUrl="images/card-geyser.svg"
          imageAlt="Escalabilidad"
        />
        <CardBasic
          title="Seguridad"
          description="Máxima protección para tus datos y transacciones Seamlessly connect with our"
          imageUrl="images/card-servers.svg"
          imageAlt="Seguridad"
        />
        <CardBasic
          title="Soporte 24/7"
          description="Asistencia técnica disponible en todo momento"
          imageUrl="images/card-limits.svg"
          imageAlt="Soporte"
        />
      </div>
    </div>
  )
}

export default HomePage