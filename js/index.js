const root = document.querySelector('#root')
const textTitle = 'Mengão Campeão Mundial'


//Tagged template strings
const title = Title`
    color: red;
    font-size: 60px;
    lsdfalksjflakjsdfkaj
    ${textTitle}
`

root.insertAdjacentHTML("beforeend", title)