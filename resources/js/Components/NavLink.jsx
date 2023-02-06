import { Link } from '@inertiajs/react';
import Dropdown from "@/Components/Dropdown";
import PrimaryButton from '@/Components/PrimaryButton';
import SecondaryButton from '@/Components/SecondaryButton';

export default function NavLink(props) {
    if(props.auth.user != null) {
        return (
            <>
                <nav className="bg-white border-gray-200 py-2.5 rounded">
                    <div className="flex flex-wrap justify-between items-center w-full">
                        <div className="">
                            <Link href="/" className="flex items-center">
                                <img src="ga.png" class="h-20 mr-3" alt="logo"/>
                                <span className="self-center text-xl font-semibold whitespace-nowrap hidden">
                                    Giftaway
                                </span>
                            </Link>
                        </div>
                        <div className="w-full md:block md:w-auto" id="navbar-default">
                            <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white">
                                <li>
                                    <Dropdown.Link href={route('donations.index')} aria-current="page">
                                        <PrimaryButton>
                                            Donations
                                        </PrimaryButton>
                                    </Dropdown.Link>
                                </li>
                                <li>
                                    <Dropdown.Link href={route('logout')} method="post" as="button">
                                        <SecondaryButton>    
                                            Log out<i className="fa-solid fa-right-from-bracket pl-2"></i>
                                        </SecondaryButton>
                                    </Dropdown.Link>
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
                <>
                <nav className="bg-white border-gray-200 py-2.5 rounded">
                    <div className="flex flex-wrap justify-between items-center w-full">
                        <div className="flex">
                            <Link href="/" className="flex items-center">
                                <img src="ga.png" class="h-20 mr-3" alt="logo"/>
                                <span className="self-center text-xl font-semibold whitespace-nowrap hidden">
                                    Giftaway
                                </span>
                            </Link>
                        </div>
                        <div className="w-full md:block md:w-auto" id="navbar-default">
                            <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white">
                                <li>
                                    <Dropdown.Link href="/" aria-current="page">
                                        <PrimaryButton>
                                            Home
                                        </PrimaryButton>
                                    </Dropdown.Link>
                                </li>
                                <li>
                                    <Dropdown.Link href="/login" as="button">
                                        <SecondaryButton>
                                            Log in<i className="fa-solid fa-right-from-bracket pl-2"></i>
                                        </SecondaryButton>
                                    </Dropdown.Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </>
            )
        }
}
