// On utilise une petite bibliothèque pour envoyer l'email (ex: Resend ou Nodemailer)
export default async function handler(req, res) {
    if (req.method !== 'POST') {
      return res.status(405).json({ error: 'Méthode non autorisée' });
    }
  
    const { email, subject, message, _b_trap } = req.body;
  
    // Sécurité HoneyPot (si le robot a rempli le champ, on ignore)
    if (_b_trap) {
      return res.status(200).json({ success: true, message: "Bot blocked" });
    }
  
    // Ici, tu connectes un service d'envoi (comme Resend, gratuit et pro)
    // Pour l'instant, on simule la réussite vers ton mail hfentreprises@gmail.com
    console.log(`Envoi du mail de ${email} vers hfentreprises@gmail.com`);
  
    return res.status(200).json({ success: true });
  }