var youtube;
var password;
var github;
var email;
var replit;
//set all values for these variables. you can also add more for socials like twitter, instagram, FF, etc...

whois = [
    "<br>",
    "Hey, I'm John Doe!👋",
    "I'm a student at ___ High School, who builds fun projects like this",
    "with the main focus being on games and algorithms. I made this project as my",
    "portfolio for my engineering class. This is my first big java script project I've done, so",
    "I hope you like it. This website took the better part of two days to make, with lots of help",
    "from the members of the ____ (this is inspired by",
    "ForrestKnight's terminal website). Please feel free to explore!",
    "(PS: I hid some easter eggs here too)",
    "<br>"
];

whoami = [
    "<br>",
    "The paradox of “Who am I?” is: we never know, but, we constantly find out. (Definitely NOT stolen)",
    "<br>"
];

social = [
    "<br>",
    'youtube        <a href="' + youtube + '" target="_blank">youtube/0rdo' + "</a>",
    'github         <a href="' + github + '" target="_blank">github/Ordo' + "</a>",
    'replit         <a href="' + replit + '" target="_blank">repl/Ordo' + "</a>",
    "<br>"
];

secret = [
    "<br>",
    '<span class="command">sudo</span>           Only use if you\'re admin',
    "<br>"
];

projects = [
    "<br>",
    "Still curating... most projects are offline, on replit, or confidential.",
    "<br>"
];

help = [
    "<br>",
    '<span class="command">whois</span>          Who is Ordo?',
    '<span class="command">whoami</span>         Who are you?',
    '<span class="command">video</span>          View YouTube videos',
    '<span class="command">social</span>         Display social networks',
    '<span class="command">secret</span>         Find the password',
    '<span class="command">projects</span>       View coding projects',
    '<span class="command">history</span>        View command history',
    '<span class="command">help</span>           You obviously already know what this does',
    '<span class="command">email</span>          Don\'t email me',
    '<span class="command">clear</span>          Clear the terminal',
    '<span class="command">banner</span>         Display the header',
    "<br>",
];

banner = [
    "           .            .                     .",
    "                  _        .                          .            (",
    "                 (_)        .    ",
    "  .        ____.--^.                ____             __          _____  __  ",
    "  .      /:  /    |                / __ \\ _____ ____/ /____     / ___/ / /__",
    "        /:  `--=--'   .           / / / // ___// __  // __ \\    \\__ \\ / //_/",
    "       /: __[\==`-.___           */ /_/ // /   / /_/ // /_/ /   ___/ // ,<   ",
    "      /__|\ _~~~~~~   ~~--..__    \\____//_/    \\__,_/ \\____/   /____//_/|_|  ",
    "      \   \|::::|-----.....___|~--.                                 .      ",
    "       \ _\_~~~~~-----:|:::______//---...___",
    "   .   [\  \  __  --     \       ~  \_      ~~~===------==-...____",
    "       [============================================================-",
    "       /         __/__   --  /__    --       /____....----''''~~~~      .",
    "  *    /  /   ==           ____....=---='''~~~~ .      © 2022",
    "      /____....--=-''':~~~~                      .                .",
    '<span class="color2">Welcome to my interactive web terminal.</span>',
    "<span class=\"color2\">For a list of available commands, type</span> <span class=\"command\">'help'</span><span class=\"color2\">.</span>",
];
//this is my banner, you can customize to make it your own.