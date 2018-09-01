
if(window.location.href == "index.html")
{
    document.getElementById("MenuBarHome").classList.add("MenuBarActive");
}

function PlacesInfo(){
   
    document.getElementById("selected1").className = "active";
    document.getElementById("selected2").className = "";
    document.getElementById("selected3").className = "";                           
    document.getElementById("selected5").className = "";
    document.getElementById("selected6").className = "";
    document.getElementById("PlacesDashBoard").style.display = "block";
    document.getElementById("TransportDashboard").style.display = "none";
    document.getElementById("ClimateDashboard").style.display = "none";                                                                 
    document.getElementById("FlightDashboard").style.display = "none";
    document.getElementById("HotelDashboard").style.display = "none";
}

function TransportInfo(){
    document.getElementById("selected1").className = "";
    document.getElementById("selected2").className = "active";
    document.getElementById("selected3").className = "";
    document.getElementById("selected5").className = "";
    document.getElementById("selected6").className = "";
    document.getElementById("PlacesDashBoard").style.display = "none";
    document.getElementById("TransportDashboard").style.display = "block";
    document.getElementById("ClimateDashboard").style.display = "none";
    document.getElementById("FlightDashboard").style.display = "none";
    document.getElementById("HotelDashboard").style.display = "none";
}

function ClimateInfo(){
    document.getElementById("selected1").className = "";
    document.getElementById("selected2").className = "";
    document.getElementById("selected3").className = "active";
    document.getElementById("selected5").className = "";
    document.getElementById("selected6").className = "";
    document.getElementById("PlacesDashBoard").style.display = "none";
    document.getElementById("TransportDashboard").style.display = "none";
    document.getElementById("ClimateDashboard").style.display = "block";
    document.getElementById("FlightDashboard").style.display = "none";
    document.getElementById("HotelDashboard").style.display = "none";
}

function FlightInfo(){
    document.getElementById("selected1").className = "";
    document.getElementById("selected2").className = "";
    document.getElementById("selected3").className = "";
    document.getElementById("selected5").className = "active";
    document.getElementById("selected6").className = "";
    document.getElementById("PlacesDashBoard").style.display = "none";
    document.getElementById("TransportDashboard").style.display = "none";
    document.getElementById("ClimateDashboard").style.display = "none";
    document.getElementById("FlightDashboard").style.display = "block";
    document.getElementById("HotelDashboard").style.display = "none";
}

function HotelInfo(){
    document.getElementById("selected1").className = "";
    document.getElementById("selected2").className = "";
    document.getElementById("selected3").className = "";
    document.getElementById("selected5").className = "";
    document.getElementById("selected6").className = "active";
    document.getElementById("PlacesDashBoard").style.display = "none";
    document.getElementById("TransportDashboard").style.display = "none";
    document.getElementById("ClimateDashboard").style.display = "none";
    document.getElementById("FlightDashboard").style.display = "none";
    document.getElementById("HotelDashboard").style.display = "block";
}
