<?php

namespace App\Http\Controllers;

use App\Models\Appointments;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\DB;

class AppointmentsController extends Controller
{
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
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
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
            'appointment_type' => 'donor',
            'created_at' => now(),
        ]);
        return redirect(route('thanks'));
//        Appointments::create($request->validate([
//            'nookazon_username' => ['nullable', 'max:20'],
//            'discord_username' => ['nullable', 'max:20'],
//            'appointment_date' => ['required'],
//            'appointment_time' => ['required'],
//            'contact_method' => ['required'],
//            'appointment_type' => ['required']
//        ]));
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
}
