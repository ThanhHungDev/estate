thêm localtion cho web bằng cái này 
composer require ipinfo/ipinfolaravel

Open your application's \app\Http\Kernel.php file and add the following to the Kernel::middleware property:

protected $middleware = [
  ...
  \ipinfo\ipinfolaravel\ipinfolaravel::class,
  ];


  $location_text = "The IP address {$request->ipinfo->ip} is located in the city of {$request->ipinfo->city}."


  https://github.com/ipinfo/laravel



laravel detect thiết bị 
Laravel detector mobile browser name version platform device robot crawler user language

composer require jenssegers/agent

Then find the config/app.php and then find providers key as below:
Then add this line as the Agent service provider to the array of providers:
Jenssegers\Agent\AgentServiceProvider::class,


add an alias for Agent to the array of aliases like:
'Agent' => Jenssegers\Agent\Facades\Agent::class,
It’s done!


https://panjeh.medium.com/laravel-detector-mobile-browser-name-version-platform-device-robot-crawler-user-language-8499bee7607c


$hung = 213321;
        $agent = new Agent();
        $agent->platform();
        // Ubuntu, Windows, OS X, ...
        $agent->browser();
        // Chrome, IE, Safari, Firefox, ...
        $browser = $agent->browser();
        $version = $agent->version($browser);
        $platform = $agent->platform();
        $version = $agent->version($platform);

        and more:
        $agent->is('Windows');
        $agent->is('Firefox');
        $agent->is('iPhone');
        $agent->is('OS X');
        $agent->isAndroidOS();
        $agent->isNexus();
        $agent->isSafari();
        $agent->languages();
        // ['nl-nl', 'nl', 'en-us', 'en']
        $agent->device();
        // iPhone, Nexus, AsusTablet, ...
        $agent->isDesktop();
        $agent->isPhone();
        $agent->isMobile();
        $agent->isTablet();
        $agent->isRobot();
        $agent->robot();
        // robot name

        dd($agent->languages());