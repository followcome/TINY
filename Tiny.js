
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCompass, faHeart, faHouse, faTrophy, faBusinessTime ,faStar, faDownload, faGear, faBook,faBell ,faPlus} from '@fortawesome/free-solid-svg-icons';
export const KebBtn=()=>{
    return(
        <div className='max-w-6xl mx-auto bg-[#353940] rounded-3xl shadow-lg py-8 mt-1 '>
            <div className="h-auto grid grid-cols-[105px,470px,170px] gap-4 justify-center items-center  border-8 border-gray-500 rounded-3xl max-w-4xl mx-auto m-0 px-8 ">
            <div className=" bg-[#353940] pl-0 m-0 py-3  h-full ">
            <div className="text-white font-bold text-slate-500 space-x2 text-2xl ml-0 m-0 pl-0 p">TINY</div>
            <div className="text-white font-bold text-slate-200 text-sm ">MOVIEZ</div>
                <div className="mt-[50px] text-slate-200 text-sm ">Menu</div>
                <div className="md:flex mt-4 ">
                    
                    <div>
                    < FontAwesomeIcon icon={faHouse} className='block text-[#00B9AE]' />
                    </div>
                    <div className="text-[#00B9AE]  px-2 mt-[-4px] ">Home</div>
                    

                </div>
                <div className='flex mt-2'>
               <div>
                < FontAwesomeIcon icon={faTrophy} className='text-white' />
                </div>
                <div className='text-white px-2 text-sm font-bold'>Awards</div>

               </div>
               <div className='flex mt-2'>
               <div>
                < FontAwesomeIcon icon={faCompass} className='text-white' />
                </div>
                <div className='text-white px-2 text-sm font-bold'>Celebrities</div>

               </div>
               <div className=''>
                <div className='text-slate-400 mt-[40px]  text-sm'>Library</div>

               </div>
               <div className='flex mt-2 '>
               <div>
               <FontAwesomeIcon icon={faBusinessTime} className='text-white' />
                </div>
                <div className='text-white px-2 text-sm font-bold'>Recent</div>
               </div>
               <div className='flex mt-2'>
               <div >
               <FontAwesomeIcon icon={faStar} className='text-white' />
               </div>
               <div className='text-white px-2 text-sm font-bold '>Top Rated</div>
                </div>
                <div className='flex mt-2'>
               <div>
               <FontAwesomeIcon icon={faDownload} className='text-white' />
                </div>
                <div className='text-white px-2 text-sm font-bold '>Downloaded</div>

               </div>
               <div className='flex mt-2 '>
               <div>
               <FontAwesomeIcon icon={faHeart} className='text-white' />
                </div>
                <div className='text-white px-2 text-sm font-bold'>Playlist</div>

               </div>
               <div className='flex mt-2 '>
               <div>
               <FontAwesomeIcon icon={faBusinessTime} className='text-white' />
                </div>
                <div className='text-white px-2 text-sm font-bold'>Watchlist</div>

               </div>
               <div className='flex mt-2'>
               <div>
               <FontAwesomeIcon icon={faBusinessTime} className='text-white' />
                </div>
                <div className='text-white px-2 text-sm font-bold'>Completed</div>

               </div>
               <div className=''>
                <div className='text-slate-400 mt-[40px]  text-sm'>General</div>

               </div>
               <div className='flex mt-2 '>
               <div>
                < FontAwesomeIcon icon={faGear} className='text-white' />
                </div>
                <div className='text-white px-2 text-sm font-bold'>Settings</div>

               </div>
               <div className='flex mt-2'>
               <div>
                < FontAwesomeIcon icon={faBook} className='text-white' />
                </div>
                <div className='text-white px-2 text-sm font-bold'>Logout</div>
               </div>
            </div>
            <div className='grid grid-col-3 h-full'>
            <div className=' '>
           <div className=" bg-[#0D0D0D] flex py-2 ">
    
    <div className="text-white font-bold text-slate-500 space-x-2 text-lg px-5 mt-8 font-semibold ">Movies</div>
    <div className='text-bold mt-9 px-4  underline text-[#00B9AE]  font-semibold'>TV Shows</div>
    <div className='text-bold mt-9 px-4   text-white font-semibold'>Anime</div>
    <div className='relative '>
        <button className=' sm:w-auto bg-[#353940] w-46 mt-8 rounded-md pl-8 pr-20 py-1 text-white '>Search</button>
        <div className='absolute  items-center'></div>
        <div className='mt-[-27px]'>
        <FontAwesomeIcon icon={faHeart} className='text-white px-2 mt-[-15px]' />

        </div>

    </div>
    

    </div>
    <div className='bg-[#0D0D0D] relative flex '>
        <img className='mt-10 rounded-md w-96 mx-auto ' src='https://imageio.forbes.com/specials-images/imageserve/5f088c888ca53500074f9915/The-Crown-Netflix-series-poster/0x0.jpg?format=jpg&crop=1080,836,x0,y239,safe&width=960'></img>
        <div className='absolute top-[-2px] px-10 space-x-40' >
        <button className='  bg-slate-400 text-white mt-60 left-14 py-1 text-white pl-4 rounded-xl pr-4 hover:bg-blue-800 px-2'>Watchlist</button>
        <button className='  bg-[#00B9AE] text-white mt-60 left-14 py-1 text-black-700 pl-4 rounded-xl pr-4 hover:bg-blue-800 px-2'>Watch Now</button>
        
        </div>
        
    </div>
    <div className='text-white m px-8 bg-[#0D0D0D] py-8'>Popular on TinyMoviez</div>
    <div className='relative bg-[#0D0D0D] flex gap-2 py-4 px-0'>
        <img className='h-1/3 w-36 rounded-xl ' src='https://miro.medium.com/v2/resize:fit:700/0*r1PawBH3aXCavicd.jpeg'></img>
        <img className='h-46 w-36 rounded-xl' src='https://static1.srcdn.com/wordpress/wp-content/uploads/2023/09/denzel-washington-hold-guns-in-the-equalizer-2.jpg'></img>
        <img className='h-46 w-36 rounded-xl' src='https://static.vecteezy.com/system/resources/thumbnails/022/772/031/small_2x/happy-father-s-day-a-dad-in-a-superhero-costume-is-holding-a-daughter-generate-ai-photo.jpeg'></img>
        <div className='absolute'>
            <div className='text-[#00B9AE]'>Loki</div>
            <div className='text-white mt-20'>6 Ep</div>
            
            

        </div>
        

    </div>
           </div> 
                
                </div>           
            
            <div className=" bg-[#353940] h-full">
                <div className='flex'>
                    <div className='bg-slate-500 text-white mt-2 px-4 rounded-lg py-2'>
                    <FontAwesomeIcon icon={faBell} />
                    </div>
                    <div className='text-white px-6 mt-4 font-medium'>Samantha</div>
                    <img className='w-1/4 h-10 rounded-2xl mt-4 ' src='https://as2.ftcdn.net/v2/jpg/02/44/62/49/1000_F_244624960_sDgK6hwVlngKM27CkIPuyTc50xRxyhnh.jpg'></img>
                </div>
            <div className='flex space-x-8'>
            <div className='text-white mt-14 px-o'>Continue</div>
            <div className='text-white mt-14 text-slate-300 '>See More</div>
            </div>
            <div className='relative flex gap-2'>
            <img className='mt-4 w-36' src='https://4.bp.blogspot.com/-4ebpfgILGF0/XGkNfBnvhOI/AAAAAAAARJs/YK-LdIn9574t_x86EvrpzejLJc5QoVZdACLcBGAs/s1600/Bandersnatch05.jpg'></img>
            <div className='absolute space-x-11'>
                <button className='bg-gray-500 rounded-lg py-1 px-1 mt-20  text-white font-medium'>Drop</button>
                <button className='bg-[#00B9AE] px-1 rounded-lg mt-10 font-semibold'>Watch</button>

             </div>
             <img className='w-16 bg-black py-6 rounded-lg  mt-8 gap' src='https://assets-prd.ignimgs.com/2024/01/24/upcomingvideogamemoviestvshows-blogroll-1706138962779.jpg?width=1280'></img>
            </div>
            <div className='mt-10 flex '>
            <div className='text-white font-medium text-slate-700'>Top Rated</div>
            <div className='text-white px-2 text-slate-300'>See More</div>
            </div>
            <div className='flex relative gap-2'>
                <img className='mt-8 w-46' src='https://assets-prd.ignimgs.com/2024/01/24/upcomingvideogamemoviestvshows-blogroll-1706138962779.jpg?width=1280'></img>
            <div className='absolute space-x-10'>
            <FontAwesomeIcon className='text-white mt-24 bg-gray-500 px-2 rounded-md py-1 ml-2' icon={faPlus} />
            <button className='bg-[#00B9AE] px-4 rounded-lg mt-10 font-semibold py-1'>Watch</button>
            </div>
            <img className='w-10 bg-black py-2 rounded-lg  mt-8 gap' src='https://m.media-amazon.com/images/M/MV5BODQyMDkyOTE2MF5BMl5BanBnXkFtZTgwNDQ1NTQwMTI@._V1_UY1200_CR90,0,630,1200_AL_.jpg'></img>
            </div>
            <div className='mt-14 flex gap-8'>
            <div className='text-white font-medium text-slate-700'>Genres</div>
            <div className='text-white px-2 text-slate-300'>See More</div>
            </div>
            <div className='flex relative gap-2'>
                <img className='mt-8 w-46' src='https://variety.com/wp-content/uploads/2023/12/Community.jpg?w=1000'></img>
                <div className='absolute space-x-11'>
                <button className='bg-gray-500 rounded-lg py- px-2 mt-28  text-white font-medium'>+</button>
                <button className='bg-[#00B9AE] px-4 rounded-lg mt- font-semibold'>Watch</button>

             </div>
            <img className='w-10 bg-black py-2 rounded-lg  mt-8 gap' src='https://m.media-amazon.com/images/M/MV5BODQyMDkyOTE2MF5BMl5BanBnXkFtZTgwNDQ1NTQwMTI@._V1_UY1200_CR90,0,630,1200_AL_.jpg'></img>
            </div>
            </div>
            
        </div>
        </div>
        
    )
}