<script>

document.getElementById("save").addEventListener("click", (e) => {
	e.preventDefault()

	var store_ip = document.getElementById("store_ip")
	var store_clicks = document.getElementById("store_clicks")

	localStorage.setItem("_store_ip", store_ip.checked);
	localStorage.setItem("_store_clicks", store_clicks.checked);

	e.currentTarget.disabled = true
});

function update_save_button() {
	if (document.getElementById("store_ip").checked !== get_setting("_store_ip", true) ||
			document.getElementById("store_clicks").checked !== get_setting("_store_clicks", true)) {

		document.getElementById("save").disabled = false

	} else {

		document.getElementById("save").disabled = true

	}
}

document.getElementById("store_ip").addEventListener("change", (e) => {
	update_save_button()
})

document.getElementById("store_clicks").addEventListener("change", (e) => {
	update_save_button()
})

window.addEventListener('load', () => {
	var checked1 = get_setting("_store_ip", true)
	document.getElementById("store_ip").checked = checked1

	var checked2 = get_setting("_store_clicks", true)
	document.getElementById("store_clicks").checked = checked2
})

</script>