<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>

        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="keywords" content="">
        <meta name="author" content="">
        <meta name="robots" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="description" content="">
        <meta property="og:title" content="">
        <meta property="og:description" content="">
        <meta property="og:image" content="">
        <meta name="format-detection" content="">
        
        <!-- PAGE TITLE HERE -->
        <title inertia>{{ config('app.name', 'Laravel') }}</title>
        
	<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons+Sharp">

        @routes
        @vite([
            'resources/js/app.js', 
            'resources/css/app.css',
            ])
        @inertiaHead
        
    </head>
    <body>
      @inertia
    </body>
</html>
