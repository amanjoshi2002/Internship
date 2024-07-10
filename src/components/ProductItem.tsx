import React from 'react';
import { Link } from 'react-router-dom';

interface ProductItemProps {
  id: string;
  image: string;
  category: string;
  title: string;
  price: string;
}

const ProductItem: React.FC<ProductItemProps> = ({ id, image, category, title, price }) => {
  return (
    <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
      <a className="block relative h-48 rounded overflow-hidden">
        <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={image} />
      </a>
      <div className="mt-4">
        <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{category}</h3>
        <h2 className="text-gray-900 title-font text-lg font-medium">{title}</h2>
        <p className="mt-1">{price}</p>
        <Link to={`/product/${id}`} className="mt-3 text-indigo-500 inline-flex items-center">
          Full View
          <svg 
            className="w-4 h-4 ml-2" 
            fill="none" 
            stroke="currentColor" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="2" 
            viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default ProductItem;
