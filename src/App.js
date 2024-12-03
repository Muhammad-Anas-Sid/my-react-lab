import React from 'react';
import './components/ProductCard.css';
import ProductCard from './components/ProductCard';


function App() {
  
  return (
    <div>
      <ProductCard
      title="Pro Smart Watch" 
      price = {109.99} 
      imageUrl = "https://www.ratdin.pk/cdn/shop/products/s9-max-smart-watch-219-always-on-time-display-601287.jpg?v=1708259286"
      description="The new S9 Pro Smart Watch offers a sleek design, vibrant UI, fitness tracking, and more, all on a 2.19-inch screen with a 2000 mAh battery." 
      />
      <ProductCard
      title="Wireless Headphones"
      price={200}
      imageUrl = "https://powerhouseexpress.com.pk/cdn/shop/files/space-le-30-headphone-2.jpg?v=1715688223"
      description="Noise-cancelling, over-ear headphones"
      />
       <ProductCard
      title="Ronin R740 Earbuds"
      price={99.99}
      imageUrl = "https://vmart.pk/wp-content/uploads/2024/07/Ronin-R-740-EarBuds.jpg"
      description="User-friendly ear-buds with touch-sensor and a noise-cancelling mode"
      />
    </div>
  );
}

export default App;