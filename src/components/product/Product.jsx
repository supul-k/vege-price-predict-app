export default function Product({ product }) {
    return (
        <div key={product.id} className="group relative">
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
            </div>
            <div className="mt-4 flex justify-between">
                <div>
                    <p className="mt-1 font-medium text-sm text-gray-500">{product.name}</p>
                    <div style={{ display: "flex", alignItems: "flex-end" }}>
                        <p className="mt-1 text-sm text-gray-500 mr-5">Today Price</p>
                        <p className="text-sm text-gray-900">{product.todayPrice}</p>
                    </div>
                    <div style={{ display: "flex", alignItems: "flex-end" }}>
                        <p className="mt-1 text-sm text-gray-500 mr-5">Tomorrow Price</p>
                        <p className="text-sm text-gray-900">{product.tomorrowPrice}</p>
                    </div>
                    <div style={{ display: "flex", alignItems: "flex-end" }}>
                        <p className="mt-1 text-sm text-gray-500 mr-5">Next Week Price</p>
                        <p className="text-sm text-gray-900">{product.tomorrowPrice}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}