export default function Loading() {
    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">

            <div className="flex flex-col items-center gap-5">

                {/* Spinner */}
                <div className="relative">

                    <div className="w-16 h-16 border-4 border-gray-200 rounded-full"></div>

                    <div className="absolute top-0 left-0 w-16 h-16 border-4 border-green-600 border-t-transparent rounded-full animate-spin"></div>

                </div>

                {/* Text */}
                <div className="text-center">
                    <h2 className="text-lg font-semibold text-black">
                        Loading Cars
                    </h2>

                    <p className="text-sm font-medium text-gray-500 mt-1 italic">
                        Please wait — something exciting is coming...
                    </p>
                </div>

            </div>

        </div>
    );
}
