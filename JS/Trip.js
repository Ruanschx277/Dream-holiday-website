$(document).ready(function() {

    $.ajax({
        type: "GET",
        url: "https://api.openweathermap.org/data/2.5/weather?q=Pretoria&appid=5a528b54296e72d061c7f06e96572406",
        success: function(data) {
            var temp = (data.main.temp - 273.15).toFixed(2);
            $("#pretoriaTemp").text(`Pretoria Temp: ${temp}°C`);
            console.log("Temperature data retrieved:", data);
        },
        error: function() {
            $("#pretoriaTemp").text("Error fetching temperature");
            console.log("Error fetching temperature");
        }
    });

    const trips = [
        { destination: "Mozambique", price: 3500, description: "Scenic tropical island getaway" },
        { destination: "Caribbean Island", price: 4200, description: "Relax on pristine beaches" },
        { destination: "Palau Island", price: 3800, description: "Explore adventurous island activities" }
    ];

    const tripTableBody = $("#tripTableBody");
    const purchaseMessage = $("#purchaseMessage");

    $("#loadTripsBtn").click(function() {
        loadTrips();
        console.log("Trips loaded");
    });

    $("#removeTripsBtn").click(function() {
        removeSelectedTrips();
        console.log("Selected trips removed");
    });

    $("#purchaseBtn").click(function() {
        purchaseTrips();
        console.log("Trips purchased");
    });

    function loadTrips() {
        tripTableBody.empty();

        trips.forEach((trip, index) => {
            const row = `
                <tr>
                    <td>${trip.destination}</td>
                    <td>R${trip.price} PER PERSON</td>
                    <td>${trip.description}</td>
                    <td><input type="checkbox" name="tripCheckbox" data-index="${index}"></td>
                </tr>`;
            tripTableBody.append(row);
        });
    }

    function removeSelectedTrips() {
        const checkboxes = $('input[type="checkbox"]:checked');

        checkboxes.each(function() {
            const index = $(this).data("index");
            if (index !== undefined) {
                trips.splice(index, 1);
            }
        });

        loadTrips();
    }

    function purchaseTrips() {
        const checkboxes = $('input[type="checkbox"]:checked');
        if (checkboxes.length === 0) {
            purchaseMessage.text("Please select at least one trip to purchase.");
            console.log("No trips selected for purchase");
        } else {

            purchaseMessage.text("Purchase successful!");
            checkboxes.prop("checked", false);

            console.log("Trips purchased successfully");
        }
    }

    loadTrips();
});


      