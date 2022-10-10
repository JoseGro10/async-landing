const API = 'https://youtube138.p.rapidapi.com/channel/videos/?id=UCv1xjGi8KibuoOK8StRFCWg&hl=en&gl=US';

const content = null || document.getElementById('content');

const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '331181735cmsha4e0c510e0fa870p19ecc5jsn83d0ea2a9dfd',
        'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
    }
};

async function fetchData(urlApi) {
    const response = await fetch(urlApi, options);
    const data = await response.json();
    return data;
}

//Funcion que se llama asi misma
(async () => {
    try {
        const videos = await fetchData(API);
        //Template HTML 
        let view = `
        ${videos.contents.map(video => `
        <div class="group relative">
        <div
          class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
          <img src="${video.video.thumbnails[0].url}" alt="${video.video.title}" class="w-full">
        </div>
        <div class="mt-4 flex justify-between">
          <h3 class="text-sm text-gray-700">
            <span aria-hidden="true" class="absolute inset-0"></span>
            ${video.video.title}
          </h3>
         </div>
        </div>
        `).slice(0,4).join('')}
        `;
        content.innerHTML = view;
    } catch(error) {
        console.log(error);
        alert('Falle, dile al programador que lo solucione :(');
    }
})();