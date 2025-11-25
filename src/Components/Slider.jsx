import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Slider = () => {
  return (
    <div className='mx-auto lg:w-[1500px]'>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img className='w-[1500px] h-[500px] object-fit' src="https://gmedia.playstation.com/is/image/SIEPDC/apex-legends-listing-thumb-01-ps4-en-29oct20?$facebook$" alt="" /></SwiperSlide>
        <SwiperSlide><img className='w-[1500px] h-[500px] object-fit' src="https://static0.xdaimages.com/wordpress/wp-content/uploads/2018/06/pubg.jpg?w=1200&h=675&fit=crop" alt="" /></SwiperSlide>
        <SwiperSlide><img className='w-[1500px] h-[500px] object-fit' src="https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1517290/capsule_616x353.jpg?t=1761752400" alt="" /></SwiperSlide>
        <SwiperSlide><img className='w-[1500px] h-[500px] object-fit' src="https://www.riotgames.com/darkroom/1440/d0807e131a84f2e42c7a303bda672789:3d02afa7e0bfb75f645d97467765b24c/valorant-offwhitelaunch-keyart.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img className='w-[1500px] h-[500px] object-fit' src="https://www.csgoroll.com/blog/content/images/size/w2000/2025/01/counter-strike-2-pc-game-steam-cover.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img className='w-[1500px] h-[500px] object-fit' src="https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/292030/ad9240e088f953a84aee814034c50a6a92bf4516/header.jpg?t=1756366569" alt="" /></SwiperSlide>
        <SwiperSlide><img className='w-[1500px] h-[500px] object-fit' src="https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/570/capsule_616x353.jpg?t=1762820658" alt="" /></SwiperSlide>
        <SwiperSlide><img className='w-[1500px] h-[500px] object-fit' src="https://m.media-amazon.com/images/I/91rTxm40jwL.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img className='w-[1500px] h-[500px] object-fit' src="https://i.ebayimg.com/images/g/oyEAAOSwIBdijBIx/s-l400.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img className='w-[1500px] h-[500px] object-fit' src="https://cdnb.artstation.com/p/assets/covers/images/076/962/927/large/nicholas-maxson-francombe-nicholas-maxson-francombe-2023-10-26-keyartexp33-full-1.jpg?1718223251" alt="" /></SwiperSlide>
        <SwiperSlide><img className='w-[1500px] h-[500px] object-fit' src="https://www.bluedogposters.com.au/cdn/shop/collections/Minecraft_posters_online_750x.progressive.jpg?v=1688105706" alt="" /></SwiperSlide>

      </Swiper>
    </div>
  )
}

export default Slider
