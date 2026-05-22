const Loading = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">

            <div className="flex flex-col items-center gap-4">

                {/* Spinner */}
                <div className="w-14 h-14 border-4 border-gray-200 border-t-green-600 rounded-full animate-spin"></div>

                {/* Text */}
                <p className="text-gray-600 text-sm font-medium">
                    Loading cars...
                </p>

            </div>

        </div>
    );
};

export default Loading;