import { Link } from '@inertiajs/react';
import PrimaryButton from '@/Components/PrimaryButton';
import SecondaryButton from '@/Components/SecondaryButton';

export default function Buttons({ href, active, children }) {
    return (
        <>
            <div className="my-4 mb-10">
                <Link href={'donations'}><PrimaryButton>Donations</PrimaryButton></Link>
                <Link href={'donations-nodate'}><SecondaryButton>No date!</SecondaryButton></Link>
                <PrimaryButton>Scheduled giveaways</PrimaryButton>
            </div>
        </>
    );
}
