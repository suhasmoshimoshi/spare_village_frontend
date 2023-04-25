import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from "../pages/components/Header"
import Link from 'next/link'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const PrevArrow = (props) => (
    <div {...props}>
      <img src="/landingPage/leftArrow.png" alt="" className='slick-prev'/>
    </div>
  );

  const NextArrow = (props) => (
    <div {...props}>
      <img src="/landingPage/rightArrow.png" alt="" className='slick-next'/>
    </div>
  );

  const settings = {
    // centerMode: true,
    // adaptiveHeight: true,
    arrows: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />
  };
  return (
    <>
      <main className=''>
        <Header className="" />
        <div className="bg-[url('/landingPage/homepage_banner.png')] w-full h-[646px] pt-[208px] pl-[230px] text-black bg-no-repeat">
          <h1 className='homeBanner_text'>Become a Vendor <span className='text-[#4C66EF]'>Today</span> </h1>
          <p className='homeBanner_description pt-[21px]'>Sell on Indias largest online platform for industrial supplies at <span className='font-bold'> 0% commission</span>
          </p>

          <Link href="/item5">
            <button className="nav-button mt-[60px]">START SELLING</button>
          </Link>
          <p className='terms ml-[87px] font-IBM   pt-[21px]'>*T&C apply</p>
        </div>

        <div className="section2_banner bg-[url('/landingPage/section2.png')] pt-[501px] pl-[234px]  bg-no-repeat  ">
          <h1 className='sectiom2_heading '>Get to know <br /> about us</h1>
          <p className='section2_description pt-[24px]'>
            Join us in our expansion plans from local to pan India, tap into a growing customer base and establish your presence in new markets.
          </p>
        </div>
        <div className="section3 bg-[#FFFFFF]  pt-[164px]  ">
          <h1 className='section3_Heading'>
            why choose spare village
          </h1>
          <div className='grid grid-cols-4 mt-[68px] gap-5 px-[40px] '>

            <div className="sec3items bg-[url('/landingPage/section3items.png')] bg-center bg-contain bg-no-repeat flex flex-col items-center py-[50px] px-[66px] ">
              <img src="/landingPage/percent.png" alt="" className='sec3image' />
              <p className=' sec3itemHeading pt-[21px]'>Zero Commissions</p>
              <p className='sec3desc text-center pt-[10px]'>Keep 100% of your profits with no commission charges, maximize your earnings and reinvest in your business for a trial period.</p>
            </div>
            <div className="sec3items bg-[url('/landingPage/section3items.png')] bg-center bg-contain bg-no-repeat flex flex-col items-center  py-[50px] px-[66px]  ">
              <img src="/landingPage/map.png" alt="" className='sec3image' />
              <p className=' sec3itemHeading pt-[18px] '>Local & PAN India expansion</p>
              <p className='sec3desc text-center pt-[10px]'>Join us in our expansion plans from local to pan India, tap into a growing customer base and establish your presence in new markets.</p>
            </div>
            <div className="sec3items bg-[url('/landingPage/section3items.png')] bg-contain bg-center bg-no-repeat flex flex-col items-center py-[50px] px-[66px]   ">
              <img src="/landingPage/ontime.png" alt="" className='sec3image' />
              <p className=' sec3itemHeading pt-[18px]'>Secure timely payments</p>
              <p className='sec3desc text-center pt-[10px]'>Funds deposited directly to bank account every 7 days, including for Pay on Delivery order.</p>
            </div>
            <div className="sec3items bg-[url('/landingPage/section3items.png')] bg-contain bg-center bg-no-repeat flex flex-col items-center py-[50px] px-[46px]  ">
              <img src="/landingPage/hand.png" alt="" className='sec3image' />
              <p className=' sec3itemHeading pt-[18px]'>User friendly & personalized experiences</p>
              <p className='sec3desc text-center pt-[10px]'>Enjoy a user-friendly platform that is easy to navigate, with personalized support & assistance to ensure a seamless selling experience.</p>
            </div>
          </div>
          <h1 className='section3_Heading mt-[164px]'>
            why choose spare village
          </h1>
          <div className="slider-parent my-[80px]   bg-white">
            <Slider {...settings} className='bg-white'>


              <div>
                <h3 className='slider-items'>Slide 1</h3>
              </div>
              <div>
                <h3 className='slider-items'>Slide 2</h3>
              </div>
            </Slider>
          </div>
          <div className='flex  mb-[17px]'>
            <p className='termsandcondition mr-[108px] underline '>*Terms and Conditions apply</p>
            <img src="/landingPage/plusicon.png" alt="hello" />
          </div>
          <div className="section4  bg-[url('/landingPage/section4.png')] pt-[143px] pl-[230px] bg-cover  w-full h-screen absolute">

            <h1 className='section4_heading '>START YOUR SELLER JOURNEY</h1>
            <p className='section4_decription mt-[20px]'>Expand your business with Sparevillage today</p>

            <Link href="/item5">
              <button className="nav-button mt-[60px]">START SELLING</button>
            </Link>
            <p className='terms  font-IBM  mt-[21px]'>*T&C apply</p>
          </div>
          <div className='relative top-[582px] h-[780px] bg-[#15284B] grid grid-cols-2 text-white pt-[145px] '>

            <div className="flex flex-col justify-between ">
              <img src="/brand.png" alt="" className='w-[374px] mx-auto' />
              <div className='w-[423px] mx-auto pb-[60px]'>© 2023 SpareVillage.</div>
            </div>
            <div className="grid grid-cols-4">
              <div className='borderfoot pl-[24px]'>
                <div>
                  <h1 className='footer_heading'>About</h1>
                  <ul>
                    <li className='footer_items'>Contact Us</li>
                    <li className='footer_items'>About Us</li>
                    <li className='footer_items'>Careers</li>
                    <li className='footer_items'>Blogs</li>
                  </ul>
                </div>
              </div>
              <div className='borderfoot pl-[24px]'>
                <div>
                  <h1 className='footer_heading'>Help</h1>
                  <ul>
                    <li className='footer_items'>Payments</li>
                    <li className='footer_items'>Shipping</li>
                    <li className='footer_items'>Cancellation & Returns</li>
                    <li className='footer_items'>Report Infringement</li>
                  </ul>
                </div>
              </div>
              <div className='borderfoot pl-[24px]'>
                <div>
                  <h1 className='footer_heading'>Policies</h1>
                  <ul>
                    <li className='footer_items'> Return policy</li>
                    <li className='footer_items'>FAQs</li>
                    <li className='footer_items'>Fee structure</li>
                    <li className='footer_items'>Seller policy</li>
                    <li className='footer_items'>Return & refund policy</li>
                    <li className='footer_items'>Terms & conditions</li>
                    <li className='footer_items'>Security</li>
                  </ul>
                </div>
              </div>
              <div className='borderfoot pl-[24px]'>
                <div>
                  <h1 className='footer_heading'>Social</h1>
                  <ul>
                    <li className='footer_items'>Facebook</li>
                    <li className='footer_items'>Instagram</li>
                    <li className='footer_items'>Twitter</li>
                    <li className='footer_items'>Linkdin</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
