<?php

namespace App\Http\Controllers;

use App\Models\donation;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\URL;

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
                ->join('platform', 'donations.platform', '=', 'platform.platform')
                ->where('status.visible', '=', 1)
                ->where('platform.visible', '=', 1)
                ->orderBy('donations.timestamp')
                ->get()
        ] + ['status' => DB::table('status')->get()] + ['platform' => DB::table('platform')->get()] + ['link' => URL::temporarySignedRoute('test', now()->addMinutes(2))]);
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Inertia\response
     */
    public function indexNoDate()
    {
        return Inertia::render('Donations/NoDate', ['donations' => DB::table('donations')->join('platform', 'donations.platform', '=', 'platform.platform')
            ->where('status', '=', 'Queued for Website')->where('schedule_date', '=', null)
            ->orWhere('status', '=', 'Queued for Programs')->where('schedule_date', '=', null)
            ->orWhere('status', '=', 'Queued for Discord')->where('schedule_date', '=', null)
            ->get()] + ['platform' => DB::table('platform')->get()]);
    }

    public function indexScheduled()
    {
        return Inertia::render('Donations/NoDate', ['donations' => DB::table('donations')->join('platform', 'donations.platform', '=', 'platform.platform')
            ->where('status', '=', 'Queued for Website')->where('schedule_date', '!=', null)->where('platform.visible', '=', '1')
            ->orWhere('status', '=', 'Queued for Programs')->where('schedule_date', '!=', null)->where('platform.visible', '=', '1')
            ->orWhere('status', '=', 'Queued for Discord')->where('schedule_date', '!=', null)->where('platform.visible', '=', '1')
            ->get()] + ['platform' => DB::table('platform')->get()]);
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
            ->where('status', '=', 'Queued for Website')->where('schedule_date', '=', null)
            ->orWhere('status', '=', 'Queued for Programs')->where('schedule_date', '=', null)
            ->orWhere('status', '=', 'Queued for Discord')->where('schedule_date', '=', null)
            ->get());
    }
    public function showAPI($id)
    {
        return DB::table('donations')->where('id', $id)->get();
    }
    public function updateAPI(Request $request, $id)
    {
        $data = $request->validate(['status' => 'nullable', 'notes' => 'nullable', 'schedule_date' => 'nullable', 'items' => 'nullable', 'currencies' => 'nullable']);
        DB::table('donations')
            ->where('id', $id)
            ->update($data);
    }
    public function updateStatusVisibilityAPI(Request $request, $status)
    {
        $data = $request->validate(['visible' => 'required']);
        DB::table('status')->where('slug', $status)->update($data);
    }
    public function updatePlatformVisibilityAPI(Request $request, $status)
    {
        $data = $request->validate(['visible' => 'required']);
        DB::table('platform')->where('slug', $status)->update($data);
    }
    public function updateStatusVisibility(Request $request)
    {
        $data = $request->validate(['visible' => 'required']);
        ddd($data);
        DB::table('status')->update($data);
    }

    public function updateGiveawayDetailsAPI(Request $request, $date)
    {
        $data = $request->validate(['title' => 'required', 'img_link' => 'required', 'description' => 'required', 'schedule_date' => 'required']);
        DB::table('donations')
            ->where('schedule_date', $date)
            ->update($data);
    }

    public function splitAPI(Request $request)
    {
        $lines = $request['lines'];
        for ($i = 1; $lines >= $i; $i++) {
            DB::table('donations')->insert([
                'timestamp' => $request['timestamp'],
                'status' => '',
                'platform' => $request['platform'],
                'shoutout' => $request['shoutout'],
                'contact_method' => $request['contact_method'],
                'discord_username' => $request['discord_username'],
                'discord_id' => $request['discord_id'],
                'nookazon_username' => $request['nookazon_username'],
                'nookazon_link' => $request['nookazon_link'],
                'currencies' => $request['currencies'],
                'items' => $request['items']
            ]);
        }
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
            ->where('id', $request.id)
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
