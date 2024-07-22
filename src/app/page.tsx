import Image from 'next/image';


export default function Home() {
  return (
    <div className="bg-[#FFF9F3]">
      <div className="container mx-auto px-4">
        <header className="flex justify-between items-center py-4">
          <div className="text-2xl font-bold text-yellow-400">FoodHouse</div>
          <nav>
            <ul className="flex space-x-6">
              <li><a href="#" className="text-yellow-400">HOME</a></li>
              <li><a href="#" className="text-gray-500">RESURNT</a></li>
              <li><a href="#" className="text-gray-500">SERVICS</a></li>
              <li><a href="#" className="text-gray-500">CART</a></li>
            </ul>
          </nav>
          <button className="text-gray-700">Sign In</button>
        </header>

        <main className="flex justify-between items-center py-12">
          <div className="w-1/2">
            <h1 className="text-5xl font-bold mb-4">
              Enjoy Delicious<br />
              Food in <span className="text-yellow-400">Helthy Life</span>
            </h1>
            <p className="mb-6 text-gray-600">
              Tandoori masala is an Indian spice blend consisting of a
              variety of spices Tandoori masala is an Indian spice blend
              consisting of a variety of spices
            </p>
            <button className="bg-yellow-400 text-white px-8 py-3 rounded-full font-bold">
              ORDER NOW
            </button>
          </div>
          <div className="w-1/2 relative">
            <Image 
              src="/Image/dish2.png" 
              alt="Roasted Chicken" 
              width={500} 
              height={500}
              className="rounded-full"
            />
          
        
          </div>
        </main>
      </div>
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-center text-gray-500 mb-2">Online Store</h2>
        <h1 className="text-center text-4xl font-bold mb-4">Popular Foods</h1>
        <div className="w-24 h-1 bg-yellow-400 mx-auto mb-8"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
            <div className="flex flex-col items-center"> 
              <Image 
                src="/Image/dish3.png" 
                alt="food"
                width={200} 
                height={200} 
                className="rounded-full mb-4"
              />
              <h3 className="font-semibold text-lg mb-1">Fruit dish</h3>
              <p className="text-gray-500 mb-2">Dinko Food</p>
              
              <button className="bg-yellow-400 text-white py-2 px-4 rounded-full">
                Add to Cart 
              </button>
             
            </div>
            <div className="flex flex-col items-center"> 

            <Image 
                src="/Image/dish4.png" 
                alt="food"
                width={200} 
                height={200} 
                className="rounded-full mb-4"
              />
              <h3 className="font-semibold text-lg mb-1">Fruit dish</h3>
              <p className="text-gray-500 mb-2">Dinko Food</p>
              <button className="bg-yellow-400 text-white py-2 px-4 rounded-full">
                Add to Cart 
              </button>
             
              </div>
              <div className="flex flex-col items-center"> 

                <Image 
                src="/Image/dish5.png" 
                alt="food"
                width={200} 
                height={200} 
                className="rounded-full mb-4"
              />
              <h3 className="font-semibold text-lg mb-1">Sea fish dish</h3>
              <p className="text-gray-500 mb-2">Dinko Food</p>
              <button className="bg-yellow-400 text-white py-2 px-4 rounded-full">
                Add to Cart 
              </button>
             
              </div>
              <div className="flex flex-col items-center"> 

                <Image 
                src="/Image/dish6.png" 
                alt="food"
                width={200} 
                height={200} 
                className="rounded-full mb-4"
              />
              <h3 className="font-semibold text-lg mb-1">Pizza</h3>
              <p className="text-gray-500 mb-2">Dinko Food</p>
              <button className="bg-yellow-400 text-white py-2 px-4 rounded-full">
                Add to Cart 
              </button>
              </div>
               
         
         </div> 
      </div>
      <div className="container mx-auto px-4 py-16">
        <div className="flex items-center justify-between">
          <div className="w-1/2">
            <div className="inline-block bg-yellow-400 text-white px-2 py-1 rounded-full mb-4">-50%</div>
            <h2 className="text-5xl font-bold mb-4">Our Special Offer</h2>
            <p className="text-gray-600 mb-6">
              Best cooks and best delivery guys all at your service. Hot tasty food will reach you in 60 minutes.
            </p>
            <button className="bg-yellow-400 text-white px-8 py-3 rounded-full font-bold flex items-center">
              See All Menu
            
            </button>
          </div>
          <div className="w-1/2 relative">
            <Image 
              src="/Image/dish7.png" 
              alt="Special Dish" 
              width={500} 
              height={500}
              className="rounded-full"
            />
            
           
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-center text-lg text-gray-600 mb-2">Quality Food</h2>
        <h1 className="text-center text-4xl font-bold mb-4">Get The Best Offers</h1>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          The food at your doorstep. Why starve when you have us. You hunger
          partner. Straight out of the oven to your doorstep.
        </p>
        
         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
            <div  className="bg-white rounded-lg shadow-md p-6 flex items-center">
              <div>
                <h3 className="font-bold text-xl mb-2">Any day offers</h3>
                <p className="text-gray-600 mb-4">New phenomenon burger taste</p>
                 <p className="text-yellow-400 font-bold text-xl">$12.90</p>
              </div>
              <div className="ml-auto">
                <Image 
                  src="/Image/dish6.png"
                  alt="title"
                  width={100} 
                  height={100} 
                  className="rounded-full"
                />
              </div>
            </div>
            <div  className="bg-white rounded-lg shadow-md p-6 flex items-center">
              <div>
                <h3 className="font-bold text-xl mb-2">Other flavours</h3>
                <p className="text-gray-600 mb-4">Save room we made salats</p>
                 <p className="text-yellow-400 font-bold text-xl">$12.90</p>
              </div>
              <div className="ml-auto">
                <Image 
                  src="/Image/dish6.png"
                  alt="title"
                  width={100} 
                  height={100} 
                  className="rounded-full"
                />
              </div>
            </div>
            <div  className="bg-white rounded-lg shadow-md p-6 flex items-center">
              <div>
                <h3 className="font-bold text-xl mb-2">Find a poco store near you</h3>
               
              </div>
              <div className="ml-auto">
                <Image 
                  src="/Image/dish6.png"
                  alt="title"
                  width={100} 
                  height={100} 
                  className="rounded-full"
                />
              </div>
            </div>
           
        </div> 
        </div>
      <h2 className="text-4xl font-bold text-center mb-12">Our Service</h2>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
<div className="flex flex-col items-center">
    <div className="w-16 h-16 mb-4">
      <Image src="/Image/icon1.png" alt="text" width={64} height={64} />
    </div>
    <p className="text-center">"55+ restaurants"</p>
  </div>

  <div className="flex flex-col items-center">
    <div className="w-16 h-16 mb-4">
      <Image src="/Image/icon2.png" alt="text" width={64} height={64} />
    </div>
    <p className="text-center">"Good quality"</p>
  </div>
  <div className="flex flex-col items-center">
    <div className="w-16 h-16 mb-4">
      <Image src="/Image/icon3.png" alt="Good quality" width={64} height={64} />
    </div>
    <p className="text-center">"Discount system"</p>
  </div>
  <div className="flex flex-col items-center">
    <div className="w-16 h-16 mb-4">
      <Image src="/Image/icon4.png" alt="text" width={64} height={64} />
    </div>
    <p className="text-center">"Fast delivery"</p>
  </div>
        </div>
      </div>

      <h2 className="text-center text-2xl font-semibold mb-2">Testimonial</h2>
      <h3 className="text-center text-4xl font-bold mb-8">What Our Clients Say</h3>
      <div className="max-w-3xl mx-auto text-center mb-12">
        <p className="text-gray-600 mb-8">
          dkddd ipsum doloodr  amet, consdmddd adimkkkkkkdelit, sddkddmod temddd incididunt
          ut labe et dole maliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo
        </p>
        <div className="flex justify-center space-x-2 mb-4">
        <Image src="/Image/person1.png" alt="ha" width={48} height={48} className="object-cover" />
        <Image src="/Image/person2.png" alt="ha" width={48} height={48} className="object-cover" />
        <Image src="/Image/person3.png" alt="ha" width={48} height={48} className="object-cover" />
        <Image src="/Image/person1.png" alt="ha" width={48} height={48} className="object-cover" />

        </div>
        <h4 className="font-semibold">Mitchell Marsh</h4>
        <p className="text-gray-500">CEO, Bexon Agency</p>
      </div>

    <div className="flex items-center justify-center min-h-screen bg-[#FFF5EB] p-8">
      <div className="flex flex-col md:flex-row items-center max-w-6xl mx-auto">
        
        <div className="md:w-1/2 mb-8 md:mb-0 flex justify-center">
          <Image
            src="/Image/phone.png"
            alt="Food delivery app mockup"
            width={180}
            height={5}
            className='lm-auto'
           
          />
        </div>

        
        <div className="md:w-1/2 md:pl-12">
          <h2 className="text-orange-400 font-semibold mb-2">Download Our App</h2>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            It's all here.<br />All in one app.
          </h1>
          <p className="text-gray-600 mb-8">
            Discover local, on-demand delivery or Pickup from restaurants, nearby grocery and convenience stores, and more.
          </p>

          
          <div className="flex space-x-4">
            <div className="bg-black text-white px-6 py-2 rounded-lg flex items-center ">
              <Image src="/Image/iphone.png"  width={24} height={24} />
              Download on the<br />App Store
            </div>
            <div className="bg-black text-white px-6 py-2 rounded-lg flex items-center">
              <Image src="/Image/playstore.png"  width={24} height={24}  />
              GET IT ON<br />Google Play
            </div>
          </div>
        </div>
      </div>
    </div>

  

    <div className="bg-[#FFF5EB]">
      
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div>
            <h2 className="text-3xl font-bold mb-2">Subscribe Our Newsletter</h2>
            <p className="text-gray-600">Subscribe on our newsletter to get our news</p>
          </div>
          <form className="mt-4 md:mt-0 flex">
            <input
              type="email"
              placeholder="Your email address.."
              className=" w-64"
            />
            <button className="bg-yellow-400 text-white px-6 py-2 rounded-r-lg flex items-center">
              Subscribe
             
            </button>
          </form>
        </div>
      

       

     
    <footer className="bg-black text-white p-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 bg-black">
        <div>
          <h2 className="text-2xl font-bold mb-4">FoodHouse<span className="text-orange-500">.</span></h2>
          <p className="mb-4">Best cooks and best delivery guys all at your service. Hot tasty food will reach you in 60 minutes.</p>
          <div className="flex space-x-4">
            <a>
              <img src="/Image/linkedin.png" alt="Facebook" className="w-6 h-6" />
            </a>
            <a >
              <img src="/Image/facebook.png" alt="Twitter" className="w-6 h-6" />
            </a>
            <a >
              <img src="/Image/twitter.png" alt="LinkedIn" className="w-6 h-6" />
            </a>
          </div>
        </div>
        
        <div>
          <h3 className="text-xl font-semibold mb-4">Company</h3>
          <div className="flex flex-col space-y-2">
            <a href="#">Career</a>
            <a href="#">About Us</a>
            <a href="#">Blog</a>
            <a href="#">Press Info</a>
            <a href="#">Features</a>
          </div>
        </div>
        
        <div>
          <h3 className="text-xl font-semibold mb-4">Fudo</h3>
          <div className="flex flex-col space-y-2">
            <a href="#">Why Fudo</a>
            <a href="#">How it Works</a>
            <a href="#">Why Choose Us</a>
            <a href="#">Client Stories</a>
            <a href="#">Gallery</a>
          </div>
        </div>
        
        <div>
          <h3 className="text-xl font-semibold mb-4">Menu</h3>
          <div className="flex flex-col space-y-2">
            <a>Breakfast</a>
            <a href="#">Lunch</a>
            <a href="#">Dinner</a>
            <a href="#">Fast Foods</a>
            <a href="#">Drinks</a>
          </div>
        </div>
      </div>
    </footer>
    </div>


    </div>
  );
}

