import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import Pagination from '../components/Pagination';
import { Filter, SlidersHorizontal } from 'lucide-react';
import productsData from '../lib/products.json';

const ShopPage = () => {
  const [searchParams] = useSearchParams();

  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const [priceRange, setPriceRange] = useState([0, 300]);
  const [sortBy, setSortBy] = useState('default');

  const [currentPage, setCurrentPage] = useState(1);
  const [showFilters, setShowFilters] = useState(false);

  const productsPerPage = 8;

  // Load products on mount
  useEffect(() => {
    // Expecting productsData like: { products: [...], categories: [...] }
    setProducts(productsData.products || []);
    setCategories(productsData.categories || ['All']);
  }, []);

  // Filter and sort products when dependencies change
  useEffect(() => {
    let result = [...products];
    const searchQuery = (searchParams.get('search') || '').toLowerCase();

    // Apply search filter
    if (searchQuery) {
      result = result.filter((product) => {
        const name = (product.name || '').toLowerCase();
        const desc = (product.description || '').toLowerCase();
        const cat = (product.category || '').toLowerCase();
        return name.includes(searchQuery) || desc.includes(searchQuery) || cat.includes(searchQuery);
      });
    }

    // Apply category filter
    if (selectedCategory && selectedCategory !== 'All') {
      result = result.filter((product) => product.category === selectedCategory);
    }

    // Apply price range filter
    result = result.filter((product) => {
      const hasDiscount = product.discountPrice !== null && product.discountPrice !== undefined;
      const price = hasDiscount ? product.discountPrice : product.price;
      return price >= priceRange[0] && price <= priceRange[1];
    });

    // Apply sorting
    switch (sortBy) {
      case 'price-low-high':
        result.sort((a, b) => {
          const aPrice = a.discountPrice ?? a.price;
          const bPrice = b.discountPrice ?? b.price;
          return aPrice - bPrice;
        });
        break;
      case 'price-high-low':
        result.sort((a, b) => {
          const aPrice = a.discountPrice ?? a.price;
          const bPrice = b.discountPrice ?? b.price;
          return bPrice - aPrice;
        });
        break;
      case 'rating':
        result.sort((a, b) => (b.rating || 0) - (a.rating || 0));
        break;
      default:
        // Default sorting (newest first, using ID as proxy)
        result.sort((a, b) => (b.id || 0) - (a.id || 0));
    }

    setFilteredProducts(result);
    setCurrentPage(1); // Reset to first page when filters change
  }, [products, selectedCategory, priceRange, sortBy, searchParams]);

  // Get current page products
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage) || 1;

  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Reset all filters
  const resetFilters = () => {
    setSelectedCategory('All');
    setPriceRange([0, 300]);
    setSortBy('default');
    // Clear the "search" query param from URL
    const params = new URLSearchParams(searchParams);
    params.delete('search');
    window.history.replaceState({}, '', `${window.location.pathname}`);
  };

  return (
    <div className="container mx-auto mt-36 pb-10 max-w-[1200px]">
      {/* Shop Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2 sm:mb-0">Shop</h1>
          <p className="text-sm text-gray-500">
            Showing {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'}
          </p>
        </div>

        <div className="flex items-center space-x-2">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center text-gray-700 bg-white px-3 py-2 rounded-lg border border-gray-300 hover:bg-gray-50 md:hidden"
          >
            <Filter size={16} className="mr-2" />
            Filters
          </button>

          <div className="relative">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="appearance-none bg-white border border-gray-300 px-3 py-2 pr-8 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="default">Newest</option>
              <option value="price-low-high">Price: Low to High</option>
              <option value="price-high-low">Price: High to Low</option>
              <option value="rating">Best Rating</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <SlidersHorizontal size={16} />
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        {/* Filters Sidebar - Desktop */}
        <div className="hidden md:block w-64 flex-shrink-0">
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="mb-6">
              <h3 className="text-lg font-medium text-gray-900 mb-3">Categories</h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`block w-full text-left px-3 py-2 rounded-md ${
                      selectedCategory === category
                        ? 'bg-slate-800 text-white'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
            <button
              onClick={resetFilters}
              className="w-full px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition duration-200"
            >
              Reset Filters
            </button>
          </div>
        </div>

        {/* Mobile Filters - Shown when toggle is pressed */}
        {showFilters && (
          <div className="md:hidden bg-white p-4 rounded-lg shadow-sm mb-4">
            <div className="mb-6">
              <h3 className="text-lg font-medium text-gray-900 mb-3">Categories</h3>
              <div className="grid grid-cols-2 gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`text-left px-3 py-2 rounded-md ${
                      selectedCategory === category
                        ? 'bg-slate-800 text-white'
                        : 'text-gray-700 hover:bg-gray-100 border border-gray-200'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
            <div className="flex space-x-2">
              <button
                onClick={resetFilters}
                className="flex-1 px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition duration-200"
              >
                Reset
              </button>
            </div>
          </div>
        )}

        {/* Products Grid */}
        <div className="flex-1">
          {currentProducts.length > 0 ? (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {currentProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    id={product.id}
                    name={product.name}
                    image={product.image}
                    category={product.category}
                    rating={product.rating}
                    description={product.description}
                  />
                ))}
              </div>

              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
              />
            </>
          ) : (
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <div className="text-gray-400 mb-4">
                <Filter size={48} />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-1">No products found</h3>
              <p className="text-gray-500 mb-4">Try adjusting your filters or browse all products.</p>
              <button
                onClick={resetFilters}
                className="px-4 py-2 bg-slate-800 text-white rounded-md hover:bg-slate-700 transition duration-200"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ShopPage;
