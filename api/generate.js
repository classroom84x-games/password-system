let generatedPasscodes = new Set();
let dailyCount = 0;

export default function handler(req, res) {
    if (req.method === 'POST') {
        const passcode = generatePasscode();
        res.status(200).json({ passcode, dailyCount });
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
    dailyCount++;
    return passcode;
}
