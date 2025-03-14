import { Button } from "@/components/ui/button"
import { SectionHeader } from "@/components/ui/section-header"
import { BulletPoint } from "@/components/ui/bullet-point"
import { UtilityCard } from "@/components/ui/utility-card"
import Link from "next/link"
import CustomButton from "./CustomButton"

export function UtilitySection() {
  return (
    // <section className="w-full max-w-sm mx-auto px-4 sm:px-6 py-12 sm:py-16 space-y-8 sm:space-y-12">
    //   {/* Why Sanita Section */}
    //   <div className="mb-12 sm:mb-16 text-center animate-fadeIn">
    //       <h2 className="mb-4 text-4xl sm:text-5xl font-bold">
    //         <span className="text-white">ANITA</span>
    //         <br />
    //         <span className="text-primary">FUELING THE AI REVOLUTION IN CRYPTO</span>
    //       </h2>
    //       <p className="mx-auto max-w-2xl text-base sm:text-lg text-gray-400">
    //         The core if ANITA AI - Powering Rewards, Governance, and exclusive access.
    //       </p>
    //     </div>
    //   <div className="space-y-4 sm:space-y-6 animate-fadeIn">
    //     <SectionHeader>Why Sanita?</SectionHeader>
    //     <div className="space-y-3 sm:space-y-4 px-2">
    //       <BulletPoint>Decentralizing the influencer ecosystem</BulletPoint>
    //       <BulletPoint>Rewarding the community</BulletPoint>
    //       <BulletPoint>Driving AI-powered crypto innovation</BulletPoint>
    //     </div>
    //   </div>

    //   {/* Utility Section */}
    //   <div className="space-y-4 sm:space-y-6 animate-slideUp">
    //     <SectionHeader>Utility at a glance</SectionHeader>
    //     <div className="space-y-4">
    //       <UtilityCard title="Exclusive Access" description="AI tools, premium insights, and updates" />
    //       <UtilityCard title="Rewards & Airdrops" description="Earn perks for engagement" />
    //       <UtilityCard title="Governance" description="Vote on future developments" />
    //       <UtilityCard
    //         title="Value for Holders"
    //         description="Buybacks & Burns – 30% of revenue fuels buybacks, reducing supply and boosting value. Some tokens are burned, others fuel airdrops"
    //       />
    //     </div>

    //     <Button className="w-full">GET $ANITA</Button>
    //   </div>
    // </section>
    <section className="w-full h-auto">

      <div className="w-full flex justify-center items-center">

        <div className="mb-12 sm:mb-16 text-center animate-fadeIn">
          <h2 className="mb-4 text-4xl sm:text-5xl font-bold">
            <span className="text-primary">$ANITA</span>
            <br />
            <span className="text-white">FUELING THE AI<br />REVOLUTION IN CRYPTO</span>
          </h2>
          <p className="mx-4 max-w-2xl text-base sm:text-lg text-gray-400">
            The core of ANITA AI - Powering Rewards, Governance, and exclusive access.

          </p>

        </div>
      </div>


      <div className="flex flex-col lg:flex-row flex-1">
        <div className="w-full lg:w-1/2  p-4"><div className="space-y-4 sm:space-y-6 animate-slideUp">
          <SectionHeader>Utility at a glance</SectionHeader>
          <div className="space-y-4">
            <UtilityCard title="Exclusive Access" description="AI tools, premium insights, and updates" />
            <UtilityCard title="Rewards & Airdrops" description="Earn perks for engagement" />
            <UtilityCard title="Governance" description="Vote on future developments" />

          </div>


        </div></div>
        <div className="w-full lg:w-1/2 p-4"><div className="space-y-4 sm:space-y-6 animate-slideUp">
          <SectionHeader>Why $anita?</SectionHeader>
          <div className="space-y-4">
            <UtilityCard
              title="Influencer Decentralization"
              description="Decentralizing the influencer ecosystem"
            />

            <UtilityCard
              title="AI & Crypto Innovation"
              description="Driving AI-powered crypto innovation"
            />

            <UtilityCard
              title="Value for Holders"
              description="Buybacks & Burns – 30% of revenue fuels buybacks, reducing supply and boosting value. Some tokens are burned, others fuel airdrops"
            />
          </div>


        </div>
        </div>
      </div>
      {/* <Link href="https://voice.itsanita.com" target="_blank" passHref>
      <Button className="w-[286px] h-[73px] font-fielder text-[20px]/[60px]">GET $ANITA</Button>
      </Link>
      */}
      {/* <Link href="https://voice.itsanita.com" target="_blank" passHref legacyBehavior>
        <a target="_blank">
          <button className='font-fielder capitalize lg:text-[20px] text-[12px] font-bold text-primary border-primary border-2 rounded-[8px] lg:h-[73px] md:h-[55px] md:px-5  px-2'
            style={{
              background: "linear-gradient(135deg,#0d1407 50%,#6AB131)"
            }}
          >Get $Anita</button>
          </a>
        </Link> */}
        {/* <CustomButton link="https://voice.itsanita.com">Get $Anita</CustomButton> */}



    </section>


  )
}

