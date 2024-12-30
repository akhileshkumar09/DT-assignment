

const Detail= () => {
  return (
      <div className="relative bg-white p-6 rounded-lg shadow-lg">
       
     
       
         {/* Left Section */}
        <div className=" grid grid-cols-1 lg:grid-cols-2 gap-6 ">
          <div className="mb-4  pb-2 flex flex-col gap-2">
            <h2 className=" font-semibold">
              Event: <span className="font-normal">Learning to Learn</span>
            </h2>
            <p className=" font-semibold">
              Date: <span className="font-normal">16th March 2022</span>
            </p>
            <p className="font-semibold">
              Time: <span className="font-normal">3:00 PM - 6:00 PM</span>
            </p>
            <p className="font-semibold flex mb-4">
              No. of students registered:{" "}
              <span className="font-normal ml-1">50 students</span>
              <div className="ml-2 flex -space-x-1">
                <img
                  className="w-6 h-6 rounded-full border"
                  src="https://s3-alpha-sig.figma.com/img/89ea/d5f3/b62530b3b9822b650b5e07c8ba095b98?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VFJWQV7sR9vQuKrQBcqBUhN2Rx-EWNAFnLf2FVNsDlqEsDVGumlC0~zSoAPo5J15AvEy20g2F1rErA3DG70tfb6mRWUV1fVId3n8MgSJDZlFn3J0eVOsrS7EN6sx8w0uLv4n3pn55nrN6qQWLVZn1PdCIMn9uFgOligl~0BesJVPqgJN4qUkZAYKUXQbeyEt5Pt4Gnrcaefhxyc8WiQ2UIWAO6JvsZ7m35UQdxghiw5f8m0jhbmKKBH-sQMAbWjaVqqg3o-d8N8rqsyjDlrMoAJDXu75isEdotROHA2Z-Slsbr1L~HXNnUGrm6NKJk8JiKyZRkroQKOYOXDW4KzL-A__"
                  alt="User 1"
                />
                <img
                  className="w-6 h-6 rounded-full border"
                  src="https://s3-alpha-sig.figma.com/img/71dd/4cc7/15e9956e16c4127064988848978f290f?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JuxojCe3-jeyZCNM3ZfYcahnytHNKxtfQlz2C3djHw0o95andOm3enRwWCTUBKkPrl5dRr4EH7RUnR9PKsweZL~hAl7U0g1Na0nUb9KyWq7dp2h3d-ek0uDFjqw5IJVNl6wc6-6-PC-BThIwPvqHJeMdbQSibFEskPb5UKiVQChYL6BZQq-UYlQTBkgbliFFff8tANIZvq9Whp9CBM2Wa-xdwkpThy6AOfqplvx8tZBZBG62UtAl4EoTSO2ZJ4L26WrtTRAP~KnVkdEH2geT90nXTINH7IcB~UahYJzqKYkkb4PS0XRrUcFcpK5DyL0twbcCw2fY3Np8WYw3GvBCcA__"
                  alt="User 2"
                />
                <img
                  className="w-6 h-6 rounded-full border"
                  src="https://s3-alpha-sig.figma.com/img/2d32/f180/300e4fc0d2273fe903de2a04bac61e41?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lBsXNnFUD8FBP8g0dsFgUs6qIcakyKMcZnz2jztf9pjPILq~WNtdCqfyGFWxCnSawSVZVQyzAmoAWlElogZpRFlfrrabPyfO1Bn5QI-6n0k10bYlg~jn3l-9rlvKGs0bH7CG1-osX6WHGGz~e~c4J7kLQggD4sTXAfzlVF2zACR4RuHFd7lz6iGz430NmEXXSZ4ZbMy7YuZjoYceiFHB07ZkYLSSE8JIqSeG05WchiSc6hzoJpnG9DXdfwyNz0BhpJxVmCDUb8uoclpNnelQBADRK3AfABzjgA8i1zTmHUrhNSUyzQsS8~WoQFgcTZc45q47DRDnOHZlUiaGWw1BuQ__"
                  alt="User 3"
                />
              </div>
            </p>
         

          {/* Learning Value */}
          <div className="mb-4">
            <h3 className="font-semibold text-sm mb-2">Learning Value</h3>
            <p className="text-sm text-gray-600">
              Lorem ipsum dolor sit amet, sit a consectetur adipiscing elit Lorem
              ipsum dolor sit amet...
              <span className="text-blue-600 font-semibold cursor-pointer">
                Know More
              </span>
            </p>
          </div>

          {/* Growth Value */}
          <div className="mb-4">
            <h3 className="font-semibold text-sm mb-2">Growth Value</h3>
            <p className="text-sm text-gray-600">
              Lorem ipsum dolor sit amet, sit a consectetur adipiscing elit Lorem
              ipsum dolor sit amet...
              <span className="text-blue-600 font-semibold cursor-pointer">
                Know More
              </span>
            </p>
          </div>

          {/* Event Details */}
          <div className="mb-4">
            <h3 className="font-semibold text-sm mb-2">Event Details</h3>
            <p className="text-sm text-gray-600">
              Lorem ipsum dolor sit amet, sit a consectetur adipiscing elit Lorem
              ipsum dolor sit amet...
              <span className="text-blue-600 font-semibold cursor-pointer">
                Know More
              </span>
            </p>
          </div>

          {/* Workshop Price */}
          <div className="mb-4">
            <h3 className="font-semibold text-sm">Workshop Price</h3>
            <p className="text-sm ">800 Coins</p>
          </div>

          {/* Register Button */}
          <div>
            <button className="px-6 py-2 bg-blue-600 text-white font-bold rounded-md hover:bg-blue-700 shadow">
              Register
            </button>
          </div>
        </div>
        

        {/* Right Section */}
        <div>
          {/* Main Image */}
          <div className="my-4 flex justify-center lg:mx-12 ">
            <img
              src="https://s3-alpha-sig.figma.com/img/77af/9b83/e17c8c9aad7200abd489fe902cd5aa18?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=eKcgrFhOJbMRLw8E3gJQWGi-hb~du2ywifI8Ot6kw26nxiO2NaF6Vyza8wVJfxpi-iCHG56Om6JeExnyFLlq~etv4RcEFanf4C6CGZDcMy45Btlw~bl0L4doj7BfcsR9N~OWPREzsbfyyptUUOZ89AiceCyLe2eqKd9WIf6WlRpsGJddI~6At6O3uiPPdyza~B-lGihctWjSbt9Mn-WGNRbbaOsEh1bpGDNjmlX7GXJQiVsobq6qlKM39p2Cqs7dEXZ2Hez1sSm~kwrIB2A-8KedhTus8HtYrvtjLX2qaobexhJToSUQMNCZ69diMMbOVBdjyVnsN0kHRETLGEfccQ__"
              alt="Event"
              className="rounded-lg h-80"
            />
          </div>

          {/* Speaker Card */}
          <div className="bg-gray-100 p-4 rounded-lg flex items-center justify-between lg:mx-12">
           <div className=" flex flex-col items-center justify-center">
              <img
                src="https://s3-alpha-sig.figma.com/img/89ea/d5f3/b62530b3b9822b650b5e07c8ba095b98?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VFJWQV7sR9vQuKrQBcqBUhN2Rx-EWNAFnLf2FVNsDlqEsDVGumlC0~zSoAPo5J15AvEy20g2F1rErA3DG70tfb6mRWUV1fVId3n8MgSJDZlFn3J0eVOsrS7EN6sx8w0uLv4n3pn55nrN6qQWLVZn1PdCIMn9uFgOligl~0BesJVPqgJN4qUkZAYKUXQbeyEt5Pt4Gnrcaefhxyc8WiQ2UIWAO6JvsZ7m35UQdxghiw5f8m0jhbmKKBH-sQMAbWjaVqqg3o-d8N8rqsyjDlrMoAJDXu75isEdotROHA2Z-Slsbr1L~HXNnUGrm6NKJk8JiKyZRkroQKOYOXDW4KzL-A__"
                alt="Speaker"
                className="w-24 h-24 rounded-full mr-4"
              />
              <h4 className="font-bold text-blue-600">Chad Pitt</h4>
              <p className="text-xs text-gray-500">Young Researcher</p>
              <p className="text-xs text-gray-500">Grade VI</p>
           </div>
           
             
              <p className="text-sm text-gray-600 mt-1 w-3/4">
                Lorem ipsum dolor sit amet, sit a consectetur adipiscing elit
                Lorem ipsum dolor sit amet, sit a consectetur adipiscing elit
                Lorem ipsum dolor sit amet, sit a consectetur adipiscing elit
                
                Lorem ipsum dolor sit amet...
                <span className="text-blue-500 font-semibold cursor-pointer">
                  Know more
                </span>
              </p>
             
            </div>
          </div>
        </div>
        <hr className="w-full  bg-gray-400 mt-4 "/>
      </div>
     
  );
};

export default Detail;
