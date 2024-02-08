
import {
    Box,
    Button,
    Card,
    CardContent,
    CardCover,
    Typography,
} from '@mui/joy'

import res1 from '../../../assets/images/res1.webp'
import res2 from '../../../assets/images/res2.webp'
import res3 from '../../../assets/images/res3.webp'
import res4 from '../../../assets/images/res1.webp'
import res5 from '../../../assets/images/res2.webp'
import res6 from '../../../assets/images/res3.webp'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { useEffect, useState } from 'react'
import SlickPreviousArrow from './SlickPreviousArrow'
import SlickNextArrow from './SlickNextArrow'

const TemplateCarousel = () => {

    const slidesToShow = 5;
    const mdBreakPoint = 900
    const isSmallScreen = window.innerWidth < mdBreakPoint

    const settings = {
        // swipable: true,
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: isSmallScreen ? 1 : slidesToShow,
        slidesToScroll: 1,
        adaptiveHeight: true,
        centerMode: true,
        prevArrow: <SlickPreviousArrow />,
        nextArrow: <SlickNextArrow />,
        beforeChange: (current, next) => setIndexes(next),
    };

    const slides = [res1, res2, res3, res4, res5, res6]
    const totalSlides = slides.length

    const [centerImageIndex, setCenterImageIndex] = useState(0)
    const [prevImageIndex, setPrevImageIndex] = useState(1)
    const [nextImageIndex, setNextImageIndex] = useState(totalSlides - 1)
    const [lastImageIndex, setLastImageIndex] = useState(totalSlides - 1)
    const [firstImageIndex, setFirstImageIndex] = useState(0)

    const setIndexes = (next) => {
        const previousIndex = next === 0 ? (totalSlides - 1) : next - 1
        const nextIndex = next === (totalSlides - 1) ? 0 : next + 1
        const lastIndex = nextIndex === (totalSlides - 1) ? 0 : nextIndex + 1
        const firstIndex = previousIndex === (0) ? (totalSlides - 1) : previousIndex - 1

        setCenterImageIndex(next);
        setNextImageIndex(nextIndex)
        setPrevImageIndex(previousIndex)
        setLastImageIndex(lastIndex)
        setFirstImageIndex(firstIndex)
    }

    return (
        <Box width='100%'>
            <Slider {...settings}>
                {slides.map((slider, index) => {
                    return (
                        <Box
                            key={index}
                            pt={isSmallScreen ? '18vw' : '12vw'}
                            width={isSmallScreen ? '100vw' : '100%'}
                            height={isSmallScreen ? '130vw' : '53vw'}
                        >
                            <Card
                                sx={{
                                    transform: index == centerImageIndex ? 'scale(1.35)'
                                        : index === prevImageIndex ? 'scale(1.2)'
                                            : index === nextImageIndex ? 'scale(1.2)'
                                                : index === lastImageIndex ? 'scale(1.1)'
                                                    : index === firstImageIndex ? 'scale(1.1)'
                                                        : 'scale(1)',

                                    zIndex: index == centerImageIndex ? 4
                                        : index === prevImageIndex ? 3
                                            : index === nextImageIndex ? 3
                                                : index === lastImageIndex ? 2
                                                    : index === firstImageIndex ? 2
                                                        : 1,

                                    borderRadius: { xs: 'sm', md: 'lg' },
                                    width: isSmallScreen ? '66vw' : '24vw',
                                    aspectRatio: { xs: '1/1.35', md: '1/1.2' },
                                    marginX: isSmallScreen ? 'auto' : '-3vw',
                                    border: '0px solid transparent',
                                    boxShadow: 'sm',
                                    transition: 'all .3s ease-in',
                                    overflow: 'hidden'
                                }}>

                                <CardCover>
                                    <img
                                        src={slider}
                                        alt="hero image" style={{ objectFit: 'fill', borderRadius: '0' }} />
                                </CardCover>

                                {/* {index == centerImageIndex && */}
                                <CardContent sx={{
                                    maxHeight: '1.5rem',
                                    width: '100px',
                                    marginLeft: 'auto',
                                    marginTop: 'auto'
                                }}>
                                    <Typography
                                        level='title-lg'
                                        fontSize={'.5rem'}
                                        textColor='white'
                                        bgcolor='primary.500'
                                        borderRadius='15px'
                                        p={isSmallScreen ? .8 : 1}
                                        sx={{
                                            '&:hover': {
                                                bgcolor: 'primary.600',
                                                transition: 'all .1s'
                                            }
                                        }}
                                    >Pick Template </Typography>
                                </CardContent>
                                {/* } */}
                            </Card>
                        </Box>
                    )
                })
                }

            </Slider >
        </Box >
    )
}

export default TemplateCarousel

// const [scales, setScales] = useState(Array(slides.length).fill(1)); // Create a scale state for each card

// useEffect(() => {
//     let animationFrameId = null;

//     const initScaleCenters = slides.map((slide, index) => {
//         return Math.abs(window.innerWidth / (slidesToShow * 2) + (1 + index) * window.innerWidth / (slidesToShow * 2))
//     })

//     const checkPositions = () => {

//         const newScales = cardRefs.current.map((cardRef, index) => {
//             const cardX = cardRef.getBoundingClientRect().x;
//             const screenX = window.innerWidth;

//             const subtractX = screenX * totalSlides / slidesToShow
//             const realcenterX = cardX - subtractX + screenX / (slidesToShow * 2)

//             const scaleCenter = (realcenterX - subtractX) / 2

//             return cardX;
//         });

//         console.log('cardX:', newScales[0], '  scrLeft:', window.parent.innerWidth)
//         setScales(newScales);

//         // console.log('rect:', newScales[0], 'screenX:', window.innerWidth)
//         if (JSON.stringify(newScales) !== JSON.stringify(scales)) {
//             const slickTrack = document.querySelector('.slick-track');
//             if (slickTrack) {
//                 const children = Array.from(slickTrack.children);
//                 children.forEach((child: Element, index: number) => {
//                     const htmlChild = child as HTMLElement;
//                     const relativeChild = Math.abs(children.length / 2 - index * children.length)
//                     const delta = 1 - relativeChild / 100
//                     console.log(delta)
//                     htmlChild.style.transform = `scale(${delta})`;
//                 });
//             }
//             setScales(newScales);
//         }

//         // Request the next frame
//         animationFrameId = requestAnimationFrame(checkPositions);
//     };
//     // console.log('rect:', initScaleCenters[0], 'screenX:', window.innerWidth)

//     // Start the loop
//     animationFrameId = requestAnimationFrame(checkPositions);

//     // Make sure to cancel the loop when the component unmounts
//     return () => {
//         if (animationFrameId) {
//             cancelAnimationFrame(animationFrameId);
//         }
//     };
// }, []);

// useEffect(() => {
//     // Create a new MutationObserver instance
//     const observer = new MutationObserver((mutationsList, observer) => {
//         // Look through all mutations that just occured
//         for (let mutation of mutationsList) {
//             // If the addedNodes property has one or more nodes
//             if (mutation.addedNodes.length || scales.length) {
//                 const slickTrack = document.querySelector('.slick-track');
//                 if (slickTrack) {
//                     const children = Array.from(slickTrack.children);
//                     console.log('render')
//                     children.forEach((child: Element, index: number) => {
//                         const htmlChild = child as HTMLElement;
//                         htmlChild.style.transform = `scale(${.4 + index / 30})`;
//                     });
//                 }
//             }
//         }
//     });

//     // Start observing the document with the configured parameters
//     observer.observe(document, { childList: true, subtree: true });
//     // Clean up the observer when the component is unmounted
//     return () => observer.disconnect();
// }, [scales]);
