import { Link, Head } from '@inertiajs/react';
import NavLink from '@/Components/NavLink';
// import Footer from '@/Components/Footer';

export default function DonorRegister(props) {
    return (
        <>
        <Head title="Winner Registration" />
        <div className='mx-20'>
        <header>
        <NavLink></NavLink>
        </header>
        <main>
            <form className="mx-52 mt-10 sm:max-xl:mb-10 sm:max-xl:mx-0">
                <div className="mb-6">
                    <label for="username" className="block mb-2 text-sm font-medium text-gray-900">NA Username or Discord ID</label>
                    <input type="text" id="username" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.50y-600r-gray-400-blue-500er-blue-500" placeholder="Username" required></input>
                </div>
                <div className="mb-6">
                    <label for="email" className="block mb-2 text-sm font-medium text-gray-900">email (optional)</label>
                    <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.50y-600r-gray-400-blue-500er-blue-500" placeholder="email"></input>
                </div>
                <p className="block mb-2 text-sm font-medium text-gray-900">Preferred time for the exchange</p>
                <div className='flex flex-row justify-between'>
                    <div className="mb-6 w-full mr-2">
                        <label for="date"  className="block mb-2 text-sm font-medium text-gray-900"></label>
                        <input type="date" id="date" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.50y-600r-gray-400-blue-500er-blue-500" placeholder="" required></input>
                    </div>
                    <div className="mb-6 w-full mr-2">
                        <label for="time" className="block mb-2 text-sm font-medium text-gray-900"></label>
                        <input type="time" id="time" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.50y-600r-gray-400-blue-500er-blue-500" placeholder="" required></input>
                    </div>
                </div>
                <div className="mb-6">
                    <p className="block mb-2 text-sm font-medium text-gray-900">Preferred way to be contacted</p>
                    <div className="flex flex-col">
                        <div>
                            <input type="radio" id="discord" name="fav_platform" value="discord"></input>
                            <label for="discord" className='pl-2'>Discord</label>
                        </div>
                        <div>
                            <input type="radio" id="nookazon" name="fav_platform" value="nookazon"></input>
                            <label for="nookazon" className='pl-2'>Nookazon</label>
                        </div>
                    </div>
                </div>
                <button type="submit" className="text-white bg-sapin-500 hover:bg-lightgreen-500 hover:text-sapin-500 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center0lue-700-blue-800">Submit</button>
            </form>
        </main>
        {/* <Footer></Footer> */}
        </div>
        </>
    );
}
