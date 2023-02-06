<?php

namespace App\Listeners;

use App\Events\AppointmentCreated;
use App\Models\Appointments;
use App\Models\User;
use App\Notifications\NewAppointment;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;

class SendAppointmentsCreatedNotification implements ShouldQueue
{
    /**
     * Create the event listener.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     *
     * @param  \App\Events\AppointmentCreated  $event
     * @return void
     */
    public function handle(AppointmentCreated $event)
    {
        foreach (User::all() as $user) {
            $user->notify(new Appointments($event->appointments));
        }
    }
}
