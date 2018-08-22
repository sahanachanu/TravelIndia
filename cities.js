
if(window.location.href == "WEBPAGE.html")
{
    document.getElementById("MenuBarHome").classList.add("MenuBarActive");
}


function TransportInfo(){
    document.getElementById("TransportDashboard").style.display = "block";
    document.getElementById("ClimateDashboard").style.display = "none";
}

function ClimateInfo(){
    document.getElementById("TransportDashboard").style.display = "none";
    document.getElementById("ClimateDashboard").style.display = "block";
}