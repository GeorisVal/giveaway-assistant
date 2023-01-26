export default function SecondaryButton({ type = 'button', className = '', processing, children, onClick }) {
    return (
        <button
            type={type}
            onClick={onClick}
            className={
                `text-white bg-warmpink-500 hover:bg-cream-500 hover:text-warmpink-500 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2-700 focus:outline-noneue-800
                focus:outline-none focus:ring-offset-2 disabled:opacity-25 transition ease-in-out duration-150 ${
                    processing && 'opacity-25'
                } ` + className
            }
            disabled={processing}
        >
            {children}
        </button>
    );
}
