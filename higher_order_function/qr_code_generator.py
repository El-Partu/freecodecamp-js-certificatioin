import qrcode

data = "https://forms.gle/33gJjY5DLR8BjTG98"
qr = qrcode.make(data)
qr.save("/home/el-partu/Downloads/qr_code.png")
print("QR code generated and saved as qr_code.png")