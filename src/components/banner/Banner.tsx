import * as React from 'react';
import './Banner.scss';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

type BackgroundImagesType = {
    url: string;
    name: string;
    position: number;
    text: string;
}

const backgroundImages: BackgroundImagesType[] = [
    {
        url: 'https://res.cloudinary.com/dvwigktot/image/upload/v1678416448/canal_digital/microescopio_slide_pznvsv.png',
        name: 'first slide',
        position: 0,
        text: '"Confíe en nosotros para obtener resultados de alta calidad"'
    },
    {
        url: 'https://res.cloudinary.com/dvwigktot/image/upload/v1678416448/canal_digital/presion_2_slide_sjg718.png',
        name: 'second slide',
        position: 1,
        text: '"Más que un laboratorio clínico, somos tu aliado en la salud"'
    },
    {
        url: 'https://res.cloudinary.com/dvwigktot/image/upload/v1678416448/canal_digital/presion_1_slide_nt58ua.png',
        name: 'thrid slide',
        position: 2,
        text: 'Su salud es nuestra prioridad: resultados precisos, atención personalizada."'
    },
    {
        url: 'https://res.cloudinary.com/dvwigktot/image/upload/v1678416448/canal_digital/presion_2_slide_sjg718.png',
        name: 'second slide',
        position: 1,
        text: '"Cuidando de su salud con tecnología de vanguardia"'
    },

];



const Banner = () => {
    const [currentSlide, setCurrentSlide] = React.useState<BackgroundImagesType>(backgroundImages[0]);
    
    React.useEffect(() => {
        const slideTimer = setTimeout(() => {
            const currentPosition = currentSlide.position;
            let nextSlide = backgroundImages[currentPosition+1];
            if (!nextSlide) {
                nextSlide = backgroundImages[0];
            }
            setCurrentSlide(nextSlide);
        }, 5000);
        return () => clearTimeout(slideTimer);
    }, []);


    const handleClickSlide = (buttonType: string): void => {
        const currentPosition = currentSlide.position;
        if(buttonType === 'next' ) {
            let nextSlide = backgroundImages[currentPosition+1];
            if (!nextSlide) {
                nextSlide = backgroundImages[0];
            }
            setCurrentSlide(nextSlide);
            return;
        }
        let prevSlide = backgroundImages[currentPosition-1];
        if(!prevSlide) {
            prevSlide = backgroundImages[backgroundImages.length-1];
        }
        setCurrentSlide(prevSlide);
    };
    
    return(
        <React.Fragment>
            {
                <div 
                    className='banner-container' 
                    style={
                        {
                            backgroundImage: `url(${currentSlide.url})`, 
                        }
                    } 
                >   
                    <div className="text-container">
                            <p className='text-container__prhase'>
                                {currentSlide.text}
                            </p>        
                    </div>

                    <div className="button-group">
                        <button 
                            className='slide-button' 
                            onClick={() => handleClickSlide('prev')}
                        >
                            <ArrowBackIosIcon />
                        </button>
                        <button 
                            onClick={() => handleClickSlide('next')}
                            className='slide-button'
                        >
                            <ArrowForwardIosIcon />
                        </button>
                    </div>
                    
                </div>                  
            }
        </React.Fragment>
    );
};

export default Banner;