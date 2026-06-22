async function loadModules() {
    let modules = await import("./modules.js")
    let mathModules = await import("./math.js")

    console.log(modules)
    console.log(modules.default("Faizan"))
    console.log(modules.getUser("Faizan"))

    console.log(mathModules)
    console.log(mathModules.add(2,3))
    console.log(mathModules.sub(2,3))
}

loadModules()