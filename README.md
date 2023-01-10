# About this project

This will assist a Giveaway Host to plan donations status, pickups, and winner's retrieval and will give detailed and general overview of donations. <br>

A Google Sheet will be linked to the database, and will auto-update on changes (*ideally push edits from DB to Sheet, if that's a thing ?*).<br>

A Google Calendar will be linked on the website, allowing users to select a date and time to meet for a donation or a retrieval of won items.

# Features

## Google Sheet
- Automatically update database on Google Sheet changes, using Google App Script & JDBC (Java Database Connectivity);
- *Ideally, automatically update Google Sheet on database changes*.

## Google Calendar
- Host will select general availabilities;
- Donor will be able to pick any time in these availabilities;
- Event will be created onto host's Google Calendar;
- Other donors will not be able to select the same time;
- Winner will be able to pick any time from the available spots in the availabilities in a second type of event, which will also lock the availability for both events;
- Calendar view including all the events onto a hidden Administration page.

## Administration
- Overview of all donations (*list and/or cards*);
- Ability to change status from the overview, enabling a color code on the line; 
- Ability to filter donations by status and by platform; 
- Set a date for when the giveaway is scheduled to go live; 
- Once a date is selected, populate the "Scheduled Giveaways" (calendar view) view with all the details; 
- Warning if status is set as "Scheduled" but no schedule date is set;
- Monthly calendar view with small dots including a color code based on event type (Donor pickup or Winner retrieval) and filtering option;
- Second color code for Discord or website giveaways, full cell;
- Edit button on calendar cell next to giveaway title to edit the giveaway informations;
- If hover on calendar event, will provide card with details of specific donation (*maybe enable edit directly from card ? If possible, move edit button into card*);
- In details card, option for shoutout based on the content of the form (Discord, Website or Anonymous).

# Template

There will be 4 pages: 
1) Donor's Registration Form
2) Winner's Registration Form
3) Administration (2 pages)
   1) Donations List with tabs on the bottom
      1) complete list,
      2) no date,
         - Less columns, TBD
      3) extra items
         - Less columns, TBD
   2) Calendar Overview w/ scheduled giveaways & dots for pick-ups;

# Technologies
- Laravel
- Google App Scripts
- Tailwind
- More, maybe ? Will be updated if needed
