import { Head, useForm } from '@inertiajs/react';
import NavLink from '@/Components/NavLink';
import Footer from '@/Components/Footer';
import moment from "moment/moment";


export default function DonorRegister() {
    const { data, setData, post, processing } = useForm({
        nookazon_username: '',
        discord_username: '',
        appointment_date: '',
        appointment_time: '',
        contact_method: '',
    })

    function submit(e) {
        e.preventDefault();
        post('/appointments')
    }

    const today = moment(new Date()).format("YYYY-MM-DD");
    return (
        <>
        <Head title="Donor Registration" />
        <div className='mx-20'>
        <header>
        <NavLink></NavLink>
        </header>
        <main>
            <form className="mx-52 mt-10 mb-10 sm:max-xl:mb-10 sm:max-xl:mx-0" onSubmit={submit}>
                <div className="mb-6">
                    <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900">Nookazon Username</label>
                    <input type="text" id="username" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.50y-600r-gray-400-blue-500er-blue-500" placeholder="Username" value={data.nookazon_username} onChange={e => setData('nookazon_username', e.target.value)} />
                </div>
                <div className="mb-6">
                    <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900">Discord Username</label>
                    <input type="text" id="username"
                           className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.50y-600r-gray-400-blue-500er-blue-500"
                           placeholder="Username" value={data.discord_username} onChange={e => setData('discord_username', e.target.value)} />
                </div>
                <div className="mb-6">
                    <label for="email" className="block mb-2 text-sm font-medium text-gray-900">email (optional)</label>
                    <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.50y-600r-gray-400-blue-500er-blue-500" placeholder="email" />
                </div>
                <p className="block mb-2 text-sm font-medium text-gray-900">Preferred date & time for the exchange</p>
                <div className='flex flex-row justify-between'>
                    <div className="mb-6 w-full mr-2">
                        <label htmlFor="date" className="block mb-2 text-sm font-medium text-gray-900"></label>
                        <input type="date" id="date" min={today} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.50y-600r-gray-400-blue-500er-blue-500" placeholder="" required value={data.appointment_date} onChange={e => setData('appointment_date', e.target.value)} />
                    </div>
                    <div className="mb-6 w-full mr-2">
                        <label htmlFor="time" className="block mb-2 text-sm font-medium text-gray-900"></label>
                        <input type="time" id="time" min="13:00" max="21:30" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.50y-600r-gray-400-blue-500er-blue-500" placeholder="" required value={data.appointment_time} onChange={e => setData('appointment_time', e.target.value)} />
                    </div>
                </div>
                <div className="mb-6">
                    <p className="block mb-2 text-sm font-medium text-gray-900">Preferred way to be contacted</p>
                    <div className="flex flex-col">
                        <div>
                            <input type="radio" id="discord" name="fav_platform" value="Discord" onChange={e => setData('contact_method', e.target.value)} />
                            <label htmlFor="discord" className='pl-2'>Discord</label>
                        </div>
                        <div>
                            <input type="radio" id="website" name="fav_platform" value="Website" onChange={e => setData('contact_method', e.target.value)} />
                            <label htmlFor="website" className='pl-2'>Website</label>
                        </div>
                    </div>
                </div>
                <button type="submit" disabled={processing} className="text-white bg-sapin-500 hover:bg-lightgreen-500 hover:text-sapin-500 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center0lue-700-blue-800">Submit</button>
            </form>
        </main>
        <Footer></Footer>
        </div>
        </>
    );
}
