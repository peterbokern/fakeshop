import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ProductCard from '../../components/product-card/ProductCard.jsx';

const ProductCarousel = ({ products }) => {
    // Carousel responsiveness settings
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4, // Number of items to display on desktop (4 products per slide)
            slidesToSlide: 4 // Transition one product at a time for smooth scrolling
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2, // Number of items to display on tablet
            slidesToSlide: 2 // Transition one product at a time
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1, // Number of items to display on mobile
            slidesToSlide: 1 // Transition one product at a time
        }
    };

    // handle pproduct loading
    if (!products || products.length === 0) {
        return null;
    }

    return (
        <div>
            <Carousel
                swipeable={true}
                draggable={true}
                showDots={true}
                responsive={responsive}
                ssr={true} // Server-side rendering
                infinite={true} // Infinite loop to avoid empty space
                autoPlay={true} // Enable autoplay
                autoPlaySpeed={6000} // 5-second autoplay delay between slides
                keyBoardControl={true}
                customTransition="transform 2s ease-in-out"
                transitionDuration={500} // Smooth transition duration
                containerClass="carousel-container"
           /*     removeArrowOnDeviceType={["tablet", "mobile"]}*/
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-10-px" // Adjust this to control spacing
            >
                {products.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </Carousel>
        </div>
    );
};

export default ProductCarousel;
