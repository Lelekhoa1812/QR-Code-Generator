// import QRCodeStyling from 'qr-code-styling';
// If cannot import, make sure to install declaration dependency file globals.d.ts
// app.ts
var form = document.getElementById('qr-form');
var urlInput = document.getElementById('url-input');
var qrCodeContainer = document.getElementById('qr-code');
var downloadBtn = document.getElementById('download-btn');
var qrCode = new QRCodeStyling({
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
form.addEventListener('submit', function (e) {
    e.preventDefault();
    var url = urlInput.value;
    qrCode.update({
        data: url
    });
    qrCode.append(qrCodeContainer);
    downloadBtn.style.display = 'block';
});
downloadBtn.addEventListener('click', function () {
    qrCode.download({ name: 'qr-code', extension: 'png' });
});
