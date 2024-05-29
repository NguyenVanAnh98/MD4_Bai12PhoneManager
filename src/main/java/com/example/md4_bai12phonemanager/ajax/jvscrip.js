// function createSmartphone() {
//     // Prevent the default form submission event
//     event.preventDefault();
//     // Get data from the form
//     let producer = document.getElementById("producer").value;
//     let model = document.getElementById("model").value;
//     let price = document.getElementById("price").value;
//     let newSmartphone = {
//         "producer": producer,
//         "model": model,
//         "price": price
//     };
//     // Make an AJAX call to save the new smartphone
//     $.ajax({
//         headers: {
//             'Accept': 'application/json',
//             'Content-Type': 'application/json'
//         },
//         type: "POST",
//         data: JSON.stringify(newSmartphone),
//         url: "http://localhost:8080/api/smartphones",
//         success: refreshSmartphoneList
//     });
// }
//
// function refreshSmartphoneList() {
//     $.ajax({
//         type: "GET",
//         url: "http://localhost:8080/api/smartphones",
//         success: function (data) {
//             console.log(data);
//             let content = '<table id="smartphone-table" border="1"><tr>' +
//                 '<th>Producer</th>' +
//                 '<th>Model</th>' +
//                 '<th>Price</th>' +
//                 '<th>Delete</th>' +
//                 '<th>Edit</th>' +
//                 '</tr>';
//             data.forEach(smartphone => {
//                 content += renderSmartphoneRow(smartphone);
//             });
//             content += "</table>";
//             document.getElementById('smartphone-container').innerHTML = content;
//             document.getElementById('smartphone-container').style.display = "block";
//             document.getElementById('add-smartphone').style.display = "none";
//             document.getElementById('edit-smartphone-section').style.display = "none";
//         }
//     });
// }
//
// function renderSmartphoneRow(smartphone) {
//     return `<tr>
//                 <td>${smartphone.producer}</td>
//                 <td>${smartphone.model}</td>
//                 <td>${smartphone.price}</td>
//                 <td><button class="delete-btn" onclick="removeSmartphone(${smartphone.id})">Delete</button></td>
//                 <td><button class="edit-btn" onclick="showEditForm(${smartphone.id})">Edit</button></td>
//             </tr>`;
// }
//
// function showAddForm() {
//     document.getElementById('smartphone-container').style.display = "none";
//     document.getElementById('add-smartphone').style.display = "block";
//     document.getElementById('edit-smartphone-section').style.display = "none";
// }
//
// function removeSmartphone(id) {
//     $.ajax({
//         type: "DELETE",
//         url: `http://localhost:8080/api/smartphones/${id}`,
//         success: refreshSmartphoneList
//     });
// }
//
// function renderEditForm(smartphone) {
//     return `<tr>
//                 <td><label for="producer-edit">Producer:</label></td>
//                 <td><input type="text" id="producer-edit" value="${smartphone.producer}"></td>
//             </tr>
//             <tr>
//                 <td><label for="model-edit">Model:</label></td>
//                 <td><input type="text" id="model-edit" value="${smartphone.model}"></td>
//             </tr>
//             <tr>
//                 <td><label for="price-edit">Price:</label></td>
//                 <td><input type="text" id="price-edit" value="${smartphone.price}"></td>
//             </tr>
//             <tr>
//                 <td></td>
//                 <td><input type="submit" value="Edit" onclick="updateSmartphone(${smartphone.id})"></td>
//             </tr>`;
// }
//
// function showEditForm(id) {
//     $.ajax({
//         type: "GET",
//         url: `http://localhost:8080/api/smartphones/${id}`,
//         success: function (data) {
//             console.log(data);
//             let content = '<form id="edit-smartphone" onsubmit="updateSmartphone(' + id + '); return false;">' +
//                 '<h1>Edit Smartphone</h1>' +
//                 '<table>';
//             content += renderEditForm(data);
//             content += '</table></form>';
//             document.getElementById('edit-smartphone-section').innerHTML = content;
//             document.getElementById('smartphone-container').style.display = "none";
//             document.getElementById('add-smartphone').style.display = "none";
//             document.getElementById('edit-smartphone-section').style.display = "block";
//         }
//     });
// }
//
// function updateSmartphone(id) {
//     event.preventDefault();
//     // Get updated data from the form
//     let producer = document.getElementById("producer-edit").value;
//     let model = document.getElementById("model-edit").value;
//     let price = document.getElementById("price-edit").value;
//     let updatedSmartphone = {
//         "producer": producer,
//         "model": model,
//         "price": price
//     };
//     $.ajax({
//         headers: {
//             'Accept': 'application/json',
//             'Content-Type': 'application/json'
//         },
//         type: "PUT",
//         data: JSON.stringify(updatedSmartphone),
//         url: `http://localhost:8080/api/smartphones/${id}`,
//         success: refreshSmartphoneList
//     });
// }
