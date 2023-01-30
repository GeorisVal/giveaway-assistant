import { Link } from '@inertiajs/react';
import Dropdown from "@/Components/Dropdown";
import PrimaryButton from '@/Components/PrimaryButton';
import SecondaryButton from '@/Components/SecondaryButton';

export default function NavLink(props) {
    if(props.auth.user != null) {
        console.log(props);
        return (
            <>
                <nav className="bg-white border-gray-200 py-2.5 rounded">
                    <div className="flex flex-wrap items-center w-full sm:max-xl:flex-col sm:max-xl:items-start">
                        <div className="flex sm:max-xl:flex-col">
                            <Link href="/" className="flex items-center sm:max-xl:my-5">
                                <img src="ga.png" class="h-20 mr-3 sm:max-xl:hidden" alt="logo"/>
                                <span
                                    className="self-center text-xl font-semibold whitespace-nowrap hidden sm:max-xl:block">Giftaway</span>
                            </Link>
                            <Link href="/DonorRegistration"
                                  className="sm:max-xl:my-2 flex items-center hover:text-sapin-500">
                                <span
                                    className="sm:max-xl:p-0 p-4 mt-4 border border-gray-100 rounded-xl bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white"><i
                                    className="fa-regular fa-square-plus px-2"></i>Give an item</span>
                            </Link>
                            <Link href="/" className="flex items-center sm:max-xl:mb-2 hover:text-sapin-500">
                                <span
                                    className="mt-4 border border-gray-100 rounded-xl bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white"><i
                                    className="fa-solid fa-calendar-days px-2"></i>View calendar</span>
                            </Link>
                        </div>
                        <form className="mx-auto sm:max-xl:mx-0">
                            <label htmlFor="default-search" className="mb-2 text-sm font-medium text-black-550 sr-only"><i
                                className="fa-solid fa-magnifying-glass"></i></label>
                            <div className="relative sm:max-xl:mb-2">
                                <input type="search" id="default-search"
                                       className="block w-full p-2 pl-5 text-sm text-black-550 border border-gray-300 rounded-xl bg-gray-50"
                                       placeholder="Search..." required/>
                                <button type="submit"
                                        className="text-white absolute right-1 bottom-1 bg-sapin-500 hover:text-sapin-500 hover:bg-lightgreen-500 focus:ring-4 font-medium rounded-xl text-sm px-2 py-1">
                                    <i className="fa-solid fa-magnifying-glass"></i></button>
                            </div>
                        </form>
                        <div className="w-full md:block md:w-auto" id="navbar-default">
                            <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white">
                                <li>
                                    <PrimaryButton>
                                        <Dropdown.Link href={route('donations.index')}
                                            // className="block py-2 pl-3 pr-4 text-white bg-lightgreen-500 rounded md:bg-transparent md:text-lightgreen-500 md:p-0"
                                                       aria-current="page">Donations</Dropdown.Link>
                                    </PrimaryButton>
                                </li>
                                <li>
                                    <SecondaryButton>
                                        <Dropdown.Link href={route('logout')} method="post" as="button"
                                            // className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-lightgreen-500 md:p-0"
                                        >Log out<i className="fa-solid fa-right-from-bracket pl-2"></i></Dropdown.Link>
                                    </SecondaryButton>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </>
        )
    }

    else
        {
            return (
                <nav className="bg-white border-gray-200 py-2.5 rounded">
                    <div className="flex flex-wrap items-center w-full sm:max-xl:flex-col sm:max-xl:items-start">
                        <div className="flex sm:max-xl:flex-col">
                            <Link href="/home" className="flex items-center sm:max-xl:my-5">
                                <img src="ga.png" className="h-20 mr-3 sm:max-xl:hidden" alt="logo"/>
                                <span
                                    className="self-center text-xl font-semibold whitespace-nowrap hidden sm:max-xl:block">Giftaway</span>
                            </Link>
                        </div>
                    </div>
                </nav>
            )
        }
}
