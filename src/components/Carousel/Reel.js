import Thumbnail from "./Thumbnail";

const Reel = ({ images, activeIndex, thumbnailClickHandler }) => {
  return (
    <div className="reel-container">
      {images.map((thumbnail, index) => {
        if (activeIndex === index) {
          return (
            <div key={index} className="active-thumbnail">
              <Thumbnail
                thumbnailUrl={thumbnail.previewURL}
                index={index}
                thumbnailClickHandler={thumbnailClickHandler}
              />
            </div>
          );
        }
        return (
          <Thumbnail
            key={index}
            thumbnailUrl={thumbnail.previewURL}
            index={index}
            thumbnailClickHandler={thumbnailClickHandler}
          />
        );
      })}
    </div>
  );
};

export default Reel;
