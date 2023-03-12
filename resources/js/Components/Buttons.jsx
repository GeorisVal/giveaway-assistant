import { Link } from '@inertiajs/react';
import PrimaryButton from '@/Components/PrimaryButton';
import SecondaryButton from '@/Components/SecondaryButton';

export default function Buttons() {
    return (
        <>
            <div className={"my-4 mb-10 sticky bottom-0 bg-white"}>
                <Link href={'donations'}><PrimaryButton>Donations</PrimaryButton></Link>
                <Link href={'donations-nodate'}><SecondaryButton>No date!</SecondaryButton></Link>
                <Link href={'donations-scheduled'}><PrimaryButton>Scheduled giveaways</PrimaryButton></Link>
            </div>
        </>
    );
}
