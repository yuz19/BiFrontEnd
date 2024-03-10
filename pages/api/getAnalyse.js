import axios from 'axios';

async function postData(data) {
    try {
        const response = await axios.post('/api/your_endpoint/', data);
        return response.data;
    } catch (error) {
        console.error('Error:', error);
    }
}

// Utilisez la fonction postData où vous en avez besoin
postData(yourData).then(data => {
    // Traitez les données renvoyées ici
    console.log(data);
});
