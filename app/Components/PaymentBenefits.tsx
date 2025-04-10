
//updated


const PaymentBenefits = () => {
    const paymentBenefits = [
      {
        id: 1,
        image: "/Layer_1.png",
        heading: "Upgrade Digital Payments Infrastructure",
        content: "Build and facilitate efficient straight-through processing with no manual intervention in the Payment Lifecycle",
      },
      {
        id: 2,
        image: "/Layer_2.png",
        heading: "Update Messaging System",
        content: "Adopt ISO 20022 payments messaging standards to streamline financial communications and boost interoperability between banks world over",
      },
      {
        id: 3,
        image: "/Layer_3.png",
        heading: "Reduce transaction processing costs",
        content: "Consolidate and manage payment rails, upgrade to cloud-based infrastructure & use intelligent routing to select the most cost-effective path for transactions",
      },
      {
        id: 4,
        image: "/Layer_4.png",
        heading: "Reduce Payment Processing time",
        content: "Improve bank connectivity with modern infrastructure & adapt new payment schemes to improve the accuracy & speed of payments processing",
      },
    ];
  
    return (
      <div className="sm:my-[70px]  flex flex-col items-center my-[30px]">
        <div className="text-center sm:w-[70%] sm:space-y-5 w-full space-y-3 sm:px-0 px-1">
          <h2 className="font-extrabold sm:text-[32px] sm:leading-[40px] text-[28px] leading-[30px] text-[#4F2D83]">Modernize Your Payments Infrastructure</h2>
          <p className="font-normal textfont text-[#000000]">Leverage the advancements in modern payments infrastructure to hasten adoption of emerging payment schemes and dynamic business needs</p>
        </div>
        <div className="flex flex-wrap justify-center items-center sm:gap-4 gap-4 sm:mt-[70px]  mt-[50px]">
          {paymentBenefits.map((benefit) => (
            <div key={benefit.id} className=" flex flex-col rounded-lg sm:gap-y-[18px] gap-y-[12px] py-[20px] sm:py-[35px] px-4 bg-[#f8f8f89f] border w-[305px]">
              <div className="flex justify-center ">
                <img className="sm:w-[75px] sm:h-[80px] w-[55px] h-[60px]" src={benefit.image} alt={benefit.heading} />
              </div>
              <div className="sm:h-[44px] text-center font-[600] textfont text-[#2D834F] ">{benefit.heading}</div>
              <div className="sm:h-[132px]  text-center font-normal  sm:text-[16px] text-[14px] ">{benefit.content}</div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default PaymentBenefits;
  