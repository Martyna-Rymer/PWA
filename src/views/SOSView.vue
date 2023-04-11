<script>

export default {
  methods: {
    vibrateSOS() {
      console.log("vibrate")
      const shortVibrationDuration = 100; // in milliseconds
      const longVibrationDuration = 300; // in milliseconds
      const pauseBetweenSignalsDuration = 200; // in milliseconds

      const sosPattern = [
        shortVibrationDuration, pauseBetweenSignalsDuration,
        shortVibrationDuration, pauseBetweenSignalsDuration,
        shortVibrationDuration, pauseBetweenSignalsDuration,
        longVibrationDuration, pauseBetweenSignalsDuration,
        longVibrationDuration, pauseBetweenSignalsDuration,
        longVibrationDuration, pauseBetweenSignalsDuration,
        shortVibrationDuration, pauseBetweenSignalsDuration,
        shortVibrationDuration, pauseBetweenSignalsDuration,
        shortVibrationDuration
      ];

      navigator.vibrate(sosPattern);
    },
  },
  mounted() {
    this.vibrateSOS();
  },
}
</script>

<template>
    <div class="container d-flex justify-content-center align-items-center" style="height: 100vh">
        <div>
        <h1 class="text-center">SOS</h1>
        </div>
    </div>
</template>