// pages/api/cloudinaryLoader.js

export default function handler(req, res) {
    if (req.method === 'GET') {
      const { src, width, quality } = req.query;
  
      const params = ['f_auto', 'c_limit', `w_${width}`, `q_${quality || 'auto'}`];
      const cloudinaryUrl = `https://res.cloudinary.com/demo/image/upload/${params.join(',')}${src}`;
  
      res.status(200).json({ url: cloudinaryUrl });
    } else {
      res.setHeader('Allow', ['GET']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  }
  