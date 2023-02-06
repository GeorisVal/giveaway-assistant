import { Link } from '@inertiajs/react';
import Dropdown from "@/Components/Dropdown";
import PrimaryButton from '@/Components/PrimaryButton';
import SecondaryButton from '@/Components/SecondaryButton';

export default function Responsive() {
        return (
            <>
                <div className="md:hidden mt-20 flex flex-col w-full mx-auto items-center max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-black-550">Your screen is too small</h5>
                    <p className="font-normal text-black-550">Giftaway is a tool made for computers. Please use a device with a minimal width of 768px.</p>
                </div>
            </>
        )
    }