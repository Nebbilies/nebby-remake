import Image from "next/image";
import {motion} from "framer-motion";
import AboutSection from "@/app/_components/AboutSection/AboutSection";

export default function Home() {
  return (
      <div className={'relative min-h-screen'}>
          <div
              className="fixed -z-10 opacity-10 inset-0 bg-cover bg-center grayscale"
              style={{ backgroundImage: 'url("/image/background/our-identity.gif")' }}
          />
          <div
              className="fixed inset-0 opacity-40"
              style={{
                  backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.15) 1.4px, transparent 1px)',
                  backgroundSize: '20px 20px'
              }}
          />
          <div className="relative h-screen items-center justify-center w-full bg-cover"
               style={{backgroundImage: 'url("/image/background/our-identity.gif")'}}>
              <div className="absolute w-full h-full bg-gradient-to-r from-black/90 from-25% via-black/75 via-50% to-transparent to-100% opacity-90 -z-0"></div>
              <div className="text-primary-content w-full h-full flex z-10 relative">
                  <div className={'w-1/2 flex flex-col justify-center items-center h-full'}>
                      <div className="max-w-xl">
                          <h1 className="mb-5 text-7xl font-bold">Hi, <span className={'text-accent'}>Nebby </span> です。</h1>
                          <h3 className="text-4xl font-bold mb-10">
                              I <span className={'text-accent'}>build</span> things for the web.
                          </h3>
                          <button className="btn btn-primary btn-xl">Get Started</button>
                      </div>
                  </div>
              </div>
          </div>
          <AboutSection/>
      </div>
  );
}
