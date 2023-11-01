function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6XEFLopvHl9":
        Script1();
        break;
  }
}

function Script1()
{
  const url="https://script.google.com/macros/s/AKfycbwZ4NmrAy0MlR1xTKgxToLQPbmghN4LEhkXRocU-6pACTJAHVkgDPK_HZWTFWxscg9W/exec"

var player=GetPlayer()

fetch(url,{
	method:"POST",
	mode: 'no-cors',
	cache:'no-cache',
	headers: {'Content-Type': 'application/json'},
	redirect:'follow',
	body: JSON.stringify({v20q1attempts:player.GetVar("v20q1attempts"),v20q1answeredcorrect:player.GetVar("v20q1answeredcorrect"),v20q2attempts:player.GetVar("v20q2attempts"),v20q2answeredcorrect:player.GetVar("v20q2answeredcorrect"),v20q3attempts:player.GetVar("v20q3attempts"),v20q3answeredcorrect:player.GetVar("v20q3answeredcorrect")})
	}
	)
}

