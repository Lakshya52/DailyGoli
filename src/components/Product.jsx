import React, { useState } from "react";
import {Star, ShoppingCart, Check, CheckCheck } from "lucide-react"

const Product = () => {
  const [selectedPurchase, setSelectedPurchase] = useState('monthly');
  const [selectedImage, setSelectedImage] = useState(0);

  const productImages = [
    '/productImages/product-1.png',
    '/productImages/product-2.png',
    '/productImages/product-3.png',
    '/productImages/product-4.png',
    '/productImages/product-5.png',
  ];

  const pricing = {
    oneTime: { price: 1499, label: 'One Time Purchase', savings: null },
    monthly: { price: 1299, label: 'Monthly Subscription', savings: '13% off' }
  };

  const benefits = [
    'Fast Delivery',
    'Free Shipping',
    '100% Authentic',
    'Money-back Guarantee'
  ];
  return (
    <>
      {/* wrapper */}
      <div
        id="product"
        className="min-h-dvh flex items-center justify-start flex-col py-20 "
      >
        <div className="flex flex-col items-center justify-center gap-2 ">
          <div className="font-lex-reg rounded-full h-10 px-4 bg-(--color-primary) text-(--white) flex items-center justify-center">
            Hurry Up
          </div>
          <h1 className="text-[65px] text-(--color-primary) font-lex-reg text-center leading-18 mb-5">
            Limited Time Offer! <br /> Save Up To 22% on Your First Order!
          </h1>
          <p className="font-lex-reg text-(--color-primary) text-xl">
            "Inspired by Science. Powered by Plants."
          </p>
          <span className="flex text-(--color-primary) font-lex-reg text-xl" >
            4.8 stars | 85k Reviews | <b>&nbsp;1K+ Monthly Subscribers</b>

          </span>
          <span className="font-lex-reg text-(--color-primary) text-xl">
            Use code <b>DAILYGOLI22</b> at checkout to claim your discount.
          </span>
        </div>

        {/* product purchasing section */}
        <div className="w-[70%] mt-15 flex gap-12 items-start justify-between">
          
          {/* Image Gallery - Left Side */}
          <div className="w-1/2 flex flex-col gap-4">
            {/* Main Image */}
            <div className="w-full aspect-square bg-(--bg-light) rounded-2xl overflow-hidden flex items-center justify-center border-2 border-(--color-primary)">
              <img 
                src={productImages[selectedImage]} 
                alt="Product" 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Thumbnail Gallery */}
            <div className="flex gap-3">
              {productImages.map((image, index) => (
                <div
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`w-20 h-20 rounded-lg cursor-pointer overflow-hidden border-2 transition-all duration-300 ${
                    selectedImage === index
                      ? 'border-(--color-primary) scale-110'
                      : 'border-(--bg-light) hover:border-(--color-primary)'
                  }`}
                >
                  <img 
                    src={image} 
                    alt={`Product ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product Details - Right Side */}
          <div className="w-1/2 flex flex-col gap-6">
            
            {/* Product Title */}
            <div>
              <h2 className="text-4xl font-lex-reg text-(--color-primary) mb-2">
                DAILY GOLI METABOLIC BALANCE-360, BODY WEIGHT MANAGEMENT | 60 CAPSULES 
              </h2>
              <p className="text-lg text-(--color-primary) opacity-70">
                Premium Metabolic Balance Formula
              </p>
            </div>

            {/* Ratings */}
            <div className="flex items-center gap-3">
              <div className="flex gap-1 text-(--color-primary)">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" />
                ))}
              </div>
              <span className="text-(--color-primary) font-lex-reg">
                4.8 • 1000+ Reviews
              </span>
            </div>

            {/* Purchase Type Toggle */}
            <div className="flex gap-3 bg-(--bg-light) p-1 rounded-full w-fit">
              
              <button
                onClick={() => setSelectedPurchase('monthly')}
                className={`px-6 py-3 rounded-full font-lex-reg transition-all duration-300 relative cursor-pointer border border-(--color-primary) ${
                  selectedPurchase === 'monthly'
                    ? 'bg-(--color-primary) text-(--white)'
                    : 'text-(--color-primary) hover:bg-(--white)'
                }`}
              >
                Monthly Subscription
                {selectedPurchase === 'monthly' && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-(--white) text-xs px-2 py-1 rounded-full">
                    {pricing.monthly.savings}
                  </span>
                )}
              </button>
              <button
                onClick={() => setSelectedPurchase('oneTime')}
                className={`px-6 py-3 rounded-full font-lex-reg transition-all duration-300 border border-(--color-primary) cursor-pointer ${
                  selectedPurchase === 'oneTime'
                    ? 'bg-(--color-primary) text-(--white)'
                    : 'text-(--color-primary) hover:bg-(--white)'
                }`}
              >
                One Time
              </button>
            </div>

            {/* Pricing */}
            <div className="bg-(--bg-light) rounded-2xl">
              <p className="text-(--color-primary) opacity-60 text-sm mb-2">
                {pricing[selectedPurchase].label}
              </p>
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-5xl font-lex-reg text-(--color-primary)">
                  ₹{pricing[selectedPurchase].price}
                </span>
                {selectedPurchase === 'monthly' && (
                  <span className="text-(--color-primary) opacity-50 line-through">
                    ₹1499
                  </span>
                )}
              </div>
              <p className="text-sm text-(--color-primary) opacity-50">
                {selectedPurchase === 'monthly' 
                  ? 'Cancel anytime, no hidden charges'
                  : 'One-time payment, free shipping'}
              </p>
            </div>

            {/* Benefits */}
            <div className="flex flex-wrap gap-3">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-2 text-(--color-primary)">
                  <div className="w-5 h-5 rounded-full bg-(--color-primary) flex items-center justify-center">
                    <Check size={14} className="text-(--white)" />
                  </div>
                  <span className="text-sm font-lex-reg">{benefit}</span>
                </div>
              ))}
            </div>


<div className="flex gap-4">

            {/* buy now Button */}
            <button className="w-full py-4 bg-(--white) text-(--color-primary) rounded-xl font-lex-reg text-lg hover:bg-opacity-90 transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer hover:bg-(--accent) hover:text-(--color-primary) border border-(--color-primary) ">
              <ShoppingCart size={20} className="group-hover:scale-110 transition-transform" />
              Add to Cart
            </button>
  
            {/* Add to Cart Button */}
            <button className="w-full py-4 bg-(--color-primary) text-(--white) rounded-xl font-lex-reg text-lg hover:bg-opacity-90 transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer hover:bg-(--accent) hover:text-(--color-primary) border border-(--color-primary)">
              {/* <ShoppingCart size={20} className="group-hover:scale-110 transition-transform" /> */}
              Buy Now
            </button>
</div>

            {/* Product Features */}
            <div className="bg-(--bg-light) rounded-2xl space-y-3">
              <div className="flex gap-3 items-start justify-start">
                <CheckCheck  size={20}  className="min-h-10 max-h-10 text-(--color-primary) " />
                <p className="text-(--color-primary) text-xl font-lex-reg">GLP-1 Pathway Science Inspired — 6 <br /> clinically studied botanical ingredients</p>
              </div>
              <div className="flex gap-3 items-start justify-start">
                <CheckCheck  size={20}  className="min-h-10 max-h-10 text-(--color-primary) " />
                <p className="text-(--color-primary) text-xl font-lex-reg">Supports and control your appetite <br /> & reduces sugar cravings naturally in your body</p>
              </div>
              <div className="flex gap-3 items-start justify-start">
                <CheckCheck  size={20}  className="min-h-10 max-h-10 text-(--color-primary) " />
                <p className="text-(--color-primary) text-xl font-lex-reg">Berberine + Chromium for healthy blood <br /> sugar and metabolism support</p>
              </div>
              <div className="flex gap-3 items-start justify-start">
                <CheckCheck  size={20}  className="min-h-10 max-h-10 text-(--color-primary) " />
                <p className="text-(--color-primary) text-xl font-lex-reg">Inulin prebiotic for gut health and <br /> sustained energy</p>
              </div>
              <div className="flex gap-3 items-start justify-start">
                <CheckCheck  size={20}  className="min-h-10 max-h-10 text-(--color-primary) " />
                <p className="text-(--color-primary) text-xl font-lex-reg">100% Veg Capsules | No artificial additives <br /> | FSSAI approved</p>
              </div>
            </div>


            {/* Trust Badges */}
            <div className="pt-4 border-t border-(--bg-light) flex items-center justify-center gap-4 text-xs text-(--color-primary) opacity-60">
              <span>🔒 Secure Checkout</span>
              <span>🚚 Ships in 24 Hours</span>
              <span>✓ Verfied Sellers</span>
            </div>

          </div>

        </div>
        
        {/* us vs them section */}
        <div className="w-[70%] mt-20 flex flex-col gap-8">
          
          {/* Section Header */}
          <div className="flex flex-col items-center justify-center gap-3">
            <h2 className="text-5xl font-lex-reg text-(--color-primary) text-center leading-14">
              Same price. Double the capsules. <br /> More ingredients. The choice is clear.
            </h2>
          </div>

          {/* Comparison Table */}
          <div className="overflow-x-auto rounded-2xl border border-(--bg-light)">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-(--bg-light)">
                  <th className="p-6 text-left text-(--color-primary) font-lex-reg text-lg border-b border-(--bg-light)"></th>
                  <th className=" bg-(--color-primary) text-(--accent) p-6 text-left  font-lex-reg text-lg border-b border-(--bg-light) rounded-tr-2xl rounded-tl-2xl">✦ Daily Goli MB-360</th>
                  <th className="p-6 text-left text-(--color-primary) font-lex-reg text-lg border-b border-l border-(--bg-light)">Other GLP-1 Brands</th>
                  <th className="p-6 text-left text-(--color-primary) font-lex-reg text-lg border-b border-l border-(--bg-light)">Generic Supplements</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-(--bg-light) hover:bg-(--bg-light) transition-colors">
                  <td className="p-6 text-(--color-primary) font-lex-reg">
                    <span className="font-semibold">Price</span>
                  </td>
                  <td className="p-6 bg-(--color-primary) text-(--accent) font-lex-reg border-l border-(--bg-light)">₹1,499</td>
                  <td className="p-6 text-(--color-primary) font-lex-reg border-l border-(--bg-light)">₹1,499</td>
                  <td className="p-6 text-(--color-primary) font-lex-reg border-l border-(--bg-light)">₹999–₹1,299</td>
                </tr>
                <tr className="border-b border-(--bg-light) hover:bg-(--bg-light) transition-colors">
                  <td className="p-6 text-(--color-primary) font-lex-reg">
                    <span className="font-semibold">Capsules</span>
                  </td>
                  <td className="p-6 bg-(--color-primary) text-(--accent) font-lex-reg border-l border-(--bg-light)">60 Capsules</td>
                  <td className="p-6 text-(--color-primary) font-lex-reg border-l border-(--bg-light)">30 Capsules</td>
                  <td className="p-6 text-(--color-primary) font-lex-reg border-l border-(--bg-light)">30–60 Capsules</td>
                </tr>
                <tr className="border-b border-(--bg-light) hover:bg-(--bg-light) transition-colors">
                  <td className="p-6 text-(--color-primary) font-lex-reg">
                    <span className="font-semibold">Value/Day</span>
                  </td>
                  <td className="p-6 bg-(--color-primary) text-(--accent) font-lex-reg border-l border-(--bg-light) ">₹50/day</td>
                  <td className="p-6 text-(--color-primary) font-lex-reg border-l border-(--bg-light)">₹100/day</td>
                  <td className="p-6 text-(--color-primary) font-lex-reg border-l border-(--bg-light)">₹33–₹100</td>
                </tr>
                <tr className="border-b border-(--bg-light) hover:bg-(--bg-light) transition-colors">
                  <td className="p-6 text-(--color-primary) font-lex-reg">
                    <span className="font-semibold">Berberine HCl</span>
                  </td>
                  <td className="p-6 bg-(--color-primary) text-(--accent) font-lex-reg border-l border-(--bg-light) ">✓ 296mg</td>
                  <td className="p-6 text-(--color-primary) font-lex-reg border-l border-(--bg-light)">✗ Not Present</td>
                  <td className="p-6 text-(--color-primary) font-lex-reg border-l border-(--bg-light)">✗ Usually Not</td>
                </tr>
                <tr className="border-b border-(--bg-light) hover:bg-(--bg-light) transition-colors">
                  <td className="p-6 text-(--color-primary) font-lex-reg">
                    <span className="font-semibold">CQR-300</span>
                  </td>
                  <td className="p-6 bg-(--color-primary) text-(--accent) font-lex-reg border-l border-(--bg-light) ">✓ 296mg</td>
                  <td className="p-6 text-(--color-primary) font-lex-reg border-l border-(--bg-light)">✓ Present</td>
                  <td className="p-6 text-(--color-primary) font-lex-reg border-l border-(--bg-light)">✗ Rarely</td>
                </tr>
                <tr className="border-b border-(--bg-light) hover:bg-(--bg-light) transition-colors">
                  <td className="p-6 text-(--color-primary) font-lex-reg">
                    <span className="font-semibold">Inulin Prebiotic</span>
                  </td>
                  <td className="p-6 bg-(--color-primary) text-(--accent) font-lex-reg border-l border-(--bg-light) ">✓ 112mg</td>
                  <td className="p-6 text-(--color-primary) font-lex-reg border-l border-(--bg-light)">✗ Not Present</td>
                  <td className="p-6 text-(--color-primary) font-lex-reg border-l border-(--bg-light)">✗ Rarely</td>
                </tr>
                <tr className="border-b border-(--bg-light) hover:bg-(--bg-light) transition-colors">
                  <td className="p-6 text-(--color-primary) font-lex-reg">
                    <span className="font-semibold">Total Ingredients</span>
                  </td>
                  <td className="p-6 bg-(--color-primary) text-(--accent) font-lex-reg border-l border-(--bg-light) ">6 Active</td>
                  <td className="p-6 text-(--color-primary) font-lex-reg border-l border-(--bg-light)">4 Ingredients</td>
                  <td className="p-6 text-(--color-primary) font-lex-reg border-l border-(--bg-light)">2–3 Ingredients</td>
                </tr>
                <tr className="hover:bg-(--bg-light) transition-colors">
                  <td className="p-6 text-(--color-primary) font-lex-reg">
                    <span className="font-semibold">WHO-GMP Certified</span>
                  </td>
                  <td className="p-6 bg-(--color-primary) text-(--accent) font-lex-reg border-l border-(--bg-light)  rounded-br-2xl rounded-bl-2xl">✓ Yes</td>
                  <td className="p-6 text-(--color-primary) font-lex-reg border-l border-(--bg-light)">Unspecified</td>
                  <td className="p-6 text-(--color-primary) font-lex-reg border-l border-(--bg-light)">Varies</td>
                </tr>
              </tbody>
            </table>
          </div>

        </div>
      </div>
    </>
  );
};

export default Product;
