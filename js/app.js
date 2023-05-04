document.getElementById('btn-add').addEventListener('click', function () {

    const bookListTable = document.getElementById('book-list');
    const bookNameValue = document.getElementById('name');
    const bookname = bookNameValue.value;
    const serialNumber = document.getElementById('serial');
    const serial = serialNumber.value;

    const listElement = document.createElement('tbody');


    listElement.innerHTML = `

    <tr>
      <th scope="row">${serial}</th>
       <td>${bookname}</td>
       <td>
        <button>Edit</button>
        <button>delete</button>
        </td>

    </tr>
    `

    bookListTable.appendChild(listElement);






})