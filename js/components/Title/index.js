function Title(css, content){
    console.log(css)

    return `
        <h1 style="${css[0]}">
            ${content}
        </h1>
    `
}