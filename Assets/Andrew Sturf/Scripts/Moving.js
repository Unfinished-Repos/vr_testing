#pragma strict

function Start () {
	
	while (1 > 0) {
		GetComponent.<Rigidbody>().velocity.x = Random.Range(1,3) * Time.deltaTime;
		yield WaitForSeconds (Random.Range(1,5));
	}
	
	while (1 > 0) {
		GetComponent.<Rigidbody>().velocity.z = Random.Range(1,3) * Time.deltaTime;
		yield WaitForSeconds (Random.Range(1,5));
	}
	
	while (1 > 0) {
		var random = Random.Range(1,3);
		if (random == 1) {
			GetComponent.<Rigidbody>().velocity.y = 8;
		}
		yield WaitForSeconds (Random.Range(1,3));
	}
}
