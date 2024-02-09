import ThumbOne from "../assets/image-product-1-thumbnail.jpg";
import AssetsOne from "../assets/image-product-1.jpg";
import ThumbTwo from "../assets/image-product-2-thumbnail.jpg";
import AssetsTwo from "../assets/image-product-2.jpg";
import ThumbThree from "../assets/image-product-3-thumbnail.jpg";
import AssetsThree from "../assets/image-product-3.jpg";
import ThumbFour from "../assets/image-product-4-thumbnail.jpg";
import AssetsFour from "../assets/image-product-4.jpg";
import ImageGallery from "react-image-gallery"

const LeftSlide = () => {

    const images = [
      {
        original: AssetsOne,
        thumbnail: ThumbOne,
      },
      {
        original: AssetsTwo,
        thumbnail: ThumbTwo,
      },
      {
        original: AssetsThree,
        thumbnail: ThumbThree,
      },
      {
        original: AssetsFour,
        thumbnail: ThumbFour,
      },
    ];

  return (
    <ImageGallery items={images} />
  )
}

export default LeftSlide