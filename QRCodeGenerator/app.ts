// import QRCodeStyling from 'qr-code-styling';
// If cannot import, make sure to install declaration dependency file globals.d.ts

// app.ts
const form = document.getElementById('qr-form') as HTMLFormElement;
const urlInput = document.getElementById('url-input') as HTMLInputElement;
const qrCodeContainer = document.getElementById('qr-code') as HTMLElement;
const downloadBtn = document.getElementById('download-btn') as HTMLButtonElement;

const qrCode = new QRCodeStyling({
    width: 300,
    height: 300,
    margin: 0,
    qrOptions: {
        typeNumber: 0,
        mode: 'Byte',
        errorCorrectionLevel: 'Q'
    },
    dotsOptions: {
        color: '#000000',
        type: 'square'
    },
    backgroundOptions: {
        color: '#ffffff',
    },
    imageOptions: {
        crossOrigin: 'anonymous',
        margin: 20
    }
});

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const url = urlInput.value;
    qrCode.update({
        data: url
    });
    qrCode.append(qrCodeContainer);
    downloadBtn.style.display = 'block';
});

downloadBtn.addEventListener('click', () => {
    qrCode.download({ name: 'qr-code', extension: 'png' });
});
