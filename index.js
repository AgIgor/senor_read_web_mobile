
rotation.oninput = (e)=> box.style.transform = `rotate(${rotation.value}deg`; 


if ("AmbientLightSensor" in window) {
  const sensor = new AmbientLightSensor();
  sensor.addEventListener("reading", (event) => {
    light.innerText = "Current light level:", sensor.illuminance;
  });
  sensor.addEventListener("error", (event) => {
    light.innerText =  event.error.name, event.error.message;
  });
  sensor.start();
}


const acl = new Accelerometer({ frequency: 60 });
acl.addEventListener("reading", () => {
  s1.innerText = `Acceleration along the X-axis ${acl.x}`;
  s2.innerText = `Acceleration along the Y-axis ${acl.y}`;
  s3.innerText = `Acceleration along the Z-axis ${acl.z}`;
});

acl.start();
