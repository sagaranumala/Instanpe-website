const Location = () => {
  return (
    <div className="grid grid-cols-2 gap-2  bg-[#F6F6F6] rounded-xl mr-[5rem] ml-[5rem] p-4">
        <div>
            <img src='https://www.pngkey.com/png/detail/247-2471442_google-maps-marker-grey.png' alt='googleMapsIcon' width={50} height={50}/>
                <p>1-98/8/9/A, Capital Pk Rd, Cyber Hills Colony, VIP Hills, Silicon Valley,<br/> Madhapur, Hyderabad, Telangana 500081</p>
            </div>
        <div>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.248370339927!2d78.38611279999999!3d17.447822500000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91a4be70cd0f%3A0xc1edf7c8790ef29!2sMeera%20One!5e0!3m2!1sen!2sin!4v1716550707564!5m2!1sen!2sin"
                width="600"
                height="300"
                style={{ border: 0, borderRadius: 25 }}
                loading="lazy"
            ></iframe>
        </div>
      
    </div>
  );
};

export default Location;
