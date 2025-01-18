export default function Card({children}) {
    return (
        <div className="bg-white shadow-md shadow-gray-400 rounded-md p-4 mb-3">
            {children}
        </div>
    );
}