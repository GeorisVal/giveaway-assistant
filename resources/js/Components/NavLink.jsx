import { Link } from '@inertiajs/react';
import Dropdown from "@/Components/Dropdown";
import PrimaryButton from '@/Components/PrimaryButton';
import SecondaryButton from '@/Components/SecondaryButton';

export default function NavLink(props) {

    function clickHandler(e) {
        if (e.shiftKey) {
            window.location.href = "/login";
        }
        else {
            window.location.href = "/"
        }
    }
    if(props.auth.user != null) {
        return (
            <>
                <nav className="bg-gray-100 border-gray-200 py-2.5 rounded">
                    <div className="flex flex-wrap justify-between items-center w-full">
                        <div className="">
                            <Link href="/" className="flex items-center">
                            <img src="ga.png" className="h-20 mr-3" alt="logo" onClick={(event) => {clickHandler(event)}}/>
                                <span
                                    className="self-center text-xl font-semibold whitespace-nowrap hidden">Giftaway</span>
                            </Link>
                        </div>
                        <div className="block w-auto max-md:hidden" id="navbar-default">
                            <ul className="flex flex-row p-4 border-gray-100 rounded-lg space-x-8 mt-0 text-sm font-medium border-0 bg-gray-100">
                                <li>
                                    <a href={'https://docs.google.com/spreadsheets/d/1S4_yGtCH_6VjcLTU3xxzBjwDpqDEHMJ06Nyivi7_ngo/edit#gid=1151497179'} aria-current="page">
                                        <PrimaryButton>
                                            Customer Support Sheet
                                        </PrimaryButton>
                                    </a>
                                </li>
                                <li>
                                    <Dropdown.Link href={route('calendar')} aria-current="page">
                                        <PrimaryButton>
                                            Calendar
                                        </PrimaryButton>
                                    </Dropdown.Link>
                                </li>
                                <li>
                                    <Dropdown.Link href={route('donations.index')} aria-current="page">
                                        <PrimaryButton>
                                            Donations
                                        </PrimaryButton>
                                    </Dropdown.Link>
                                </li>
                                <li>
                                    <SecondaryButton>
                                        <Dropdown.Link href={route('logout')} method="post" as="button">
                                            Log out<i className="fa-solid fa-right-from-bracket pl-2"></i>
                                        </Dropdown.Link>
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
                <nav className="bg-gray-100 border-gray-200 py-2.5 rounded">
                    <div className="flex flex-wrap items-center w-full sm:max-xl:flex-col sm:max-xl:items-start">
                        <div className="flex sm:max-xl:flex-col">
                            <img src="ga.png" className="h-20 mr-3 cursor-pointer" alt="logo" onClick={(event) => {clickHandler(event)}}/>
                                <span
                                    className="self-center text-xl font-semibold whitespace-nowrap hidden">Giftaway</span>
                        </div>
                    </div>
                </nav>
            )
        }
}
