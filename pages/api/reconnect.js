export default async function reconnect(req, res) {
    if (req.method === 'POST') {
      const { host, user, password, database, port } = req.body;
  
      // Prepare the request body
      const requestBody = JSON.stringify({ host, user, password, database, port });
  
      // Send the identification data to the Django API
      try {
        const response = await fetch('http://localhost:8000/api/resql/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: requestBody,
        });
  
        // Check if the request was successful
        if (response.ok) {
          res.status(200).json({ message: 'Credentials saved successfully' });
        } else {
          // Handle the case where the request was not successful
          throw new Error('Failed to save credentials');
        }
      } catch (error) {
        console.error('Error saving credentials:', error);
        res.status(500).json({ error: 'Failed to save credentials' });
      }
    } else {
      res.status(405).json({ error: 'Method Not Allowed' });
    }
  }
  