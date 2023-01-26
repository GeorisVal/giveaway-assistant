import { Link } from '@inertiajs/react';
import PrimaryButton from '@/Components/PrimaryButton';
import SecondaryButton from '@/Components/SecondaryButton';

export default function Buttons({ href, active, children }) {
    return (
        <>
            <div className="my-4 mb-10">
                <PrimaryButton>Donations</PrimaryButton>
                <SecondaryButton>No date!</SecondaryButton>
                <PrimaryButton>Scheduled giveaways</PrimaryButton>
            </div>
        </>
    );
}
