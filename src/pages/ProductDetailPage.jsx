import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import {
  Heart,
  ChevronRight,
  Star,
  ArrowLeft,
  MinusCircle,
  PlusCircle,
  Share2,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import productsData from "../lib/products.json";
import { RWebShare } from "react-web-share";

const fadeIn = {
  hidden: { opacity: 0, y: 8 },
  show: { opacity: 1, y: 0, transition: { duration: 0.35, ease: "easeOut" } },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.98 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.35, ease: "easeOut" } },
};

const ProductDetailPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const numericId = Number(id);
      const foundProduct =
        (productsData.products || []).find((p) => p.id === numericId) || null;

      if (foundProduct) {
        setProduct(foundProduct);
        setSelectedImage(
          (foundProduct.images && foundProduct.images[0]) ||
            foundProduct.image ||
            ""
        );
        setSelectedColor((foundProduct.colors && foundProduct.colors[0]) || "");
      }

      setLoading(false);
    }, 250);

    return () => clearTimeout(timeout);
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Product Not Found</h2>
        <p className="text-gray-600 mb-6">
          The product you're looking for doesn't exist or has been removed.
        </p>
        <Link
          to="/"
          className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-200"
        >
          <ArrowLeft size={16} className="mr-2" />
          Back to Shop
        </Link>
      </div>
    );
  }

  const ratingStars = Array.from({ length: 5 });

  return (
    <motion.div
      className="container mx-auto mt-28 max-w-[1200px] px-4 py-10"
      initial="hidden"
      animate="show"
      variants={fadeIn}
    >
      {/* Breadcrumbs */}
      <div className="flex items-center text-sm text-slate-500 mb-6">
        <Link to="/" className="hover:text-blue-700 transition-colors">Home</Link>
        <ChevronRight size={16} className="mx-2" />
        <Link to="/products" className="hover:text-blue-700 transition-colors">
          {product.category}
        </Link>
        <ChevronRight size={16} className="mx-2" />
        <span className="text-slate-900 font-medium">{product.name}</span>
      </div>

      <motion.div
        className="bg-white rounded-xl shadow-md ring-1 ring-slate-100 overflow-hidden"
        variants={scaleIn}
      >
        <div className="flex flex-col lg:flex-row">
          {/* Product Images */}
          <div className="lg:w-1/2">
            <div className="relative h-80 sm:h-96 lg:h-[520px] overflow-hidden bg-slate-50">
              <AnimatePresence mode="wait">
                <motion.img
                  key={selectedImage}
                  src={selectedImage}
                  alt={product.name}
                  className="w-full h-full object-contain"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.3 }}
                />
              </AnimatePresence>
            </div>

            <div className="p-4 border-t border-slate-100">
              <div className="flex gap-2 overflow-x-auto pb-2">
                {(product.images || [product.image]).map((img, index) => (
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    key={index}
                    onClick={() => setSelectedImage(img)}
                    className={`w-16 h-16 rounded-md overflow-hidden flex-shrink-0 border-2 ${
                      selectedImage === img
                        ? "border-blue-600"
                        : "border-transparent"
                    } bg-white`}
                  >
                    <img
                      src={img}
                      alt={`${product.name} view ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </motion.button>
                ))}
              </div>
            </div>
          </div>

          {/* Product Information */}
          <div className="lg:w-1/2 p-6 lg:p-8">
            <div className="text-xs uppercase tracking-wide text-blue-700/80 font-semibold mb-2">
              {product.category}
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3">
              {product.name}
            </h1>

            <div className="flex items-center mb-5">
              <div className="flex items-center">
                {ratingStars.map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className={`${
                      i < Math.floor(product.rating || 0)
                        ? "text-amber-500 fill-amber-500"
                        : "text-slate-300"
                    }`}
                  />
                ))}
              </div>
              <span className="text-slate-600 ml-2">{product.rating} rating</span>
            </div>

            <p className="text-slate-700 mb-6 leading-relaxed">
              {product.description}
            </p>

            {/* Actions */}
            <div className="flex items-center justify-between border-t border-slate-200 pt-6">
              <RWebShare
                data={{
                  text: `Check out ${product.name}`,
                  url: typeof window !== "undefined" ? window.location.href : "",
                  title: "Share Product",
                }}
                onClick={() => console.log("Shared successfully!")}
              >
                <button className="flex items-center text-blue-700 hover:text-blue-800 bg-blue-50 px-4 py-2 rounded-full transition-colors">
                  <Share2 size={18} className="mr-2" />
                  Share
                </button>
              </RWebShare>

              <Link
                to="/contact"
                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors font-medium"
              >
                Contact us
              </Link>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <motion.div
          className="border-t border-slate-200 p-6 lg:p-8 bg-white"
          variants={fadeIn}
        >
          <h2 className="text-lg font-bold text-slate-900 mb-4">Key Features</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {(product.features || []).map((feature, index) => (
              <motion.li
                key={index}
                className="flex items-start"
                initial={{ opacity: 0, x: -8 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.25, delay: index * 0.03 }}
              >
                <div className="flex-shrink-0 h-5 w-5 rounded-full bg-blue-600 flex items-center justify-center mr-2">
                  <span className="text-[10px] font-bold text-white">✓</span>
                </div>
                <span className="text-slate-700">{feature}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default ProductDetailPage;
