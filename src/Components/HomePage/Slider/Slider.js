import './SliderStyle.css';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

// function Slider({ slidesArray, index, setIndex }) {

//     const prevSlide=() =>{
//         if(index>0 && index <=5 ){
//             console.log(index);
//             setIndex(index-1);

//         }
//         else{
//             setIndex(5);
//         }
//     }

//     const nextSlide =()=>{
//         if(index>=0 && index <5 ){
//             console.log(index);
//             setIndex(index+1);

//         }
//         else{
//             setIndex(0);
//         }
//     }

//     return (
//         <div className='slider-box'>
//             <div className='arrow' onClick={prevSlide}><ArrowBackIosNewIcon  /></div>
//             <div className='slider-content'>
//                 <div className='slider-content-title'>
//                     {slideArray[index]?.original_title ?? slideArray[index]?.original_name}
//                 </div>
//                 <div className='slider-content-about'>
//                     <div className='about'>Genre: {slideArray[index]?.media_type}</div>
//                     <div className='about'>Release Date: {slideArray[index]?.release_date ?? '-NA-'}</div>
//                 </div>
//                 <div className='slider-content-overview'>
//                     <div className='overview'>{slideArray[index]?.overview}</div>
//                 </div>
//             </div>
//             <div className='slider-image'>
//                 <img src={`https://image.tmdb.org/t/p/w500${slideArray[index]?.poster_path}`} alt=''width='100%' height='420px'/>
//             </div>
//             <div div className='arrow' onClick={nextSlide}><ArrowForwardIosIcon/></div>
//         </div>
//     )

// }

function Slider({ slidesArray, index, setIndex }) {

    return (
        <div className='slider-container'>
            {/* <div className='arrow'>
                <div ><ArrowBackIosNewIcon /></div>
                <div ><ArrowForwardIosIcon /></div>
            </div> */}
            <div className='arrow'><ArrowBackIosNewIcon /></div>
            {slidesArray.map((slide, i) => {
                if (i < 6) {
                    return (
                        <div className='slide' key={slide.id}>
                            <div className='slider-content'>
                                <div className='slider-content-title'>

                                    {slide?.original_title ?? slide?.original_name}
                                </div>
                                <div className='slider-content-about'>
                                    <div className='about'>Genre: {slide?.media_type}</div>
                                    <div className='about'>Release Date: {slide?.release_date ?? '-NA-'}</div>
                                </div>
                                <div className='slider-content-overview'>
                                    <div className='overview'>{slide?.overview}</div>
                                </div>
                            </div>
                            <div className='slider-image'>
                                <img src={`https://image.tmdb.org/t/p/w500${slide?.poster_path}`} alt='' width='100%' height='440px' />
                            </div>
                        </div>
                    )
                }
            })}
            <div div className='arrow' ><ArrowForwardIosIcon /></div>

        </div>
    )
}



export default Slider;