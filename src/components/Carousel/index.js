import { useState, useEffect } from "react";
import "./Carousel.css";
import ImageSlider from "./ImageSlider";
import { FaExpand, FaCompress } from "react-icons/fa";
import Modal from "react-modal";
//images
import drip from "../../assets/images/thumbnails/drip-640.jpg";
import flowers from "../../assets/images/thumbnails/flowers-640.jpg";
import tree from "../../assets/images/thumbnails/tree-640.jpg";
import mountain from "../../assets/images/thumbnails/mountain-landscape-640.jpg";
import maldives from "../../assets/images/thumbnails/maldives-640.jpg";
import driplg from "../../assets/images/webformat/drip-1280.jpg";
import flowerslg from "../../assets/images/webformat/flowers-1280.jpg";
import treelg from "../../assets/images/webformat/tree-1280.jpg";
import mountainlg from "../../assets/images/webformat/mountain-landscape-1280.jpg";
import maldiveslg from "../../assets/images/webformat/maldives-1280.jpg";

const images = [
  {
    webformatURL: driplg,
    previewURL: drip,
  },
  {
    webformatURL: flowerslg,
    previewURL: flowers,
  },
  {
    webformatURL: treelg,
    previewURL: tree,
  },
  {
    webformatURL: mountainlg,
    previewURL: mountain,
  },
  {
    webformatURL: maldiveslg,
    previewURL: maldives,
  },
];

Modal.setAppElement("#root");

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  /* modal settings start */
  const [modal, setModal] = useState(false);
  const ModalStyle = {
    overlay: {
      backgroundColor: "black",
      padding: "0",
    },
    content: {
      margin: "auto",
      backgroundColor: "black",
      border: "none",
      top: "0",
      bottom: "0",
      overflow: "hidden",
    },
  };
  /* modal settings end */

  useEffect(() => {
    let slider = setInterval(() => {
      setActiveIndex((activeIndex) => {
        let newPointer = activeIndex + 1;
        return checkNumber(newPointer);
      });
    }, 5000);
    return () => {
      clearInterval(slider);
    };
  }, [activeIndex]);

  const checkNumber = (number) => {
    if (number > images.length - 1) {
      return 0;
    }
    if (number < 0) {
      return images.length - 1;
    }
    return number;
  };

  const slideLeftHandler = () => {
    const nextIndex = activeIndex - 1;
    if (nextIndex < 0) {
      setActiveIndex(images.length - 1);
    } else {
      setActiveIndex(nextIndex);
    }
  };

  const slideRightHandler = () => {
    setActiveIndex((activeIndex + 1) % images.length);
  };

  const thumbnailClickHandler = (index) => {
    setActiveIndex(index);
  };
  return (
    <div className="carousel-container">
      <div className="carousel-wrapper">
        <div className="title">
          <h1>Gallery</h1>
          <div className="underline"></div>
        </div>
        <ImageSlider
          images={images}
          activeIndex={activeIndex}
          slideLeftHandler={slideLeftHandler}
          slideRightHandler={slideRightHandler}
          thumbnailClickHandler={thumbnailClickHandler}
          height="14rem"
        />

        <div className="btn-full-screen">
          <FaExpand onClick={() => setModal(true)} />
        </div>

        {/* Modal code start */}
        <Modal
          isOpen={modal}
          onRequestClose={() => setModal(!modal)}
          style={ModalStyle}
        >
          <div className="modal-wrapper">
            <ImageSlider
              images={images}
              activeIndex={activeIndex}
              slideLeftHandler={slideLeftHandler}
              slideRightHandler={slideRightHandler}
              thumbnailClickHandler={thumbnailClickHandler}
              height="30rem"
            />
            <div className="btn-compress">
              <FaCompress onClick={() => setModal(false)} />
            </div>
          </div>
        </Modal>
        {/* Modal code end */}
      </div>
    </div>
  );
};

export default Carousel;
