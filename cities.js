
if(window.location.href == "WEBPAGE.html")
{
    document.getElementById("MenuBarHome").classList.add("MenuBarActive");
}

function PlacesInfo(){
    document.getElementById("PlacesDashBoard").style.display = "block";
    document.getElementById("TransportDashboard").style.display = "none";
    document.getElementById("ClimateDashboard").style.display = "none";
}

function TransportInfo(){
    document.getElementById("PlacesDashBoard").style.display = "none";
    document.getElementById("TransportDashboard").style.display = "block";
    document.getElementById("ClimateDashboard").style.display = "none";
}

function ClimateInfo(){
    document.getElementById("PlacesDashBoard").style.display = "none";
    document.getElementById("TransportDashboard").style.display = "none";
    document.getElementById("ClimateDashboard").style.display = "block";
}