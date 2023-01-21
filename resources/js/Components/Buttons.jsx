import { Link } from '@inertiajs/react';

export default function Buttons({ href, active, children }) {
    return (
        <>
            <div className="my-4">
                <button type="button" className="text-white bg-lightgreen-500 hover:bg-lightgreen-500 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2-700 focus:outline-noneue-800">Donations</button>
                <button type="button" className="text-white bg-red-550 hover:bg-lightgreen-500 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2-700 focus:outline-noneue-800">No date!</button>
                <button type="button" className="text-white bg-lightgreen-500 hover:bg-lightgreen-500 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2-700 focus:outline-noneue-800">Scheduled giveaways</button>
            </div>
        </>
    );
}
