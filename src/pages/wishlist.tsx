import useWishlistState from "../hooks/useWishlistState";
import ProductGrid from "../components/ProductGrid";

const WishlistPage = () => {
  const { hasItems, items } = useWishlistState();

  return (
    <>
      <div className="text-center py-12 md:pb-12">
        <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold">Wishlist</h1>
      </div>

      {hasItems ? (
        <div className="max-w-7xl mx-auto px-6 mb-24">
        <ProductGrid products={items} />
        </div>
      ) : (
        <p className="text-center text-gray-500">Your list is empty</p>
      )}
    </>
  );
};

export default WishlistPage;
