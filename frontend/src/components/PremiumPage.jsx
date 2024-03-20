import React, { useContext } from 'react'
import PricingCard from './PricingCard'
import Context from './../context/Context'

function PremiumPage() {
  const {res,changeUserRole}=useContext(Context)
 
  return (
    <div className="h-full w-full  ">
    <div className="lg:h-full bg-primary w-full">
        <div className="max-w-7xl  mx-auto  sm:p-4 ">
            <div className="max-w-5xl mx-auto text-center text-white tracking-widest pb-10 lg:pb-20">
                <p className="pb-4 text-xl text-black">PRICING</p>
                <h1 className="text-3xl sm:text-5xl font-black">The right price for you, whoever you are</h1>
                <p className="text-xl sm:text-2xl font-light text-gray-800 px-10 py-6">Roi Revivo has been the industry's standard dummy text since 1925, when an unknown printer took a galley of type and scrambled.</p>
            </div>
            

            <div className="flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-0 lg:mt-4">
             <PricingCard price={"30"} kind={"Hobby"} packegeBenfits={['for only one user','ai do shit ' ,"take out your garbage"]} onClickFunc={changeUserRole} />
             <PricingCard price={"50"} kind={"pro"} packegeBenfits={['for only one user','ai do shit ' ,"take out your garbage"]} onClickFunc={changeUserRole} />
             <PricingCard price={"100"} kind={"company"} packegeBenfits={['unlimited users','ai do shit ' ,"take out your garbage"]   }  onClickFunc={changeUserRole}/>
                
                {/* Add more pricing cards */}
            </div>
        </div>
    </div>
</div>
  )
}

export default PremiumPage