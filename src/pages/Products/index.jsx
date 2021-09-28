import { Card } from "../../components/Card";
import productImg from "../../assets/product-img.png";
import { Container, Content } from "./styles";
import { useState } from "react";

export const Products = () => {
  const productsFake = [
    {
      id: 0,
      title:
        "Monitor LED 27'' Gamer Curvo Samsung  1920 x 1080 FHD 240 Hz HDMI, DP, Gsync Série CRG50",
      price: 2599,
      discount: 2813,
      img_url: productImg,
      isFavorite: false,
    },
    {
      id: 1,
      title:
        "Monitor LED 27'' Gamer Curvo Samsung  1920 x 1080 FHD 240 Hz HDMI, DP, Gsync Série CRG50",
      price: 2599,
      discount: 2813,
      img_url: productImg,
      isFavorite: true,
    },
  ];

  const [products, setProducts] = useState(productsFake);

  const handleFavorite = (id) => {
    let updateFavorite = products.map((product) => {
      if (product.id === id) {
        product.isFavorite = !product.isFavorite;
      }
      return product;
    });

    setProducts(updateFavorite);
  };

  const renderProducts = () => {
    const item = products.map((item, index) => (
      <Card
        handleFavorite={handleFavorite}
        isFavorite={item.isFavorite}
        id={item.id}
        key={index}
        title={item.title}
        discount={item.discount}
        price={item.price}
        imgUrl={item.img_url}
      />
    ));

    return <Content>{item}</Content>;
  };

  return <Container>{renderProducts()}</Container>;
};
