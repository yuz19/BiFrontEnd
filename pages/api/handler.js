// pages/api/save-credentials.js

import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  if (req.method === 'POST') {
    const { host, user, password, database , port } = req.body;

    // Write credentials to .env file
    const envFilePath = path.join(process.cwd(), '../BiBackend/.env');
    const envData = `DB_HOST=${host}
DB_USER=${user}
DB_PASSWORD=${password}
DB_NAME=${database}
DB_PORT=${port}`;
    fs.writeFileSync(envFilePath, envData);

    res.status(200).json({ message: 'Credentials saved successfully' });
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
