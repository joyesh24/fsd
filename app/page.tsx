import Image from 'next/image'

export default function Home() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden font-bengali">
      {/* Background with higher opacity */}
      <div className="absolute inset-0">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4731c8ca40efbad4f80d51a18f548c11-zNxtAENniTJLjHLmHbXe6GKFIfgU2U.png"
          alt="Background"
          fill
          priority
          className="opacity-40 object-cover"
          sizes="100vw"
        />
      </div>
      
      {/* Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen p-4">
        <h1 
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl
            font-black text-center leading-tight"
          style={{
            color: '#FFD700',
            textShadow: `
              -3px -3px 0 #000,
              3px -3px 0 #000,
              -3px 3px 0 #000,
              3px 3px 0 #000,
              5px 5px 15px rgba(0,0,0,0.5)
            `,
            letterSpacing: '0.02em'
          }}
        >
          চলো দেশ বদলায়
        </h1>
      </div>
    </main>
  )
}

