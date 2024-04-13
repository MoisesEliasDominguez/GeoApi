const OPTIONS = {
    method: 'GET',
    headers: {
		'X-RapidAPI-Key': '43260e2349msh3d7718fab3c4127p1a90d1jsn4599d2667b43',
		'X-RapidAPI-Host': 'ip-whois-geolocation1.p.rapidapi.com'
	}
};

const fetchIpInfo = ip => {
    return fetch(`https://ip-whois-geolocation1.p.rapidapi.com/?ip=1.1.1.1${ip}`, OPTIONS)
    .then(res => res.json())
    .catch(err => console.error(err))
}

const $ = selector => document.querySelector(selector)

const $form = $('#form')
const $input = $('#input')
const $submit = $('#submit')
const $results = $('#results')

$form.addEventListener('submit', async (event) => {
    event.preventDefault()
    const {value} = $input 
    if (!value) return 

    $submit.setAttribute('disabled', '')
    $submit.setAttribute('aria-busy', 'true')

    const ipInfo = await fetchIpInfo(value)

    if (ipInfo) {
        $results.innerHTML = JSON.stringify(ipInfo, null, 2)
    }

    $submit.removeAttribute('disabled')
    $submit.removeAttribute('aria-busy')
})