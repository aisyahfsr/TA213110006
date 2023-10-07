// Post data dari checkout form
function postChckoutFormData(event) {
    event.preventDefault();

    // Ambil data dari form
    const form = event.target;
    const product = form.querySelector('[name="Product"]').value;
    const price = form.querySelector('[name="Product"]').value;
    const quantity = form.querySelector('[name="Price"]').value;
    const name = form.querySelector('[name="Name"]').value;
    const adress = form.querySelector('[name="Address"]').value;
    const phone = form.querySelector('[name="Telepone"]').value;
    const payment = form.querySelector('[name="Payment"]').value;
    const shipping = form.querySelector('[name="Shipping"]').value;

    // Buat objek data
    const data = {
        produc_name: product,
        price: price,
        quantity: quantity,
        name: name,
        adress: adress,
        phone_number: phone,
        payment_method: payment,
        shipping_method: shipping
    };

    // Kirim data sebagai JSON
    fetch("http://localhost:5001/checkout", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                alert('Proses Checkout Telah Berhasil.');
                form.reset();
            } else {
                alert('Maaf, terjadi kesalahan. Silakan coba lagi.');
            }
        })
        .catch(error => console.error('Error sending checkout data:', error));
}


// Event listener untuk form submission
document.querySelector('#checkoutForm').addEventListener('submit', postChckoutFormData);