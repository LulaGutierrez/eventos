const body = document.body;
let darkTheme = false;

function toggleDarkMode()
{
    if(!darkTheme)
    {
        body.style.backgroundColor = '#191923';
        body.style.color = 'white';

        darkTheme = true;
    }
    else
    {
        body.style.backgroundColor = 'white';
        body.style.color = '#191923';

        darkTheme = false;
    }
}