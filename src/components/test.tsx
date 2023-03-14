import speaking from "../assets/speaking.svg"
import writing from "../assets/writing.svg"
import reading from "../assets/reading.svg"
import listening from "../assets/listening.svg"

export default function Skills() {
    return (
        <div id="skills">
            <div className="py-[40px]">
                <h1 className="text-center text-[24px] sm:text-[30px] font-semibold mb-[32px]">
                    Skills
                </h1>

                <ul className="flex flex-col sm:flex-row sm:flex-wrap gap-[21px] sm:gap-[30px] w-full">
                    <li className="relative bg-[#F5F5F5] pt-[8px] pb-[45px] px-[13px] sm:px-[20px] rounded-[5px] w-full sm:w-[calc(50%-15px)] sm:h-[600px]">
                        <img src={speaking} alt="speaking" className="w-[213px] h-[213px] mx-auto"/>
                        <h2 className="mt-[30px] mb-[15px] text-[#263238] text-[18px] font-semibold">
                            Speaking
                        </h2>
                        <p className="text-[#8F95A5] text-[13px] sm:text-[12px]">
                            Improve your English skills and confidence. Live classes and interactive lessons online. 20% extra free for a limited time only

                        </p>
                        <br/>
                        <p className="text-[#8F95A5] text-[13px] mb-[25px]">
                            Learn English online and improve your skills through our high-quality courses and resources – all designed for adult language learners

                        </p>
                        <button className="absolute bottom-[45px] w-[178px] sm:w-[200px] py-[14px] text-[14px] font-[500] text-white rounded-[5px] bg-[#263238]">
                            Learn more
                        </button>
                    </li>

                    <li className="relative bg-[#F5F5F5] pt-[8px] pb-[45px] px-[13px] sm:px-[20px] rounded-[5px] w-full sm:w-[calc(50%-15px)] sm:h-[600px]">
                        <img src={writing} alt="writing" className="w-[213px] h-[213px] mx-auto"/>
                        <h2 className="mt-[30px] mb-[15px] text-[#263238] text-[18px] font-semibold">
                            Writing
                        </h2>
                        <p className="text-[#8F95A5] text-[13px] mb-[25px]">
                            One of the most important and extensive areas of natural science, the science that studies substances, also their composition 

                        </p>
                        <button className="absolute bottom-[45px] w-[178px] sm:w-[200px] py-[14px] text-[14px] font-[500] text-white rounded-[5px] bg-[#263238]">
                            Learn more
                        </button>
                    </li>

                    <li className="relative bg-[#F5F5F5] pt-[8px] pb-[45px] px-[13px] sm:px-[20px] rounded-[5px] w-full sm:w-[calc(50%-15px)] sm:h-[600px]">
                        <img src={reading} alt="reading" className="w-[213px] h-[213px] mx-auto"/>
                        <h2 className="mt-[30px] mb-[15px] text-[#263238] text-[18px] font-semibold">
                            Reading
                        </h2>
                        <p className="text-[#8F95A5] text-[13px] mb-[25px]">
                        perception and response actions of the user resulting from the use and or up coming use of the product, system or service
                        </p>
                        <button className="absolute bottom-[45px] w-[178px] sm:w-[200px] py-[14px] text-[14px] font-[500] text-white rounded-[5px] bg-[#263238]">
                            Learn more
                        </button>
                    </li>
                    
                    <li className="relative bg-[#F5F5F5] pt-[8px] pb-[45px] px-[13px] sm:px-[20px] rounded-[5px] w-full sm:w-[calc(50%-15px)] sm:h-[600px]">
                        <img src={listening} alt="listening" className="w-[213px] h-[213px] mx-auto"/>
                        <h2 className="mt-[30px] mb-[15px] text-[#263238] text-[18px] font-semibold">
                            Listening
                        </h2>
                        <p className="text-[#8F95A5] text-[13px] mb-[25px]">
                            Here you can find activities to practise your listening skills. Listening will help you to improve your understanding
                        </p>
                        <button className="absolute bottom-[45px] w-[178px] sm:w-[200px] py-[14px] text-[14px] font-[500] text-white rounded-[5px] bg-[#263238]">
                            Learn more
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    )
}