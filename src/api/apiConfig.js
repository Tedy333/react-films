const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: 'ffba56a7cf21b565102e11637e029a12',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;