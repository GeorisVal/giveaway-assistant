<?php

namespace App\Http\Controllers;

use App\Models\Appointments;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\DB;
use Spatie\GoogleCalendar\Event;
use Carbon\Carbon;
class AppointmentsController extends Controller
{
    public function indexAPI()
    {
        return DB::table('appointments')->get();
    }
    public function showAPI($id)
    {
        return DB::table('appointments')->where('id', $id)->get();
    }
    public function postAPI(Request $request, $id)
    {
        $data = $request->validate(['nookazon_username' => 'nullable', 'discord_username' => 'nullable', 'appointment_date' => 'required', 'appointment_time' => 'required', 'contact_method' => 'required']);
        DB::table('appointments')
            ->where('id', $id)
            ->update($data);
    }

    public function createAPI(Request $request)
    {
        $data = $request->validate([
            'nookazon_username' => ['nullable', 'max:20'],
            'discord_username' => ['nullable', 'max:20']]);
        Appointments::create([
            'nookazon_username' => $data["nookazon_username"],
            'discord_username' => $data["discord_username"],
            'appointment_date' => $request->appointment_date,
            'appointment_time' => $request->appointment_time,
            'contact_method' => $request->contact_method,
            'appointment_type' => $request->appointment_type,
        ]);
        return response()->json([
            DB::table('appointments')->get()
        ]);
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Inertia\response
     */
    public function index()
    {
        return Inertia::render('Appointments/Index', ['appointments' => DB::table('appointments')->get()]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\RedirectResponse
     */
    public function store (Request $request)
    {
        $data = $request->validate([
            'nookazon_username' => ['nullable', 'max:20'],
            'discord_username' => ['nullable', 'max:20'],
            'appointment_date' => ['required', 'date'],
            'appointment_time' => ['required'],
            'contact_method' => ['required'],
        ]);
        DB::table('appointments')->insert([
            'nookazon_username' => $data["nookazon_username"],
            'discord_username' => $data["discord_username"],
            'appointment_date' => $data["appointment_date"],
            'appointment_time' => $data["appointment_time"],
            'contact_method' => $data["contact_method"],
            'appointment_type' => $request["appointment_type"],
            'created_at' => now(),
        ]);
//        $event = new Event;
//        $event->name = 'Meeting with the donor ' . $data["nookazon_username"] ? $data["nookazon_username"] : $data["discord_username"];
//        $event->description = 'Contact them via ' . $data["contact_method"];
//        $event->startDateTime = Carbon::make($data["appointment_time"].$data["appointment_date"]);
//        $event->save();
        return redirect(route('thanks'));
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Appointments  $appointments
     * @return \Illuminate\Http\Response
     */
    public function show(Appointments $appointments)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Appointments  $appointments
     * @return \Illuminate\Http\Response
     */
    public function edit(Appointments $appointments)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Appointments  $appointments
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Appointments $appointments)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Appointments  $appointments
     * @return \Illuminate\Http\Response
     */
    public function destroy(Appointments $appointments)
    {
        //
    }

    public function calendarPage(){
        return Inertia::render('Calendar/Index', [
            'appointments' => DB::table('appointments')->get()
        ] + ['donations' => DB::table('donations')
                ->select('status', 'schedule_date', 'description', 'shoutout_cc', 'img_link')
                ->where('status', 'scheduled_web')
                ->whereNotNull('schedule_date')
                ->orWhere('status', 'scheduled_discord')
                ->whereNotNull('schedule_date')
                ->orWhere('status', 'scheduled_programs')
                ->whereNotNull('schedule_date')
                ->get()]);
    }
}
