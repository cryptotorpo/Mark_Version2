import { FaArrowRight } from "react-icons/fa";

const advantage_data = [
    {imgSrc: "./img/blog1.jpg", title: "Bitcoin ETF will drive 165% BTC price gain in 2024 — Standard Chartered", content: "Bitcoin supply shock tactics give way to ETF hype in Standard Chartered’s new $100,000 BTC price..."}, 
    {imgSrc: "./img/blog2.jpg", title: "Bitcoin metric that ‘looks into future’ eyes $48K BTC price around ETF", content: "Bitcoin ETF approvals may have key timing as the Ichimoku Cloud demands the BTC price keep..."}, 
    {imgSrc: "./img/blog3.jpg", title: "‘Enjoy sub-$40K Bitcoin’ — PlanB stresses $100K average BTC price from 2024", content: "Bitcoin is in its “pre-bull market” phase, and the days of BTC price trading at current..."}, 
];

export default function News() {
    return (
      <div id="functions" className="relative pb-24 overflow-hidden sm:pb-32">
        <div className="px-6 mx-auto max-w-7xl lg:px-8">
          <div className="grid grid-cols-1 mx-auto gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none">
            <div className="lg:pr-8 lg:pt-4">
              <div className="flex flex-col items-center gap-4 text-left text-white">
                    <h2 className="text-base font-semibold leading-7 text-[#01EBC0]">Blog</h2>
                    <p className="text-3xl font-bold tracking-tight sm:text-4xl">Our Latest News</p>
              </div>
            </div>
            <div className="flex w-full">
              <div className="grid w-full grid-cols-1 gap-5 text-white sm:grid-cols-3">
                {
                    advantage_data.map((item) => (
                        <div className="relative rounded-xl flex flex-col gap-5 p-10 font-medium text-left bg-[#01EBC0] bg-opacity-10">
                            <img src={item.imgSrc} className="w-full h-40 rounded-md shadow-md"></img>
                            <p className="text-2xl h-[120px] hover:text-[#01EBC0] cursor-pointer">{item.title}</p>
                            <div className="text-md">{item.content}</div>
                            <div className="hover:translate-y-[-10px] transition-transform duration-700 ease-in-out cursor-pointer absolute bottom-2 p-3 rounded-full right-2 border border-[#01EBC0]"><FaArrowRight className="w-5 h-5 text-white"/></div>
                        </div>
                    ))
                }
              </div>
            </div>
          </div>        
        </div>
      </div>
    )
}
