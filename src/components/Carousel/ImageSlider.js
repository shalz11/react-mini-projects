import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Reel from "./Reel";

const ImageSlider = (props) => {
  return (
    <div className="slider-container">
      <div className="slider">
        <div onClick={props.slideLeftHandler} className="btn-previous">
          <FaChevronLeft />
        </div>
        <div onClick={props.slideRightHandler} className="btn-next">
          <FaChevronRight />
        </div>
        {props.images.length > 0 && (
          <div className="slides">
            <div
              className="img-container transition"
              style={{ height: props.height }}
            >
              <img
                src={props.images[props.activeIndex].webformatURL}
                alt={props.activeIndex}
              />
            </div>
          </div>
        )}
      </div>

      <Reel
        images={props.images}
        activeIndex={props.activeIndex}
        thumbnailClickHandler={props.thumbnailClickHandler}
      />
    </div>
  );
};

export default ImageSlider;
