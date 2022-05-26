import React from "react";
import { Product, FooterBanner, HeroBanner } from "../components";
import { client } from "../lib/client";
const index = ({ products, bannerData }) => {
  return (
    <>
      <HeroBanner bannerData={bannerData.length && bannerData[0]} />
      <div className="products-heading">
        <h2> best selling products</h2>
        <p>Sports wear of diffrent variations </p>
      </div>
      <div className="products-container">
        {products?.map((product) => (
          <Product key={product._id} product={product}></Product>
        ))}
      </div>
      <FooterBanner footerBanner={bannerData && bannerData[0]}></FooterBanner>
    </>
  );
};
export const getServerSideProps = async () => {
  const query = '*[_type=="product"]';
  const products = await client.fetch(query);
  const bannerQuery = '*[_type=="banner"]';
  const bannerData = await client.fetch(bannerQuery);
  return {
    props: { products, bannerData },
  };
};
export default index;
