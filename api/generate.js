let generatedPasscodes = new Set();

export default function handler(req, res) {
    if (req.method === 'POST') {
        const passcode = generatePasscode();
        res.status(200).json({ passcode });
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}

function generatePasscode() {
    let passcode;
    do {
        passcode = Math.floor(100000 + Math.random() * 900000).toString();
    } while (generatedPasscodes.has(passcode));
    
    generatedPasscodes.add(passcode);
    return passcode;
}
