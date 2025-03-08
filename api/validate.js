let generatedPasscodes = new Set();

export default function handler(req, res) {
    if (req.method === 'POST') {
        const { passcode } = req.body;

        if (generatedPasscodes.has(passcode)) {
            generatedPasscodes.delete(passcode); 
            return res.status(200).json({ valid: true });
        } else {
            return res.status(400).json({ valid: false });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
