import { Link } from '@inertiajs/react';
import Dropdown from "@/Components/Dropdown";
import PrimaryButton from '@/Components/PrimaryButton';
import SecondaryButton from '@/Components/SecondaryButton';

export default function NavLink(props) {
    if(props.auth.user != null) {
        console.log(props);
        return (
            <>
                <nav className="bg-gray-100 border-gray-200 py-2.5 rounded">
                    <div className="flex flex-wrap justify-between items-center w-full">
                        <div className="">
                            <Link href="/" className="flex items-center">
                                <img src="ga.png" className="h-20 mr-3" alt="logo"/>
                                <span
                                    className="self-center text-xl font-semibold whitespace-nowrap hidden">Giftaway</span>
                            </Link>
                        </div>
                        <div className="w-auto max-md:hidden" id="navbar-default">
                            <ul className="flex p-4 border-gray-100 rounded-lg flex-row space-x-8 mt-0 text-sm font-medium border-0 bg-gray-100">
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
                <nav className="bg-gray-100 border-gray-200 py-2.5 rounded">
                    <div className="flex flex-wrap items-center w-full">
                        <div className="flex sm:max-xl:flex-col">
                            <Link href="/" className="flex items-center">
                                <img src="ga.png" className="h-20 mr-3" alt="logo"/>
                                <span
                                    className="self-center text-xl font-semibold whitespace-nowrap hidden">Giftaway</span>
                            </Link>
                        </div>
                    </div>
                </nav>
            )
        }
}
