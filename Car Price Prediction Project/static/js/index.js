$(document).ready(function() {
    const carName = $("#car-name");
    const carCompany = $("#company");
    const Year = $("#year");
    const Color = $("#color");
    const HandType = $("#hand");
    const engineSaland = $("#engine");
    const fuelType = $("#fuel_type");
    const Transmission = $("#transmission")
    $.getJSON("../static/json/data.json", function(data) {
        carName.on("change", function() {
            selectedCarModel = $(this).val();
            // When i select CarModel then Select CarCompany
            const selectCarCompany = data.find(value => value.carModelValue === selectedCarModel).company;
            carCompany.empty();
            Object.keys(selectCarCompany).forEach(key => {
                const carValue = selectCarCompany[key];
                const option = $("<option>").text(key).attr({
                    value: carValue
                }); 
                carCompany.append(option);
            });
            // When i select CarModel then Changed years
            const selectCarYear = data.find(value => value.carModelValue === selectedCarModel).year;
            Year.empty();
            Object.keys(selectCarYear).forEach(key => {
                const carValue = selectCarYear[key];
                const option = $("<option>").text(key).attr({
                    value: carValue
                }); 
                Year.append(option);
            });
            // When i select CarModel then Changed Color
            const selectCarColor = data.find(value => value.carModelValue === selectedCarModel).color;
            Color.empty();
            Object.keys(selectCarColor).forEach(key => {
                const carValue = selectCarColor[key];
                const option = $("<option>").text(key).attr({
                    value: carValue
                }); 
                Color.append(option);
            });
            // When i select CarModel then Changed HandType
            const selectCarHandType = data.find(value => value.carModelValue === selectedCarModel).hand;
            HandType.empty();
            Object.keys(selectCarHandType).forEach(key => {
                const carValue = selectCarHandType[key];
                const option = $("<option>").text(key).attr({
                    value: carValue
                }); 
                HandType.append(option);
            });
            // When i select CarModel then Changed EngineType
            const selectCarEngineType = data.find(value => value.carModelValue === selectedCarModel).saland;
            engineSaland.empty();
            Object.keys(selectCarEngineType).forEach(key => {
                const carValue = selectCarEngineType[key];
                const option = $("<option>").text(key).attr({
                    value: carValue
                }); 
                engineSaland.append(option);
            });
            // When i select CarModel then Changed TransmissionType
            const selectCarTransmissionType = data.find(value => value.carModelValue === selectedCarModel).transmission;
            Transmission.empty();
            Object.keys(selectCarTransmissionType).forEach(key => {
                const carValue = selectCarTransmissionType[key];
                const option = $("<option>").text(key).attr({
                    value: carValue
                }); 
                Transmission.append(option);
            });
            // When i select CarModel then Changed FuelType
            const selectCarFuelType = data.find(value => value.carModelValue === selectedCarModel).fuel_type;
            fuelType.empty();
            Object.keys(selectCarFuelType).forEach(key => {
                const carValue = selectCarFuelType[key];
                const option = $("<option>").text(key).attr({
                    value: carValue
                }); 
                fuelType.append(option);
            });
        }); 
    });
});
