<script>
    export default {
        mounted() {
            var mapOptions = {
                center: [50.0521, 19.9766],
                zoom: 10
            };
            var map = new L.map('map', mapOptions);
            var layer = new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');
            map.addLayer(layer);

            navigator.geolocation.getCurrentPosition(position => {
                var lat = position.coords.latitude
                var lng = position.coords.longitude
                var marker = L.marker([lat, lng]);
                marker.addTo(map);
                map.setView([lat, lng], 15)
            }, error => {
                console.log('Error getting user location:', error)
            })
        }
    }  
</script>

<template>
  <div class="container mt-15">
    <div class="row justify-content-center">
      <div class="col-12 col-md-8 col-lg-6">
        <div id="map" style="height: 400px;"></div>
      </div>
    </div>
  </div>
</template>