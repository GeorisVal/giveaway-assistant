<?php

namespace App\Http\Controllers;

use App\Models\donation;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\DB;

class DonationController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Inertia\response
     */
    public function index()
    {
        return Inertia::render('Donations/Index', ['donations' =>
            DB::table('donations')
                ->join('status', 'donations.status', '=', 'status.status')
                ->where('visible', '=', 1)
                ->get()
        ] + ['status' => DB::table('status')->get()]);
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Inertia\response
     */
    public function indexNoDate()
    {
        return Inertia::render('Donations/NoDate', ['donations' => DB::table('donations')
            ->where('status', '=', 'scheduled_web')->where('schedule_date', '=', null)
            ->orWhere('status', '=', 'scheduled_programs')->where('schedule_date', '=', null)
            ->orWhere('status', '=', 'scheduled_discord')->where('schedule_date', '=', null)
            ->get()]);
    }

    public function indexAPI()
    {
        return DB::table('donations')->get();

    }
    public function statusAPI()
    {
        return DB::table('status')->get();
    }
    public function scheduleNoDateAPI()
    {
        return
            (DB::table('donations')
            ->where('status', '=', 'scheduled_web')->where('schedule_date', '=', null)
            ->orWhere('status', '=', 'scheduled_programs')->where('schedule_date', '=', null)
            ->orWhere('status', '=', 'scheduled_discord')->where('schedule_date', '=', null)
            ->get());
    }
    public function showAPI($id)
    {
        return DB::table('donations')->where('id', $id)->get();
    }
    public function updateAPI(Request $request, $id)
    {
        $data = $request->validate(['status' => 'nullable', 'notes' => 'nullable', 'schedule_date' => 'nullable']);
        DB::table('donations')
            ->where('id', $id)
            ->update($data);
    }
    public function updateStatusVisibilityAPI(Request $request, $status)
    {
        $data = $request->validate(['visible' => 'required']);
        DB::table('status')->where('status', $status)->update($data);
    }
    public function updateStatusVisibility(Request $request)
    {
        $data = $request->validate(['visible' => 'required']);
        ddd($data);
        DB::table('status')->update($data);
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
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\donation  $donation
     * @return \Illuminate\Http\Response
     */
    public function show(donation $donation)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\donation  $donation
     * @return \Illuminate\Http\Response
     */
    public function edit(donation $donation)
    {

    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\donation  $donation
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, donation $donation)
    {
        $data = $request->validate(['status' => 'required']);
        // $donation->update($data);

        DB::table('donations')
            ->where('id', $request->id)
            ->update(array('status' => $data["status"]));
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\donation  $donation
     * @return \Illuminate\Http\Response
     */
    public function destroy(donation $donation)
    {
        //
    }
}
