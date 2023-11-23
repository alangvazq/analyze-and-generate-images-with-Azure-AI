import axios from "axios";

async function analyzeImage(imageUrl) {
    const endpoint = "";
    const apikey = "";
    const url = endpoint + "/computervision/imageanalysis:analyze?api-version=2023-02-01-preview&features=caption&language=en&gender-neutral-caption=False";

    try {
        const response = await axios.post(url, { url: imageUrl }, {
            headers: {
                "Ocp-Apim-Subscription-Key": apikey,
                "Content-Type": "application/json",
            },
            params: {
                features: "caption, read",
                "model-version": "latest",
                language: "en",
            }
        });
        return response.data;
    }
    catch (error) {
        console.error("Error analyzing image: ", error);
        throw error;
    }
}

export default analyzeImage;