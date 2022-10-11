let payload = "<YAMAHA_AV cmd=\"PUT\"><Main_Zone><Input><Input_Sel>HDMI3</Input_Sel></Input></Main_Zone></YAMAHA_AV>";
let control_url = "http://192.168.1.110/YamahaRemoteControl/ctrl";
fetch(control_url, {
  method: "POST",
  headers: {'Content-Type': 'text/xml'},
  body: payload
}).then(res => {
  console.log("Request complete! response:", res);
});
