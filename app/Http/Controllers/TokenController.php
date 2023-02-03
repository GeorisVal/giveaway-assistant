<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoretokenRequest;
use App\Http\Requests\UpdatetokenRequest;
use App\Models\token;
use Illuminate\Support\Facades\URL;

class TokenController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    public function generateLink()
    {
            URL::temporarySignedRoute('test', now()->addMinutes(2));
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
     * @param  \App\Http\Requests\StoretokenRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoretokenRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\token  $token
     * @return \Illuminate\Http\Response
     */
    public function show(token $token)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\token  $token
     * @return \Illuminate\Http\Response
     */
    public function edit(token $token)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdatetokenRequest  $request
     * @param  \App\Models\token  $token
     * @return \Illuminate\Http\Response
     */
    public function update(UpdatetokenRequest $request, token $token)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\token  $token
     * @return \Illuminate\Http\Response
     */
    public function destroy(token $token)
    {
        //
    }
}
